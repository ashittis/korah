import { Link } from "react-router-dom";
import "./Home.css";

export function Home() {
    return (
        <div className="home-container fade-in">
            <h1>Predict and Analyze Text Effortlessly</h1>
            <p>
                Uncover the meaning behind your text using advanced AI predictions.<br />
                Get instant, reliable predictions wrapped in a sleek retro interface.
            </p>
            <Link to="/analysis" className="button">
                Get Started
            </Link>
        </div>
    );
}
