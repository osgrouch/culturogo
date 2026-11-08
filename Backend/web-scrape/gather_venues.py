import datetime
import json 
import os
from typing import List

from google import genai
from google.genai import types
from pydantic import BaseModel

#from enviorment import python-dotenv
db_file = "./data/venues.json"
private_key = 0 # os.getenv("PRIVATE_GEMINI_API_KEY")

client = genai.Client()
current_time = datetime.datetime.now().isoformat()

class formatInfo(BaseModel):
    ID: int
    name: str
    location: str
    culture: str
    
    scheduled: str
    description: str
    web_link: str
    
class Result(BaseModel):
    venues: List[formatInfo]


def findVenuesBy(terms):
    prompt = f"Search the web for: {''.join(terms)} from {current_time}. Return the results as structed json data"
    
    response = client.models.generate_content(
        model = "gemini-3-flashpreview",
        contents = prompt,
        config = types.GenerateContentConfig(
            tools = [types.Tool(google_search = types.GoogleSearch())],
            response_mime_type= "application/json",
            response_json_schema= Result.model_json_schema()
        )
    )
    
    updateDB(response)
        
    
def updateDB(venue_info):
    data = json.dumps(venue_info, indent = 4)
    with open(db_file, "w") as db:
        db.write(data)
