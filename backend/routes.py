from flask import Blueprint, request, jsonify
from database import db
from models import User, ResearchPaper

api = Blueprint('api', __name__)

@api.route("/register", methods=["POST"])
def register():
    data = request.json
    new_user = User(username=data['username'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully!"})

@api.route("/upload", methods=["POST"])
def upload():
    file = request.files['file']
    file_path = f"uploads/{file.filename}"
    file.save(file_path)
    return jsonify({"message": "File uploaded!"})
