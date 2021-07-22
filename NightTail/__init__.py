from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv, find_dotenv
import os

cors=CORS()

def create_app():
    app = Flask(__name__,static_url_path="")
    load_dotenv()
    app.config["HOSTNAME"]=os.getenv("HOSTNAME")
    app.config["PORT"]=os.getenv("PORT")
    app.config["DATABASE"]=os.getenv("DATABASE")
    app.config["USER"]=os.getenv("USER")
    app.config["PASSWORD"]=os.getenv("PASSWORD")

    jwt.init_app(app)
    cors.init_app(app)

    return app

