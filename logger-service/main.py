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


@app.post("/user")
def addUser(UserDetails: User, session: Session = Depends(get_session)):
    try:
        session.add(UserDetails)
        session.commit()
        session.refresh(UserDetails)
        return {"Message": "Added User Details Successfully", "data":UserDetails}
    except SQLAlchemyError as e:
        session.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to insert data {e}")
        # return {"Message": "Failed to insert into user details.", "error":e}

@app.get("/getUser")
def getUser(session: Session = Depends(get_session)):
    users = session.exec(select(User)).all()
    return {"Message":"Fetched successfully", "data":users} 