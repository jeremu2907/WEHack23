#!/bin/bash

export MONGODB_URL="mongodb://rootuser:rootpass@45.79.14.63:27017/paddle?retryWrites=true&w=majority"
uvicorn app:app --reload