import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="header-left">
        <div className="header-title">Korah</div>
      </div>

      {/* Center: Navigation */}
      <nav className={`nav-center ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/analysis" onClick={() => setMenuOpen(false)}>Predict</Link></li>
          <li><Link to="/history" onClick={() => setMenuOpen(false)}>History</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      {/* Right: Toggle Switch */}
      <div className="header-right">
        <div className="theme-switch-wrapper">
          <input
            type="checkbox"
            id="theme-switch"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="theme-switch-checkbox"
          />
          <label htmlFor="theme-switch" className="theme-switch-label">
            <span className="theme-switch-button" />
          </label>
        </div>
      </div>

      {/* Hamburger - outside to avoid shifting layout */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}
