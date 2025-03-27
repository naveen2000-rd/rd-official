import React from "react";
import "./abt.css"; // Import the updated CSS file
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us | Trusted Financial Services | Rudronil Financial Pvt Ltd
        </title>
        <meta
          name="description"
          content="Learn more about Rudronil Financial Pvt Ltd, a trusted provider of loans and investment solutions, helping thousands achieve financial security."
        />
      </Helmet>
      {/* Header Section */}
      <div className="header-section">
        <h1>About Us – Rudronil Financial Pvt Ltd</h1>
        <h3>Your Trusted Partner in Financial Growth</h3>
      </div>
      <div className="about-container">
        {/* Sections */}
        <div className="about-sections">
          {/* Who We Are */}
          <div className="section">
            <h2>Who We Are</h2>
            <p>
              At <strong>Rudronil Financial Pvt Ltd</strong>, we are committed
              to helping individuals and businesses achieve financial success.
              With years of experience in the financial sector, we provide
              tailored loan solutions, investment strategies, and banking
              services.
            </p>
            <p>
              Our mission is to bridge the gap between financial aspirations and
              reality by offering easy access to funding, investment advice, and
              long-term wealth management solutions. We strive to create an
              ecosystem of financial well-being, where individuals and
              businesses can thrive without financial stress.
            </p>
            {/* <p>
              We take pride in our customer-first approach, ensuring that each
              client receives dedicated support and the best possible financial
              solutions to meet their unique needs.
            </p> */}
          </div>

          {/* Why Choose Us */}
          <div className="section">
            <h2>Why Choose Rudronil Financial Pvt Ltd?</h2>
            <p>We stand out from the competition by offering:</p>
            <ul>
              <li>Quick Loan Approvals – Get loan approvals within 24 hours</li>
              <li>
                Lowest Interest Rates – Competitive rates for affordability
              </li>
              <li>
                Trusted by 10,000+ Customers – Strong financial excellence
              </li>
              <li>Minimal Documentation – Simple, hassle-free application</li>
              <li>Flexible EMI Options – Customize your loan repayment</li>
              <li>
                100% Transparency – No hidden charges, only honest banking
              </li>
            </ul>
          </div>

          {/* Meet Our Team */}
          <div className="section">
            <h2>Meet Our Team</h2>
            <p>
              Our team of financial experts, loan specialists, and investment
              advisors are dedicated to helping you make informed financial
              decisions.
            </p>
            <ul className="meet-our-team">
              <li>
                Our loan specialists help customers secure the best financing
                solutions, ensuring quick approvals and minimal paperwork.
              </li>
              <li>
                Our investment advisors guide individuals and businesses on
                wealth-building strategies, ensuring maximum returns with
                minimal risk.
              </li>
              <li>
                Our customer support professionals ensure that every client
                receives prompt assistance and has a smooth experience
                throughout their financial journey.
              </li>
            </ul>
          </div>

          {/* Vision & Mission */}
          <div className="section">
            <h2>Our Vision & Mission</h2>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and customer-focused financial service
              provider, offering tailor-made financial solutions that empower
              individuals and businesses.
            </p>
            <h3>Our Mission</h3>
            <ul>
              <li>Simplify financial solutions for everyone</li>
              <li>
                Provide quick, transparent, and affordable financial services
              </li>
              <li>
                Leverage technology & innovation to enhance customer experience
              </li>
              <li>
                Foster long-term relationships built on trust & reliability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
