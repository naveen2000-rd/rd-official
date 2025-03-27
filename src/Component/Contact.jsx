import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // FontAwesome Icons
import "./Contact.css"; // Import CSS file


const ContactForm = () => {
  const position = [11.0168, 76.9558];
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    loanType: "",
    message: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const loanOptions = [
    "Personal Loan",
    "Home Loan",
    "Car Loan",
    "Business Loan",
    "Education Loan",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Full Name is required";
    if (!formData.mobile.match(/^\d{10}$/))
      errors.mobile = "Enter a valid 10-digit mobile number";
    if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    )
      errors.email = "Enter a valid email address";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.loanType) errors.loanType = "Please select a loan type";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch("https://rudronil-1.onrender.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
          alert("Form submitted successfully!");
          setFormData({
            name: "",
            mobile: "",
            email: "",
            city: "",
            loanType: "",
            message: "",
          });
          setIsChecked(false);
        } else {
          alert(result.error || "Something went wrong!");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Apply for a loan</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          {errors.city && <p className="error">{errors.city}</p>}

          <select
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Loan Type
            </option>
            {loanOptions.map((loan, index) => (
              <option key={index} value={loan}>
                {loan}
              </option>
            ))}
          </select>
          {errors.loanType && <p className="error">{errors.loanType}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>

          <button type="submit" disabled={!isChecked || loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="board">
        <h1>BOARD MEMBERS</h1>
        <div className="board-members">
          <div className="Board-1">
            <p className="b-name">Naveen Sankar</p>
            <p className="b-role">Founder & CEO</p>
          </div>
          <div className="Board-2">
            <p className="b-name">Krishnaveni Sankar</p>
            <p className="b-role">Operation's Head</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
