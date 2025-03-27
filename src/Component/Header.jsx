import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logoimage from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scrolling function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className="main_header">
      {/* Top Header */}
      <header className="header">
        <div className="header_one">
          <p>
            <FontAwesomeIcon icon={faMobileAlt} /> <a href="tel:+918939941406">+91 89399 41406</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faMobileAlt} /> <a href="tel:04224541450">0422 4541450</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:naveen.sankar@rudronilfinserv.com">naveen.sankar@rudronilfinserv.com</a>
          </p>
        </div>
        <div className="header_two">
          <p>Follow us :</p>
          <p>
            <FontAwesomeIcon icon={faFacebook} /> <a href="https://www.facebook.com/share/12KMsgsHPqQ/" target="_blank">Facebook</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faInstagram} /> <a href="https://www.instagram.com/rudronil_finserv?igsh=MXg2YTN0MnU5dmp4cw==" target="_blank">Instagram</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} /> <a href="#">LinkedIn</a>
          </p>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="nav_menu">
        <div className="logo">
          <a href="/" onClick={() => scrollToSection("banner")}>
            <img src={logoimage} alt="Best personal loans with low interest rates" className="logo_style" />
          </a>
        </div>

        {/* Burger Icon for Mobile */}
        <button
          className="burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Menu */}
        <div className={`menu_list ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Our Services</Link>
          <Link to="/emi-calculator" onClick={() => setMenuOpen(false)}>EMI Calculator</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
         
         
         
         
         

          {/* Get Quote button inside menu for mobile */}
          <div className="btn_quote_mobile">
            <a href="/contact" onClick={() => scrollToSection("contact")}>
              Get Quote
            </a>
          </div>
        </div>

        {/* Get Quote button stays visible on desktop */}
        <div className="btn_quote">
          <a href="/contact" onClick={() => scrollToSection("contact")}>
            Apply for a loan
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
