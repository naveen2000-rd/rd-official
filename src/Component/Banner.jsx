import React from "react";
import "./Banner.css";



function Banner() {
  return (
    <div className="banner">
      <video autoPlay loop muted className="banner-video">
        <source src="https://drive.google.com/file/d/1ts757YG05gTbUeA6Y89Y6ot5o4iemP3-/view?usp=drive_link" type="video/mp4" />
      </video>

      <div className="overlay">
        <h2>Welcome to Rudronil Finserv!!</h2>
        <p className="overlay_contact">
          <a href="#contact">Contact Us</a>
        </p>
      </div>
    </div>
  );
}

export default Banner;
