# Korah — Text Sentiment Prediction Engine

Korah is a full-stack, containerized web application that performs real-time sentiment analysis on multilingual user-input text. It uses state-of-the-art Natural Language Processing (NLP) models to determine whether the input is positive, negative, or neutral.

The app features a retro-themed React frontend styled like an old-school terminal, and a FastAPI backend powered by Hugging Face Transformers. Docker ensures easy deployment and reproducibility.

![Screenshot 1](https://github.com/ashittis/korah/blob/main/Screenshot%202025-07-12%20141451.png)  
![Screenshot 2](https://github.com/ashittis/korah/blob/main/Screenshot%202025-07-11%20204217.png)

---

## Table of Contents

- Features
- Usage
- Tech Stack
- Installation
- Live Deployment
- License
- Contact

---

## Features

- Multilingual sentiment analysis using Hugging Face models
- Real-time predictions with confidence scores
- Toggle between PyTorch and TensorFlow via config flag
- Retro CRT-style UI (green-on-black terminal)
- Local storage for sentiment history
- Dockerized frontend and backend
- Future support for batching and model quantization

---

## Usage

- Enter or paste text in the analysis box
- Click "Predict" to classify sentiment
- See results and confidence score instantly
- History is stored locally (no login required)

---

## Tech Stack

### Frontend

- React (CRA)
- Custom CSS with VT323 terminal font
- Axios for API calls
- LocalStorage for history

### Backend

- FastAPI (Python)
- Hugging Face Transformers
- Dynamic backend switch (PyTorch or TensorFlow)
- Docker-based API

### DevOps

- Docker & Docker Compose
- Optional CI with GitHub Actions
- Optional deploy to Vercel/Render

---

## Installation (with Docker)

Make sure Docker and Docker Compose are installed.

```bash
git clone https://github.com/your-username/korah.git
cd korah
docker compose up --build
````

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:8000](http://localhost:8000)

---

## Manual Setup 

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## Live Deployment

### Frontend

* Hosted on Vercel
* URL: [https://korah.vercel.app](https://korah.vercel.app)
* Environment variable:  `VITE_API_URL=https://korah.onrender.com`

### Backend

* Hosted on Render
* URL: [https://korah.onrender.com](https://korah.onrender.com)
* Docker-based FastAPI deployment
* CORS enabled for frontend API calls

Demo Video
Watch the walkthrough on YouTube: [Click Here](https://youtu.be/frahvWLxH-U)

---

## Contact
Email: [iamakashsubramanian@gmail.com](mailto:iamakashsubramanian@gmail.com)
```

