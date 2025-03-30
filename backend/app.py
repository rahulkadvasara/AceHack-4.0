from flask import Flask, request, jsonify, render_template
from database import init_db, db
from models import User, ResearchPaper
from routes import api
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['UPLOAD_FOLDER'] = 'uploads'

db.init_app(app)
app.register_blueprint(api)

@app.route("/")
def home():
    return render_template("login.html")

if __name__ == "__main__":
    with app.app_context():
        init_db()
    app.run(debug=True)
