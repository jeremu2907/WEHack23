import os
from fastapi import FastAPI, Body, HTTPException, status
from fastapi.responses import Response, JSONResponse
from fastapi.encoders import jsonable_encoder
from models.experience_model import ExperienceModel
import motor.motor_asyncio

app = FastAPI()
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URL"])
db = client.paddle


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/api/v1/experience")
async def get_experience(id: str = None, name: str = None):
    if id != None:
        created_experience = await db["experience"].find_one({"_id": id})
    elif name != None:
        created_experience = await db["experience"].find_one({"name": name})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_experience)


@app.post("/api/v1/experience", response_description="Add new experience", response_model=ExperienceModel)
async def create_experience(experience: ExperienceModel = Body(...)):
    experience = jsonable_encoder(experience)
    new_experience = await db["experience"].insert_one(experience)
    created_experience = await db["experience"].find_one({"_id": new_experience.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_experience)
