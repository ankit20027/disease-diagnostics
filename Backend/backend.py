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
        "X-RapidAPI-Key": "ec97e6748fmshda0e846df924e25p17d0dejsn558491f16c2f",
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
    # early_symptoms = "Malaria is a mosquito-borne parasitic disease that can cause high fever, severe chills and sweating. Common symptoms include: high fever, shaking chills, profuse sweating, headache, abdominal pain, muscle pain, nausea, vomiting, diarrhea, anemia, deep breathing and respiratory distress, clinical jaundice and evidence of vital organ dysfunction, impaired consciousness, bloody stools, convulsions, and coma. If you or someone you know is exhibiting symptoms of Malaria, seek medical attention immediately."
    # precautions = "Malaria is a serious and sometimes fatal disease caused by a parasite that commonly infects a certain type of mosquito which feeds on humans. Travelers should take precaution when traveling to areas where malaria transmission occurs. For information for travelers who reside in the United States, please visit ."
    # medications = "Malaria is treated with a combination of antimalarial medications that includes artemisinin. The second medication may be either mefloquine, lumefantrine, or sulfadoxine/pyrimethamine ."

    return { "Disease": disease, 
             "SearchResponse": {
                 "EarlySymptoms": early_symptoms,
                 "Precautions": precautions,
                 'Medications': medications
             } }