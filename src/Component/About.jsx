import React from "react";
import "./About.css";
import aboutImage from "../assets/about.jpg"; // Make sure to add your image in the assets folder

function AboutUs() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <h3>Who We Are – A Legacy of Trust & Excellence</h3>
          <p>
            Rudronil Financial Pvt Ltd has been a pioneer in providing financial
            solutions for over a decade. Our mission is to offer hassle-free
            financial assistance with transparency and integrity.
          </p>
          <h4 className="our_abt">Our Values:</h4>
          <ul className="list_about">
            <li>Trust – We prioritize customer satisfaction.</li>
            <li>Transparency – No hidden charges.</li>
            <li>Efficiency – Quick loan approvals and processing.</li>
          </ul>
          <div className="viewmore_serv">
          <p className="abt_viewmore">
            {" "}
            <a href="/about">View More</a>{" "}
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
