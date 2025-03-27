import React from "react";
import "./Banner.css";
import myVideo from "../assets/bannervideo.mp4";

function Banner() {
  return (
    <div className="banner">
      <video autoPlay loop muted className="banner-video">
        <source src={myVideo} type="video/mp4" />
      </video>

      <div className="overlay">
        <h2>
          Welcome to Rudronil Financial Pvt Ltd – Your Trusted Financial Partner
        </h2>
        <p>
          We provide expert financial solutions to help you achieve your dreams.
          Whether you need a loan, investment advice, or financial planning, we
          are here to assist you.
        </p>
        <div className="banner_cta">
          <p className="overlay_contact">
            <a href="/contact">Apply for a Loan</a>
          </p>
          <p className="overlay_contact">
            <a href="tel:+918939941406">Get a Free Consultation</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
