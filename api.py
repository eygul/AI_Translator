from transformers import pipeline
from flask import Flask, jsonify, request 
from flask_cors import CORS
import torch
import gc
app = Flask(__name__) 
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/', methods=["GET", "POST"])
def translate():
    input_json = request.get_json(force=True) 
    task = input_json["task"]
    prompt = input_json["prompt"]
    print(task)
    print(prompt)
    if prompt != "":
        pipe = pipeline(f"{task}", model="google-t5/t5-base")
        response = {'response': pipe(f"{prompt}")[0]['translation_text']}
    else:
        response = ""
    pipe = None
    gc.collect()
    torch.cuda.empty_cache()
    print(response)
    return jsonify(response)

