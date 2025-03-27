import React, { useState } from "react";
import servicesdata from "../Component/Servicedata"; // Ensure this is correctly imported
import "./ServicesList.css"; // Ensure this file exists
import { Helmet } from "react-helmet-async";

const ServicesList = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleDetails = (categoryIndex, serviceIndex) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [categoryIndex]:
        prev[categoryIndex] === serviceIndex ? null : serviceIndex,
    }));
  };

  return (
    <>
      <Helmet>
        <title>
          Our Services | Loans & Investment Solutions | Rudronil Financial
        </title>
        <meta
          name="description"
          content="Explore our financial services including personal loans, home loans, business loans, savings accounts, mutual funds, and more."
        />
      </Helmet>
      <div className="container">
        <h2 className="heading">Our Services</h2>

        {Array.isArray(servicesdata) && servicesdata.length > 0 ? (
          servicesdata.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category">
              <h3 className="category-title">{category.category}</h3>

              {Array.isArray(category.services) &&
              category.services.length > 0 ? (
                category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="service-card">
                    <div
                      className="service-header"
                      onClick={() => toggleDetails(categoryIndex, serviceIndex)}
                    >
                      <h4 className="service-title">{service.name}</h4>
                      <span className="toggle-icon">
                        {openIndexes[categoryIndex] === serviceIndex
                          ? "▲"
                          : "▼"}
                      </span>
                    </div>

                    {openIndexes[categoryIndex] === serviceIndex && (
                      <div className="service-details">
                        <div>
                          <p>
                            {service.description || "No description available"}
                          </p>
                          {service.loanAmount && (
                            <p>
                              <strong>Loan Amount:</strong> {service.loanAmount}
                            </p>
                          )}
                          {service.interestRate && (
                            <p>
                              <strong>Interest Rate:</strong>{" "}
                              {service.interestRate}
                            </p>
                          )}
                          {service.tenure && (
                            <p>
                              <strong>Tenure:</strong> {service.tenure}
                            </p>
                          )}
                        </div>
                        <div className="er-docs">
                          <div>
                            <h5>Eligibility:</h5>
                            <ul>
                              {Array.isArray(service.eligibility) ? (
                                service.eligibility.map((item, idx) => (
                                  <li key={idx}>✔ {item}</li>
                                ))
                              ) : (
                                <li>No eligibility criteria provided</li>
                              )}
                            </ul>
                          </div>

                          <div>
                            <h5>Required Documents:</h5>
                            <ul>
                              {Array.isArray(service.requiredDocuments) ? (
                                service.requiredDocuments.map((doc, idx) => (
                                  <li key={idx}>📄 {doc}</li>
                                ))
                              ) : (
                                <li>No documents required</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No services available under this category.</p>
              )}
            </div>
          ))
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    </>
  );
};

export default ServicesList;
