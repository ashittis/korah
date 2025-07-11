from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel, constr
from config import MODEL_FRAMEWORK

# FastAPI app init
app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Input schema
class TextInput(BaseModel):
    text: constr(min_length=1)


# Load model dynamically
if MODEL_FRAMEWORK == "pytorch":
    from transformers import pipeline

    sentiment_pipeline = pipeline(
        "sentiment-analysis",
        model="lxyuan/distilbert-base-multilingual-cased-sentiments-student",
    )

elif MODEL_FRAMEWORK == "tensorflow":
    import tensorflow as tf
    import numpy as np
    from tensorflow.keras.models import load_model
    from tensorflow.keras.preprocessing.sequence import pad_sequences
    from tensorflow.keras.preprocessing.text import Tokenizer

    # Example tokenizer setup (you should adapt this to your TF model)
    tokenizer = Tokenizer(num_words=5000)
    model = load_model("model")  # directory or .h5

    def tf_predict(text: str):
        sequences = tokenizer.texts_to_sequences([text])
        padded = pad_sequences(sequences, maxlen=100)
        preds = model.predict(padded)
        label = "POSITIVE" if preds[0] > 0.5 else "NEGATIVE"
        return {"label": label, "score": float(preds[0])}

else:
    raise ValueError("Unsupported MODEL_FRAMEWORK value. Use 'pytorch' or 'tensorflow'")


@app.post("/api/analyze")
async def analyze(text_input: TextInput):
    text = text_input.text

    if MODEL_FRAMEWORK == "pytorch":
        result = sentiment_pipeline(text)[0]
        return {
            "sentiment": result["label"],
            "score": result["score"],
            "feedback": "PyTorch model used.",
        }

    elif MODEL_FRAMEWORK == "tensorflow":
        result = tf_predict(text)
        return {
            "sentiment": result["label"],
            "score": result["score"],
            "feedback": "TensorFlow model used.",
        }


@app.get("/")
async def root():
    return {"message": "Welcome to the Sentiment Analysis API"}
