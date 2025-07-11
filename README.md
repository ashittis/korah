# **Korah — Text Sentiment Prediction Engine**

Korah is a full-stack, containerized web application that performs real-time sentiment analysis on user-input text. It uses state-of-the-art Natural Language Processing (NLP) models to determine whether the input is **positive**, **negative**, or **neutral**.

The app features a **retro-themed React frontend** styled like an old-school terminal, and a **FastAPI backend** powered by **Hugging Face Transformers** for multilingual support. Docker support ensures easy deployment and reproducibility.

![Screenshot 1](https://github.com/ashittis/korah/blob/main/Screenshot%202025-07-11%20204114.png)
![Screenshot 2](https://github.com/ashittis/korah/blob/main/Screenshot%202025-07-11%20204217.png)

---

## 🔖 Table of Contents

* [✨ Features](#-features)
* [🚀 Usage](#-usage)
* [🛠️ Tech Stack](#-tech-stack)
* [📦 Installation](#-installation)
* [📄 License](#-license)
* [📬 Contact](#-contact)

---

## ✨ Features

* 🔤 **Multilingual Sentiment Analysis** using Hugging Face models.
* ⚡ **Real-time predictions** with confidence scores.
* 🧠 **Model switching** between PyTorch and TensorFlow via config flag.
* 🖥️ **Retro CRT UI** with green-on-black terminal-style design.
* 📈 **Local History Storage** (no login required).
* 🐳 **Dockerized** for consistent local setup.
* 🔁 **Planned Support** for async batching & quantization (in progress).

---

## 🚀 Usage

* Type or paste your text into the analysis box.
* Hit **“Predict”** to get a sentiment classification.
* View confidence score and results instantly.
* Access history in local storage (persists across sessions).

---

## 🛠️ Tech Stack

**Frontend**

* React (CRA)
* Custom retro styling with CSS/VT323 font
* LocalStorage for history
* Axios for API calls

**Backend**

* FastAPI (Python)
* Hugging Face Transformers (`lxyuan/distilbert-base-multilingual-cased-sentiments-student`)
* Dynamic model loader for both TensorFlow & PyTorch
* Dockerized with separate services

**DevOps & Tools**

* Docker & Docker Compose
* GitHub Actions (optional CI setup)
* Optional: Deployment to Vercel (Frontend) / Render/Fly.io (Backend)

---

## 📦 Installation (Local with Docker)

> Prerequisite: Docker & Docker Compose installed.

```bash
# Clone the repo
git clone https://github.com/your-username/korah.git
cd korah

# Build and run using Docker Compose
docker compose up --build
```

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend API: [http://localhost:8000](http://localhost:8000)

---

## 💡 Manual Setup (Optional - Without Docker)

**Backend**

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

**Frontend**

```bash
cd frontend
npm install
npm start
```

---

## 📬 Contact

Feel free to reach out for contributions, questions, or collaborations:

* 🧑‍💻 **Author**: Akash Subramanian
* 📧 **Email**: [iamakashsubramanian@gmail.com](mailto:akashsubramanian.dev@gmail.com)
* 🌐 **GitHub**: [ashittis](https://github.com/ashittis)
