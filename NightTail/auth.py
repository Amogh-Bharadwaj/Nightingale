from flask import jsonify, request, Blueprint
from flask_jwt_extended import jwt_optional, get_jwt_identity, create_access_token
from flask_mail import Message
import psycopg2
import os

from dotenv import load_dotenv
load_dotenv()

from random import randint
otp = randint(pow(10,5),pow(10,6)-1) #otp generation



auth_blueprint = Blueprint("auth", __name__, url_prefix="/tail")

@auth_blueprint.route("/signup", methods=["POST"])
def SignUp():
    #Fetching data from frontend
    emailid = request.json["email"]
    alias = request.json["alias"]
    password = request.json["password"]
    
    #Connecting to database
    conn=psycopg2.connect(host=os.getenv("HOSTNAME"),port=os.getenv("PORT"), database=os.getenv("DATABASE"),user=os.getenv("USER"),password=os.getenv("PASSWORD"))
    cursor=conn.cursor()
    
    #Checking if email already exists
    email_sql="SELECT COUNT(*) FROM users where user_email=(%s)"
    email_data=(emailid,)
    cursor.execute(email_sql,email_data)
    result = int(cursor.fetchall()[0][0])
    if result>0:
        return {"mailError":"Email exists already"}
    
    #Checking if alias already exists
    alias_sql="SELECT COUNT(*) FROM users where user_alias=(%s)"
    alias_data=(alias,)
    cursor.execute(alias_sql,alias_data)
    result = int(cursor.fetchall()[0][0])
    if result>0:
        return {"aliasError":"Alias exists already"}

    body = f"Thank you for using Nightingale! Your OTP is: {otp}"
    print("Mail body:\n",body)

    msg = Message("OTP For Nightingale",sender = os.getenv("MAIL_USERNAME"),recipients = [emailid])
    msg.body = body
    
        
    mail.send(msg)
    
    return {"success":"otp sent"}



@auth_blueprint.route("/signup/otp", methods=["POST"])
def OTPVerification():
    #Fetching data from frontend
    emailid = request.json["email"]
    alias = request.json["alias"]
    password = request.json["password"]
    user_otp = int(request.json["otp"])
    if(user_otp!=otp):
        return {"otpError":"Wrong otp"}
    
    conn=psycopg2.connect(host=os.getenv("HOSTNAME"),port=os.getenv("PORT"), database=os.getenv("DATABASE"),user=os.getenv("USER"),password=os.getenv("PASSWORD"))
    cursor=conn.cursor()

     #Inserting user data into the database
    insert_sql="INSERT INTO users VALUES (DEFAULT,%s,%s,%s);"
    insert_data=(emailid,alias,password)
    cursor.execute(insert_sql,insert_data)
    conn.commit()

    cur.execute("SELECT user_id from user WHERE user_alias = (%s)", (alias,))
    result = cur.fetchone()

    cur.close()
    access_token = create_access_token(identity=int(result[0][0]))
    return jsonify(jwt=access_token)
    



@auth_blueprint.route("/login", methods=["POST"])
def LogIn():
    #Fetching data from frontend
    alias=request.json["user_alias"]
    password=request.json["user_password"]

     #Connecting to database
    conn=psycopg2.connect(host=os.getenv("HOSTNAME"),port=os.getenv("PORT"), database=os.getenv("DATABASE"),user=os.getenv("USER"),password=os.getenv("PASSWORD"))
    cursor=conn.cursor()
    
    #Checking if alias exists
    alias_exist_sql="SELECT user_id,user_password FROM users WHERE user_alias=(%s)"
    alias_exist_data=(alias,)
    cursor.execute(alias_exist_sql,alias_exist_data)
    if(cursor.rowcount==0):
        return {"aliasError":"No such alias exists"}

    result=cursor.fetchone()
    #Check if password is correct
    if(str(result[0][1])!=password):
        return {"passwordError":"Wrong password"}
    
    access_token = create_access_token(identity=result[0][0])
    return jsonify(jwt=access_token)
    

    




    





    


