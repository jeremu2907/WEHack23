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
            "example":   {
                "_id": "5f6b52b9d24a8c73ca94fcaa",
                "name": "Beach Cleanup at Nassau",
                "coord": [25.0478, -77.3554],
                "address": "West Bay St, Nassau, Bahamas",
                "country": "Bahamas",
                "city": "Nassau",
                "image_url": "https://i.ibb.co/m43txHk/ocean-4920792-1280.jpg",
                "description": "Join us for a morning of fun and community service as we work together to clean up the beautiful beaches of Nassau. Our goal is to keep our shorelines litter-free and safe for wildlife.",
                "date": "2023-03-15",
                "time": "9:00 AM",
                "summary": "Join us for a morning of beach cleanup in Nassau!",
                "video_url": "https://www.example.com/beachcleanup1.mp4",
                "tags": ["beach", "cleanup", "community", "Nassau"]
            }
        }
