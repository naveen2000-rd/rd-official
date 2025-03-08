import { useState } from "react";
import "./Footer.css";
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

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📞 +91 89399 41406</p>
          <p>📧 naveen.sankar@rudronilfinserv.com</p>
          <p>📍 MJT Building, First Floor 9-A, </p>
          <p>Bharathiyar Road, P.N. Palayam,</p>
          <p>Coimbatore-641 037</p>
          
          <div className="social-footer">
            
            <p className="foot-path">
              <FontAwesomeIcon icon={faFacebook} /> 
            </p>
            <p className="foot-path">
              <FontAwesomeIcon icon={faInstagram} /> 
            </p>
            <p className="foot-path">
              <FontAwesomeIcon icon={faLinkedin} /> 
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
