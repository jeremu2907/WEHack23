#!/bin/bash

export MONGODB_URL="mongodb://rootuser:rootpass@45.79.14.63:27017/?directConnection=true&appName=paddle"
uvicorn main:app --host 0.0.0.0
