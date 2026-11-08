import datetime
import json 
import os
from typing import List
from dotenv import load_dotenv

from google import genai
from google.genai import types
from pydantic import BaseModel
from pathlib import Path

load_dotenv(Path(__file__).resolve().parents[2] / "local"/  ".env")

db_file = "./data/venues.json"
private_key = os.getenv("GEMINI_API_KEY")
if private_key is None or "":
    print("Could not get key")


client = genai.Client(api_key=private_key)
current_time = datetime.datetime.now().isoformat()

class formatInfo(BaseModel):
    name: str
    address: str
    culture: str
    
    event_start: str
    event_end: str
    description: str
    web_link: str
    
class Result(BaseModel):
    venues: List[formatInfo]

def verifyKey():
    if private_key is None:
        print("Could not get key")
        return False
    return True

def findVenuesBy(terms):
    if verifyKey() is True:
        
        prompt = f"Search the web for: {' '.join(terms)} from {current_time}. Optional fields to add are event end date and time, descriptions, the type of event, and website links. Return results as structed json data. Do not exceed over 5 results."
        try:
            response = client.models.generate_content(
                model = "gemini-3.1-flash-lite",
                contents = prompt,
                config = types.GenerateContentConfig(
                    tools = [types.Tool(google_search = types.GoogleSearch())],
                    response_mime_type= "application/json",
                    response_json_schema= Result.model_json_schema()
                )
            
            )
            raw_text = response.text
            if not raw_text:
                return
            
        except Exception as e:
            print("Gemini request failed, reason: ", e)
            return
        
        try:
            new_venues = json.loads(raw_text)["venues"]
        except(json.JSONDecodeError, KeyError, TypeError):
            print("Web query returned unexpected results")
            return
        
        updateDB(new_venues)
    else:
        print("Invalid API key")
        
    
def updateDB(venue_info):
    try:
        with open(db_file, "r") as db:
            exists = json.load(db)
        if not isinstance(exists, list):
            exists = []
    except (FileNotFoundError, json.JSONDecodeError):
        exists = []
        
    in_venues = {(v.get("name", "").lower(), v.get("address", "").lower())for v in exists}
    next_id = 0
    
    for v in venue_info:
        key = (v.get("name", "").lower(), v.get("address","").lower())
        if key in in_venues:
            continue
        
        v["ID"] =  next_id
        next_id += 1
        exists.append(v)
        in_venues.add(key)
    
    #data = json.dumps(venue_info, indent = 4)

    with open(db_file, "w") as db:
        #db.write(data)
        json.dump(exists, db, indent=4)
