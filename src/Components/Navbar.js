import { Link } from "react-router-dom";
import "../Styles/Navbar.css"; 

function Navbar() {
    return (
        <nav className="navbarr">
            <div className="navbar-container">
                <span className="navbar-logo">MA</span>
                <div className="navbar-links">
                    <Link to="/">About</Link>
                    <Link to="/journey">Journey</Link>
                    <Link to="/testimonials">Testimonials</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
