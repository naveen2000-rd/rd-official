import React, { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import "./NiftySection.css"; // Importing the CSS file

const NiftySection = () => {
  const [niftyData, setNiftyData] = useState([
    { name: "NIFTY 50", value: 0, change: 0 },
    { name: "NIFTY Bank", value: 0, change: 0 },
  ]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/nifty-data");
      const data = await response.json();
      setNiftyData([
        { name: "NIFTY 50", value: data.nifty50, change: data.nifty50Change },
        { name: "NIFTY Bank", value: data.niftyBank, change: data.niftyBankChange },
      ]);
    } catch (error) {
      console.error("Error fetching NIFTY data:", error);
    }
  };

  fetchData();
}, []);


  return (
    <div className="nifty-container">
      {niftyData.map((index) => (
        <div key={index.name} className="nifty-card">
          <h2 className="nifty-title">{index.name}</h2>
          <div className="nifty-content">
            <span className="nifty-value">{index.value.toFixed(2)}</span>
            <span
              className={`nifty-change ${index.change >= 0 ? "positive" : "negative"}`}
            >
              {index.change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              {index.change.toFixed(2)}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NiftySection;
