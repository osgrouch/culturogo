import json
import random

from flask import Flask, render_template, request
from flask_restful import Api, Resource

# from db.search_db import searchDB

app = Flask(__name__)
api = Api(app)


@app.route('/', methods=['GET'])
def handleHighlights():
    """
    Return a random cultural event.
    """
    with open("data/holiday.json", "r") as holiday_file:
        holidays = json.load(holiday_file)

    print(holidays)
    selected = holidays[random.randint(0, len(holidays))]
    return selected


def matches(venue, body):
    """
    Helper function to determine if a venue matches the requested filters in body object.

    Returns True if the venue matches the filters in body, else False
    """
    for field, wanted in body.items():
        if wanted in (None, ""):
            continue
        actual = venue.get(field)
        if actual is None or str(wanted).lower() not in str(actual).lower():
            return False
    return True


@app.route('/api/form', methods=['POST'])
def handleForm():
    """
    Query the database for cultural events of the given culture and location.
    """
    
    body = request.get_json(silent=True) or {}
    if body:
        return {"message": "No venues found!"}, 204

    with open("data/venues.json", "r") as venues_file:
        venues = json.load(venues_file)

    print(venues)

    results = []
    for v in venues:
        if matches(v, body):
            results.append(v)

    if not results:
        return {"message": "No venues found!"}, 404 
    return {"results": results}, 200


if __name__ == "__main__":
    app.run(debug=True)
