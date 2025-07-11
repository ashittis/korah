import axios from "axios";
import { useState } from "react";
import "./Analysis.css";
import { formatScore, capitalizeFirstLetter } from "../App";

export function Analysis() {
    const [inputText, setInputText] = useState("");
    const [analysisResult, setAnalysisResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = function (e) {
        setInputText(capitalizeFirstLetterOfSentences(e.target.value));
    };

    const handlePredict = async function () {
        if (!inputText) return;

        setLoading(true);
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/analyze", // 🔁 Do NOT change this unless backend changes
                { text: inputText }
            );
            setAnalysisResult(response.data);
            storeHistory(
                inputText,
                response.data.sentiment,
                response.data.score
            );
        } catch (error) {
            console.error("Error during prediction:", error);
        } finally {
            setLoading(false);
        }
    };

    const storeHistory = (text, sentiment, score) => {
        let history = JSON.parse(localStorage.getItem("analysisHistory")) || [];
        const newEntry = { text, sentiment, score };
        history.push(newEntry);
        localStorage.setItem("analysisHistory", JSON.stringify(history));
    };

    function capitalizeFirstLetterOfSentences(inputText) {
        if (!inputText) return "";
        const sentences = inputText.match(/[^.!?]+[.!?]*\s*/g) || [];
        const capitalized = sentences.map(
            (sentence) =>
                sentence.charAt(0).toUpperCase() + sentence.slice(1)
        );
        return capitalized.join("");
    }

    return (
        <div className="analysis">
            <h1>Predict Emotion of Your Text</h1>
            <div className="sentiment">
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Enter text to predict sentiment!"
                />
                <button onClick={handlePredict} disabled={loading}>
                    {loading ? "Predicting..." : "Predict"}
                </button>
            </div>

            {analysisResult && (
                <div className="result">
                    <h2>Prediction Results</h2>
                    <p>
                        <strong>Sentiment:</strong>{" "}
                        {capitalizeFirstLetter(analysisResult.sentiment)}
                    </p>
                    <p>
                        <strong>Confidence:</strong>{" "}
                        {formatScore(analysisResult.score)} (
                        {analysisResult.score.toFixed(3)})
                    </p>
                </div>
            )}
        </div>
    );
}
