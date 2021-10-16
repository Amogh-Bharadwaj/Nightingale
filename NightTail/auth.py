from flask import Flask,jsonify, request, Blueprint,current_app as app
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from flask_mail import Message
from NightTail import mail

import psycopg2
import os

from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv(),verbose=True)
print(os.environ.get("PSQLUSER"),find_dotenv())

DATABASE_URL = os.environ['DATABASE_URL']
conn = psycopg2.connect(DATABASE_URL, sslmode='require')  
cursor=conn.cursor()

from random import randint
otp = randint(pow(10,5),pow(10,6)-1) #otp generation



auth_blueprint = Blueprint("auth", __name__, url_prefix="/tail")

@auth_blueprint.route("/logged-in")
@jwt_required(optional=True)
def LoggedIn():
    login_pass=False
    userId= get_jwt_identity()
    print("UserID:",userId)

    if userId:
        login_pass=True
        alias_sql="SELECT json_build_object('userAlias',user_alias) FROM users WHERE user_id=(%s)"
        alias_data=(userId,)
        cursor.execute(alias_sql,alias_data)
        result = cursor.fetchall()
        print("Result: ",result)
        alias=result[0][0]["userAlias"]
        
        print(login_pass,alias)
        return {"authPass":"true","alias":str(alias)}
    return {"authPass":"false"}
    



@auth_blueprint.route("/user-details")
@jwt_required(optional=True)
def EmailALiasList():
    details = []
    
    #Fetching all user emails and aliases
    details_sql="SELECT json_build_object('userEmail',json_agg(users.user_email),'userAlias',json_agg(user_alias)) FROM users"
        
    cursor.execute(details_sql)
    details = cursor.fetchall()[0]

    print("Details: ",details[0])
    
    return jsonify(emails=details[0]['userEmail'],aliases=details[0]['userAlias'])


@auth_blueprint.route("/signup", methods=["POST"])
def SignUp():
    #Fetching data from frontend
    emailid =  request.json["email"]
    alias = request.json["alias"]
    password = request.json["password"]
     
    #Checking if email already exists
    email_sql="SELECT COUNT(*) FROM users where user_email=crypt(%s,user_email)"
    email_data=(emailid,)
    cursor.execute(email_sql,email_data)
    result = int(cursor.fetchall()[0][0])
    if result>0:
        return {"mailError":"Email exists already!"}
    
    #Checking if alias already exists
    alias_sql="SELECT COUNT(*) FROM users where user_alias=(%s)"
    alias_data=(alias,)
    cursor.execute(alias_sql,alias_data)
    result = int(cursor.fetchall()[0][0])
    if result>0:
        return {"aliasError":"Alias exists already!"}

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
        
        return {"otpError":"Wrong OTP! Try again","You entered: ": str(user_otp),"Actual otp: ":str(otp)}
    
     #Inserting hashed user data into the database
    insert_sql = "INSERT INTO users VALUES (DEFAULT,crypt(%s,gen_salt('bf')),%s,crypt(%s, gen_salt('bf')));"
    insert_data=(emailid,alias,password)
    cursor.execute(insert_sql,insert_data)
    conn.commit()

    cursor.execute("SELECT user_id from users WHERE user_alias=(%s)", (alias,))
    result = cursor.fetchone()
    print("Result:",result[0])

    access_token = create_access_token(identity=int(result[0]))
    return jsonify(jwt=access_token)
    


@auth_blueprint.route("/login", methods=["POST"])
def LogIn():
    #Fetching data from frontend
    alias=request.json["user_alias"]
    password=request.json["user_password"]
    
    #Checking if alias exists
    alias_exist_sql="SELECT COUNT(*) FROM users WHERE user_alias=(%s)"
    alias_exist_data=(alias,)
    cursor.execute(alias_exist_sql,alias_exist_data)
    result = int(cursor.fetchall()[0][0])
    if result==0:
        return {"aliasError":"No such alias exists!"}

    #Check if password is correct
    password_sql="SELECT user_id FROM users where user_alias=(%s) AND user_password=crypt(%s,user_password)"
    password_data=(alias,password,)
    cursor.execute(password_sql,password_data)
    result = cursor.fetchall()
    print("Fetchall login:",result)
    if len(result) < 1:
        return {"passwordError":"Wrong password!"}


    access_token = create_access_token(identity=result[0][0])
    return jsonify(jwt=access_token)
    

    




    





    


