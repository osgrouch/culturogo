import json
import re

from gather_venues import findVenuesBy

db_file = "./data/venues.json"

def search_db(terms):
    venues = []
    with open(db_file, 'r') as db:
        data = json.load(db)
        if data is None or '{}':
            findVenuesBy()
        for line in data:
            got_line = line.strip()
            match = re.search
                
    return venues
    
def byEvent(term):
    None
    
def byLocation(term):
    None
    
def byNationality(term):
    None