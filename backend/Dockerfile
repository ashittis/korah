# Use slim Python base image
FROM python:3.10-slim

# Set work directory
WORKDIR /app

# Install system-level dependencies (for numpy, etc.)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Copy requirement file and install Python packages
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all project files
COPY . .

# Optional: Set default env (can override in docker-compose or CLI)
ENV MODEL_FRAMEWORK=pytorch

# Run FastAPI app
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
