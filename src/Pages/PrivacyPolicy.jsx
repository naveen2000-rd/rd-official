import React from 'react';
import './PrivacyPolicy.css'; // Separate CSS file

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
        
      </header>

      <section className="privacy-content">
        <div className="card">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Rudronil Financial Services Private Limited</strong> ("Company", "we", "us", or "our"). 
            We are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy outlines how we collect, use, and protect your information.
          </p>
        </div>

        <div className="card">
          <h2>2. Information We Collect</h2>
          <ul>
            <li>Personal Identification Information (e.g., Name, Email, Phone, Address)</li>
            <li>Financial Information (e.g., Bank details, Loan documents)</li>
            <li>KYC Documents (e.g., PAN card, Aadhaar card, Passport)</li>
            <li>Usage Data (e.g., IP address, Browser type, Browsing behavior)</li>
          </ul>
        </div>

        <div className="card">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To assist you in availing financial products and services</li>
            <li>To verify identity and complete KYC</li>
            <li>To process applications with our banking/financial partners</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </div>

        <div className="card">
          <h2>4. Sharing of Information</h2>
          <p>
            We may share your information with trusted partners such as banks, NBFCs, service providers, 
            or government authorities when necessary. We ensure confidentiality and security in all cases.
          </p>
        </div>

        <div className="card">
          <h2>5. Data Security</h2>
          <p>
            We implement strong security measures to safeguard your personal information. 
            However, please understand that no system is completely secure.
          </p>
        </div>

        <div className="card">
          <h2>6. Your Rights</h2>
          <p>
            You may request access, correction, deletion, or restriction of your personal information by contacting us at [Insert Contact Email].
          </p>
        </div>

        <div className="card">
          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Updates will be posted on this page with a revised "Effective Date."
          </p>
        </div>

        <div className="card">
          <h2>8. Contact Us</h2>
          <p>
            For any questions or concerns regarding this Privacy Policy, please contact:
          </p>
          <p>
            <strong>Rudronil Financial Services Private Limited</strong><br />
            Email: naveen.sankar@rudronilfinserv.com<br />
            Phone: +91 89399 41406
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
