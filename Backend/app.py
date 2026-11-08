"""
Note: COMMENTS COPIED FROM SSE FLASK WORKSHOP

app.py - Flask-RESTful server that exposes toolbox.py as an API.

Each "Resource" is a class. Its methods (get, post, put, delete) are the
HTTP methods it responds to. api.add_resource() ties a class to a URL.

Code from the Flask Workshop was copied and reused to create code that shows a web page that displays the text "Hello, World!"
"""

from flask import Flask
from flask_restful import Api, Resource

from db.search_db import searchDB

app = Flask(__name__)
api = Api(app)

class Home(Resource):
    def get(self):
        try:
            return "CulturoGO!"
        except ValueError as err:
            return {"error": str(err)}, 400

class Culture(Resource):
    def get(self):
        try:
            return "Jewish, Muslim, Indian, Korean, etc."
        except ValueError as err:
            return {"error": str(err)}, 400

class EventType(Resource):
    def get(self):
        try:
            return "Event types"
        except ValueError as err:
            return {"error": str(err)}, 400

class Location(Resource):
    def get(self):
        try:
            # return "Rochester, NY, etc."
            return searchDB("Seoul")
        except ValueError as err:
            return {"error": str(err)}, 400

api.add_resource(Home, "/")
api.add_resource(Culture, "/api/culture")
api.add_resource(EventType, "/api/eventtype")
api.add_resource(Location, "/api/location")


if __name__ == "__main__":
    app.run(debug=True)