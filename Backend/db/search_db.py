import json
import re

#from gather_venues import findVenuesBy
from scrape.gather_venues import findVenuesBy

db_file = "./data/venues.json"

def searchDB(terms):
    if isinstance(terms, str):
        terms = [terms]
    venues = []
    reg_pattern = [re.compile(re.escape(term.strip()), re.IGNORECASE)
                           for term in terms if term.strip()]
    
    for i in range(1):
        if(i != 1):
            
            try:
                with open(db_file, 'r') as db:
                    data = json.load(db)     
                if not isinstance(data, list):
                    data = []
            except (FileNotFoundError, json.JSONDecodeError):
                data = [] 
            except Exception:
                data = []

            for venue in data:
                text = json.dumps(venue, ensure_ascii=False)
                if all(p.search(text) for p in reg_pattern) and venue not in venues:
                            venues.append(venue)
            if venues is not []:
                return venues
            elif i == 0:
                findVenuesBy(terms)
    return venues
    
    
    
# eventually, break down search into filtered queries
#def byEvent(term):
    #None
    
#def byLocation(term):
#    None
    
#def byNationality(term):
#    None