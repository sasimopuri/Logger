from fastapi import FastAPI, Depends, HTTPException, status
from contextlib import asynccontextmanager
from Database import create_db_and_tables, Session, get_session
from Models import User
from sqlmodel import select
from sqlalchemy.exc import IntegrityError, SQLAlchemyError
@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield
    
app= FastAPI(lifespan=lifespan)

@app.get("/")
def hello():
    return {"Hello":"Logger"}