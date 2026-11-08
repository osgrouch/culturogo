import json

db_file = "./data/venues.json"

def addRow(newVenue):
    with open(db_file, "W") as db:
        json.dump(newVenue, db, indent=4)
    