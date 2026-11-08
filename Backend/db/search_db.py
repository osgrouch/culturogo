import json
import re

from gather_venues import findVenuesBy

db_file = "./data/venues.json"

def searcDB(terms):
    venues = []
    with open(db_file, 'r') as db:
        data = json.load(db)
        if data is None or '{}':
            findVenuesBy()
        for term in terms:
            to_find = r""+term
            for line in data:
                got_line = line.strip()
                match = re.search(to_find, got_line, flags=re.IGNORECASE)
                if match is True:
                    venues.append(got_line)
                    break
            
    return venues
    
# eventually, break down search into filtered queries
def byEvent(term):
    None
    
def byLocation(term):
    None
    
def byNationality(term):
    None