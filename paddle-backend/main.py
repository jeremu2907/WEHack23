import os
from fastapi import FastAPI, Body, HTTPException, status
from fastapi.responses import Response, JSONResponse
from fastapi.encoders import jsonable_encoder
from models.experience_model import ExperienceModel
from typing import List
import motor.motor_asyncio

app = FastAPI()
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URL"])
db = client.paddle


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/api/v1/experience")
async def get_experience(id: str = None):
    created_experience = await db["experience"].find_one({"_id": id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_experience)


@app.get("/api/v1/experiences")
async def get_experiences(name: str = None, city: str = None, groupby: str = 'name'):
    resp_body = []
    db_args = {}
    if name is not None:
        db_args['name'] = {'$eq': name}
    if city is not None:
        db_args['city'] = {'$eq': city}
    cursor = db["experience"].find(db_args).sort(groupby)
    for document in await cursor.to_list(length=100):
        resp_body.append(document)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=resp_body)


@app.post("/api/v1/experience", response_description="Add new experience", response_model=ExperienceModel)
async def create_experience(experience: ExperienceModel = Body(...)):
    experience = jsonable_encoder(experience)
    inserted_experience = await db["experience"].insert_one(experience)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=inserted_experience.inserted_id)


@app.post("/api/v1/experiences", response_description="Add new experiences", response_model=ExperienceModelList)
async def create_experience(experiences: List[ExperienceModel] = Body(...)):
    experiences = jsonable_encoder(experiences)
    inserted_experiences = await db["experience"].insert_many(experiences)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=inserted_experiences.inserted_ids)