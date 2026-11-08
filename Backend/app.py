
from flask import Flask, render_template, request
from flask_restful import Api, Resource

from db.search_db import searchDB

app = Flask(__name__)
api = Api(app)

@app.route('/', methods=['GET'])
def index():
    results =[]
    query = request.form.get('query', '').strip()
    
    if query is not None or '':
        try:
            results = searchDB(query)
        except Exception as e:
            print(e)
            return {"error": "Could not perform query."}, 500
    
    if results is []:
        return {"message": "No venues found!"}, 204
    
    return render_template('index.html', results=results, query=query), 200
if __name__ == "__main__":
    app.run(debug=True)