from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv, find_dotenv
from flask_mail import Mail
import os


jwt = JWTManager()
cors=CORS()
mail = Mail()

from NightTail.auth import auth_blueprint
def create_app():

    app = Flask(__name__,static_folder='../public',static_url_path='')
    load_dotenv(find_dotenv())
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_KEY")
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = 24 * 60 * 60
    app.config["CORS_HEADERS"] = "Content-Type"
    app.config["DEBUG"] = True
    app.config["MAIL_SERVER"] = 'smtp.gmail.com'
    app.config["MAIL_PORT"] = 465
    app.config["MAIL_USE_TLS"] = False
    app.config["MAIL_USE_SSL"] = True
    app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
    app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
    
    
    jwt.init_app(app)
    cors.init_app(app)
    mail.init_app(app)

    app.register_blueprint(auth_blueprint)

    @app.errorhandler(404)
    def serve(e):
        return send_from_directory(app.static_folder, 'index.html')

    return app

