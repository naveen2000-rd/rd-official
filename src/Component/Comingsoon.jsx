import React from "react";
import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Coming Soon</h1>
        <p>We're working hard to bring something amazing. Stay tuned!</p>
        <div className="subscription">
          <input type="email" placeholder="Enter your email" />
          <button>Notify Me</button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
