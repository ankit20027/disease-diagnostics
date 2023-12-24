from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import pickle
import requests
import json
import spacy
from nlp import NLP

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Add your React app's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.my_nlp = NLP(pd.read_csv("Training.csv"), spacy.load("en_core_web_sm"))
app.model = pickle.load(open('model.pickle', 'rb'))

def search(query: str):
    gpt_url = "https://chatgpt-42.p.rapidapi.com/gpt4"
    payload = {
        "messages": [
            {
                "role": "user",
                "content": query
            }
        ],
        "tone": "Balanced"
    }
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "b418c4f567msh3f183c8ccce40bap10fd62jsn39346ec315cc",
        "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com"
    }
    return json.loads(requests.post(gpt_url, json=payload, headers=headers).content)['result']


@app.get('/getDignostics')
def getDignostics(query: str):
    x_pred = app.my_nlp.get_encodings(query)
    if (x_pred == -1):
        return "No Dignosis"
    disease = app.model.predict([x_pred])[0]
    
    early_symptoms = search(f"Early-stage symptoms of {disease} and make your response concise")
    precautions = search(f"Precautions for {disease} and make your response concise")
    medications = search(f"Medications for {disease} and make your response concise")

    return { "Disease": disease, 
             "SearchResponse": {
                 "EarlySymptoms": early_symptoms,
                 "Precautions": precautions,
                 'Medications': medications
             } }