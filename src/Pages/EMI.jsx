import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./EMI.css"; // Import CSS
import { Helmet } from "react-helmet-async";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(12);
  const [interestType, setInterestType] = useState("diminishing"); // Default: Diminishing

  // EMI Calculation for Flat Rate
  const calculateFlatEMI = () => {
    const totalInterest = (loanAmount * interestRate * loanTenure) / 100;
    const totalAmount = loanAmount + totalInterest;
    return {
      emi: (totalAmount / loanTenure).toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  };

  // EMI Calculation for Diminishing Rate
  const calculateDiminishingEMI = () => {
    const monthlyRate = interestRate / (12 * 100);
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
      (Math.pow(1 + monthlyRate, loanTenure) - 1);
    const totalAmount = emi * loanTenure;
    const totalInterest = totalAmount - loanAmount;
    return {
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  };

  // Choose EMI Calculation Method
  const { emi, totalInterest, totalAmount } =
    interestType === "flat" ? calculateFlatEMI() : calculateDiminishingEMI();

  // Pie Chart Data
  const pieData = [
    { name: "Principal", value: parseFloat(loanAmount) },
    { name: "Interest", value: parseFloat(totalInterest) },
  ];

  // Chart Colors
  const COLORS = ["#128BA5", "#FFBB28"];

  return (
    <>
      <Helmet>
        <title>
          EMI Calculator | Flat & Diminishing Interest | Rudronil Financial
        </title>
        <meta
          name="description"
          content="Calculate your loan EMI using our flat and diminishing interest EMI calculator. Get accurate results for better financial planning."
        />
      </Helmet>
      <div className="emi-wrapper">
        {/* Left Side - Input Fields */}
        <div className="emi-calculator">
          <h2>EMI Calculator</h2>

          <div className="input-group">
            <label>Loan Amount (₹):</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Interest Rate (% per annum):</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Loan Tenure (Months):</label>
            <input
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
            />
          </div>

          <div className="result">
            <h3>Monthly EMI: ₹{emi}</h3>
            <p>Total Interest: ₹{totalInterest}</p>
            <p>Total Amount Payable: ₹{totalAmount}</p>
          </div>
        </div>

        {/* Right Side - Pie Chart */}
        <div className="emi-chart">
          <h2>EMI Breakdown</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default EMICalculator;
