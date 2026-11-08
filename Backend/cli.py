import click

from db.search_db import searchDB
from app import app

@app.cli.command("search")
@click.argument("terms", nargs=-1,required=True)

def query_command(terms):
    results = list(searchDB(list(terms)))
    
    if not results:
        click.echo("No venues found")
        return
    else:
        for venue in results:
            click.echo(venue)