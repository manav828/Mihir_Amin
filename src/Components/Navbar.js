// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
  <div className="navbar-container">
    <Link to="/" className="navbar-logo">MA</Link>

    <button className="navbar-toggle" onClick={toggleMenu}>
      <span className="navbar-toggle-icon"></span>
    </button>

    <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
      <Link to="/" onClick={() => setIsMenuOpen(false)}>About</Link>
      <Link to="/journey" onClick={() => setIsMenuOpen(false)}>Journey</Link>
      <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
      <Link to="/bookingdemo" onClick={() => setIsMenuOpen(false)} className="cta-button">
        Book Meeting
      </Link>
    </div>
  </div>
</nav>

  );
}

export default Navbar;