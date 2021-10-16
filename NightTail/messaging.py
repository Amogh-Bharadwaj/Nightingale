from flask import Flask,jsonify, request, Blueprint,current_app as app
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from flask_mail import Message
from NightTail import mail
import datetime
import psycopg2
import os


from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv(),verbose=True)
print(os.environ.get("PSQLUSER"),find_dotenv())
  
DATABASE_URL = os.environ['DATABASE_URL']
conn = psycopg2.connect(DATABASE_URL, sslmode='require') 
cursor=conn.cursor()

messaging_blueprint = Blueprint("messaging", __name__, url_prefix="/tail")

@messaging_blueprint.route("/send",methods=["POST"])
@jwt_required(optional=True)
def sendMessage():
    id_check = get_jwt_identity()
    sender_alias = ""
    if id_check:
        login_pass=True
        alias_sql="SELECT json_build_object('userAlias',user_alias) FROM users WHERE user_id=(%s)"
        alias_data=(id_check,)
        cursor.execute(alias_sql,alias_data)
        result = cursor.fetchall()
        alias=result[0][0]["userAlias"]
    else:
        return {"authPass":"false"}
    
    receiver_alias = request.json["receiver"]
    message = str(request.json["msg"])

    check_sql="SELECT COUNT(*) FROM users WHERE user_alias=(%s);"
    check_data=(receiver_alias,)
    cursor.execute(check_sql,check_data)
    
    if cursor.fetchall()[0][0]==0:
        return {"AliasError":"No such alias exists."}

    inbox_sql="SELECT COUNT(*) FROM inbox WHERE user_alias=(%s);"
    inbox_data=(receiver_alias,)
    cursor.execute(inbox_sql,inbox_data)

    

    time = datetime.datetime.now()
    month= time.strftime("%b")
    date = time.strftime("%d")
    year = time.strftime("%Y")

    suffix="th"
    if date=="1":
        suffix="st"
    elif date=="2":
        suffix=="nd"
    elif date=="3":
        suffix=="rd"
    time=date+suffix+" "+month+" "+year
    

    if cursor.fetchall()[0][0]==0:
        inbox_sql="INSERT INTO inbox VALUES(%s,%s)"
        inbox_data=(alias,[sender,message,time])
        
    else:
        inbox_sql="UPDATE inbox SET messages = array_cat(messages,%s) WHERE user_alias=(%s);"
        inbox_data=([[alias,message,time]],receiver_alias)

    cursor.execute(inbox_sql,inbox_data)

    conn.commit()

    cursor.execute("SELECT json_build_object('user_alias',json_agg(user_alias),'messages',json_agg(messages)) FROM inbox;")

    print(cursor.fetchall())
    return {"Success":"Message sent."}

@messaging_blueprint.route("/get-inbox",methods=["POST"])
@jwt_required(optional=True)
def getInbox():
    alias = request.json["alias"]
    get_sql="SELECT json_build_object('user_alias',json_agg(user_alias),'messages',json_agg(messages)) FROM inbox WHERE user_alias=(%s);"
    get_data=(alias,)
    cursor.execute(get_sql,get_data)
    result = cursor.fetchall()[0][0]["messages"][0]
    return {"Messages":result}

 

    


    
    

    