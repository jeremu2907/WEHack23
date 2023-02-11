from pydantic import BaseModel, Field, EmailStr
from bson import ObjectId
from typing import List, Tuple
from models.py_object_id import PyObjectId
from datetime import date, time


class ExperienceModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str = Field(...)
    coord: Tuple[float, float] = Field(...)
    address: str = Field(...)
    country: str = Field(...)
    city: str = Field(...)
    image_url: str = Field(...)
    description: str = Field(...)
    date: str = Field(...)
    time: str = Field(...)
    summary: str = Field(...)
    video_url: str = Field(...)
    tags: List[str] = Field(...)

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
