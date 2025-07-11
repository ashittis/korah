import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Analysis } from "./pages/Analysis";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { History } from "./pages/History";
import { NoiseBackground } from "./components/NoiseBackground"; // ✅ CRT-style background

import "./App.css";

// ✅ Utility functions
export function formatScore(score) {
    if (score >= 0.9) return "Highly Certain";
    if (score >= 0.7) return "Fairly Certain";
    if (score >= 0.5) return "Somewhat Certain";
    return "Uncertain";
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function App() {
    // ✅ Read dark mode from localStorage on first render
    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        // ✅ Apply data-theme to <html>, not <body>
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <Router>
            <NoiseBackground /> {/* ✅ Fullscreen CRT-style animated noise */}

            <div className="App">
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
