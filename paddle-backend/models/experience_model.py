from pydantic import BaseModel, Field, EmailStr
from bson import ObjectId
from models.py_object_id import PyObjectId


class ExperienceModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str = Field(...)
    coord: str = Field(...)
    address: str = Field(...)
    country: str = Field(...)
    imageUrl: str = Field(...)
    description: str = Field(...)

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
