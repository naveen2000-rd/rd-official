import React from "react";
import "./Testi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Testimonial = [
  {
    icon: faUser,
    type: "Home Loan",
    text: "Rudronil Financial made my dream of owning a home a reality! The process was smooth, and I got the best interest rates. Highly recommended!",
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5, // ⭐⭐⭐⭐⭐,
  },
  {
    icon: faUser,
    type: "Business Loan",
    text: "Expanding my business was never this easy! The loan approval was quick, and the flexible EMI options made repayment stress-free.",
    name: "Sneha Sharma",
    location: "Delhi",
    rating: 5, //⭐⭐⭐⭐⭐,
  },
  {
    icon: faUser,
    type: "Personal Loan",
    text: "I needed urgent funds, and Rudronil Financial delivered within 24 hours! No hidden fees, no hassle—just fast service.",
    name: "Vikram Singh",
    location: "Bangalore",
    rating: 5, // ⭐⭐⭐⭐⭐,
  },
];

function Testi() {
  return (
    <div className="Testi">
      <h1>Testimonials</h1>
      <div className="Testi_sec">
        <h3 className="head_type">
        What Our Clients Say
        </h3>
        <div className="Testi-grid">
          {Testimonial.map((Testimonial, index) => (
            <div key={index} className="Testi-card">
              <FontAwesomeIcon
                icon={Testimonial.icon}
                style={{
                  color: "hsl(190.61deg 80.33% 35.88%)",
                  fontSize: "40px",
                  marginBottom: "10px",
                }}
              />
              <p>{Testimonial.name}, {Testimonial.location}.</p>
              <p>⭐⭐⭐⭐⭐</p>
              <h3>{Testimonial.type}</h3>
              <p>{Testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testi;
