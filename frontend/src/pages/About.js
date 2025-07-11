import "./About.css";

export function About() {
    return (
        <div className="about">
            <h1>About Korah</h1>
            <p>
                This application offers a streamlined solution to analyze the sentiment of text by predicting whether it is positive or negative, providing instant and reliable feedback.
            </p>
            <ul>
                <li>
                    <strong>React Frontend</strong>: Delivers a clean and responsive interface that allows users to input text and see sentiment predictions in real-time.
                </li>
                <li>
                    <strong>FastAPI Backend</strong>: Efficiently handles text processing and inference by loading pre-trained Hugging Face Transformer models through a REST API.
                </li>
                <li>
                    <strong>Fine-tuning Support</strong>: Supports updating the model with custom datasets via a CLI script to improve prediction accuracy on domain-specific text.
                </li>
                <li>
                    <strong>Containerized Deployment</strong>: Fully Dockerized for easy local setup and reproducibility on CPU machines, with optional GPU acceleration.
                </li>
                <li>
                    <strong>Local Storage</strong>: Keeps analysis history saved securely in the browser without sending any data externally or requiring user login.
                </li>
            </ul>
            <p>
                Combining these technologies, the app ensures fast, accurate, and user-friendly sentiment analysis suitable for various text classification needs.
            </p>
        </div>
    );
}
