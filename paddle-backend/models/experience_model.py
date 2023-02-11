from pydantic import BaseModel, Field, EmailStr
from bson import ObjectId
from typing import List
from models.py_object_id import PyObjectId


class ExperienceModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str = Field(...)
    coord: dict = Field(...)
    address: str = Field(...)
    country: str = Field(...)
    city: str = Field(...)
    imageUrl: str = Field(...)
    description: str = Field(...)
    date: str = Field(...)
    time: str = Field(...)
    summary: str = Field(...)
    videoUrl: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "name": "saving turtles",
                "coord": "[  ]",
                "address": "some address",
                "country": "madagascar",
                "imageUrl": "",
                "description": ""
            }
        }
