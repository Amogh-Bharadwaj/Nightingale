from flask import Flask,jsonify, request, Blueprint,current_app as app
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util.number import bytes_to_long, long_to_bytes
from Crypto.Util.Padding import pad, unpad

BLOCK_SIZE = 32
ciphers_blueprint = Blueprint("ciphers", __name__, url_prefix="/ciphers")

@ciphers_blueprint.route("/AES",methods=["POST"])
@jwt_required(optional=True)
def AESCrypt():
    option = request.json["option"]
    message = request.json["message"]
    key = get_random_bytes(16)
    e_cipher = AES.new(key, mode=AES.MODE_ECB)
  
    if option == "decrypt":
        key = long_to_bytes(int(request.json["key"]))
        print("Key in decrypt: ",key)
        d_cipher = AES.new(key, AES.MODE_ECB)
        pt = d_cipher.decrypt(long_to_bytes(message))
        try:
            test = unpad(pt,BLOCK_SIZE).decode()
        except:
            return {"AESDecryptError":"Invalid key or ciphertext!"}
        return {"Plaintext":test}
    else:
        print("message: ",message)
        ct = e_cipher.encrypt(pad(message.encode(),BLOCK_SIZE))
        print("ct:",ct)
        return {"Ciphertext":str(bytes_to_long(ct)),"Key":str(bytes_to_long(key))}

