from sqlmodel import SQLModel, Field
from pydantic import BaseModel, EmailStr
from typing import Optional

class User(SQLModel, table = True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: EmailStr
    password: str
    is_email_verified: bool = Field(default=False)
    # created_at: time
    