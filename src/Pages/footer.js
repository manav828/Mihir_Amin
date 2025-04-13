import React from "react";
import "../Styles/footer.css"; // Custom styles

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
            Empowering Career Growth Through Guidance and Support
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href="#" className="text-white">
                <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mb-4" />
        <br/>
        {/* Copyright */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2025 Mihir Amin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
