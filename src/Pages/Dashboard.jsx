import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);


  const [formData, setFormData] = useState({
    name: "",
    location: "",
    investmentAmount: "",
    monthlyReturn: "",
    weeklyReturn: "",
    investment_date: "",
    paymentMethod: "cash",
    referenceNumber: "",
    mobile_number: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchCustomers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/customers");
      const data = await res.json();
      setCustomers(data);
    } catch (err) {
      console.error("Error fetching customers:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await res.text(); // get raw text
      console.log("Raw server response:", text);

      const data = JSON.parse(text); // then parse
      console.log("Parsed JSON:", data);

      if (res.status === 400 && data.error === "Mobile number already exists") {
        alert("Mobile number already exists!");
        return;
      }

      alert("Customer added successfully!");
      setFormData({
        name: "",
        location: "",
        investmentAmount: "",
        monthlyReturn: "",
        weeklyReturn: "",
        date: "",
        paymentMethod: "cash",
        referenceNumber: "",
        mobile_number: "",
      });

      fetchCustomers();

    } catch (err) {
      console.error("Error adding customer:", err);
    }
  };

  useEffect(() => {
   

    fetchCustomers();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Customer Investment Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <section className="add-customer-section">
        <h2>Add New Customer</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.name}
            name="name"
            placeholder="Customer Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={formData.location}
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            value={formData.investmentAmount}
            name="investmentAmount"
            placeholder="Investment Amount"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            value={formData.monthlyReturn}
            name="monthlyReturn"
            placeholder="Monthly Return"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            value={formData.weeklyReturn}
            name="weeklyReturn"
            placeholder="Weekly Return"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={formData.mobile_number}
            name="mobile_number"
            placeholder="Mobile Number"
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
            required
          />
          <select name="paymentMethod" onChange={handleChange} required>
            <option value="cash">Cash</option>
            <option value="online">Online Transaction</option>
          </select>
          <input
            type="text"
            name="referenceNumber"
            placeholder="Reference Number (if online)"
            onChange={handleChange}
            value={formData.referenceNumber}
          />
          <button type="submit">Add Customer</button>
        </form>
      </section>

      <section className="customer-table-section">
  <h2>All Customers</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Location</th>
        <th>Mobile</th>
        <th>Invested</th>
        <th>Monthly Return</th>
        <th>Weekly Return</th>
        <th>Date</th>
        <th>Payment Type</th>
        <th>Reference #</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {customers.map((customer) => (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>{customer.name}</td>
          <td>{customer.location}</td>
          <td>{customer.mobile_number}</td>
          <td>₹{customer.investment_amount}</td>
          <td>₹{customer.monthly_return}</td>
          <td>₹{customer.weekly_return}</td>
          <td>{customer.date?.split("T")[0]}</td>
          <td>{customer.payment_method}</td>
          <td>{customer.reference_number}</td>
          <td>
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

    </div>
  );
}

export default Dashboard;
