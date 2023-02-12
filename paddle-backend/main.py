import os
from fastapi import FastAPI, Body, HTTPException, status
from fastapi.responses import Response, JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.openapi.docs import (
    get_redoc_html,
    get_swagger_ui_html,
    get_swagger_ui_oauth2_redirect_html,
)
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from models.experience_model import ExperienceModel
from typing import List
import motor.motor_asyncio

app = FastAPI(docs_url=None, redoc_url=None, openapi_url="/api/openapi.json")
origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/api/static", StaticFiles(directory="static"), name="static")
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URL"])
db = client.paddle


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get(app.swagger_ui_oauth2_redirect_url, include_in_schema=False)
async def swagger_ui_redirect():
        return get_swagger_ui_oauth2_redirect_html()


@app.get("/api/redoc", include_in_schema=False)
async def redoc_html():
        return get_redoc_html(
            openapi_url=app.openapi_url,
            title=app.title + " - ReDoc",
            redoc_js_url="/api/static/redoc.standalone.js",
        )


@ app.get("/api/docs", include_in_schema=False)
async def custom_swagger_ui_html():
        return get_swagger_ui_html(
            openapi_url=app.openapi_url,
            title=app.title + " - Swagger UI",
            oauth2_redirect_url=app.swagger_ui_oauth2_redirect_url,
            swagger_js_url="/api/static/swagger-ui-bundle.js",
            swagger_css_url="/api/static/swagger-ui.css",
        )


@app.get("/api/v1/experience")
async def get_experience(id: str = None):
    created_experience = await db["experience"].find_one({"_id": id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_experience)


@app.get("/api/v1/experiences")
async def get_experiences(name: str = None, city: str = None, country: str = None, groupby: str = 'name'):
    resp_body = []
    db_args = {}
    if name is not None:
        db_args['name'] = {'$eq': name}
    if city is not None:
        db_args['city'] = {'$eq': city}
    if country is not None:
        db_args['country'] = {'$eq': country}
    cursor = db["experience"].find(db_args).sort(groupby)
    for document in await cursor.to_list(length=100):
        resp_body.append(document)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=resp_body)


@app.post("/api/v1/experience", response_description="Add new experience", response_model=ExperienceModel)
async def create_experience(experience: ExperienceModel = Body(...)):
    experience = jsonable_encoder(experience)
    experience.city = experience.city.lower()
    experience.country = experience.country.lower()
    inserted_experience = await db["experience"].insert_one(experience)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=inserted_experience.inserted_id)


@app.post("/api/v1/experiences", response_description="Add new experiences", response_model=List)
async def create_experience(experiences: List[ExperienceModel] = Body(...)):
    experiences = jsonable_encoder(experiences)
    for experience in experiences:
        experience.city = experience.city.lower()
        experience.country = experience.country.lower()
    inserted_experiences = await db["experience"].insert_many(experiences)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=inserted_experiences.inserted_ids)