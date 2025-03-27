const servicesdata = [
    {
      category: "Loans & Accounts Services",
      services: [
        {
          name: "Personal Loan",
          description: "Get instant personal loans with low interest rates.",
          loanAmount: "₹50,000 – ₹25 Lakhs",
          interestRate: "Starting from 10.5% p.a.",
          tenure: "Up to 5 years",
          eligibility: [
            "Age: 21 – 60 years",
            "Salaried or Self-employed with minimum monthly income of ₹15,000",
            "CIBIL Score 700+"
          ],
          requiredDocuments: [
            "Aadhaar Card / PAN Card",
            "Utility Bill / Rent Agreement",
            "Salary Slips / IT Returns / Bank Statement (last 6 months)"
          ]
        },
        {
          name: "Mortgage Loan (LAP)",
          description: "Secure a mortgage loan against your property for larger financial requirements.",
          loanAmount: "₹5 Lakhs – ₹5 Crores",
          interestRate: "Starting from 8.5% p.a.",
          tenure: "Up to 15 years",
          eligibility: [
            "Age: 25 – 65 years",
            "Salaried / Self-employed with stable income",
            "Owned residential/commercial property as collateral"
          ],
          requiredDocuments: [
            "Title Deed, Ownership Documents",
            "Aadhaar, PAN, Utility Bills",
            "Bank Statement, ITR, Business Proof (if self-employed)"
          ]
        },
        {
          name: "Business Loan",
          description: "Expand your business with flexible business loans tailored for your growth.",
          loanAmount: "₹1 Lakh – ₹50 Lakhs",
          interestRate: "Starting from 12% p.a.",
          tenure: "Up to 5 years",
          eligibility: [
            "Minimum 2 years in business",
            "Annual turnover of at least ₹10 Lakhs",
            "Good credit history"
          ],
          requiredDocuments: [
            "GST Certificate, Business Registration",
            "Bank Statement (last 6 months), ITRs",
            "Identity & Address Proof"
          ]
        },
        {
          name: "Education Loan",
          description: "Fund your higher education with easy repayment options and low interest rates.",
          loanAmount: "₹1 Lakh – ₹50 Lakhs",
          interestRate: "Starting from 9% p.a.",
          tenure: "Up to 15 years",
          eligibility: [
            "Student must have secured admission in a recognized institution",
            "Co-applicant (parent/guardian) with a stable income"
          ],
          requiredDocuments: [
            "Admission Letter from the institution",
            "Identity & Address Proof",
            "Income Proof of co-applicant"
          ]
        },
        {
          name: "Car Loan",
          description: "Drive your dream car home with our quick and easy car loan approvals.",
          loanAmount: "₹1 Lakh – ₹50 Lakhs",
          interestRate: "Starting from 8.5% p.a.",
          tenure: "Up to 7 years",
          eligibility: [
            "Age: 21 – 65 years",
            "Minimum monthly income: ₹15,000"
          ],
          requiredDocuments: [
            "Identity & Address Proof",
            "Salary Slips / ITRs",
            "Vehicle Quotation/Invoice"
          ]
        },
        {
          name: "Home Loan",
          description: "Buy your dream home with our low-interest and long-term home loan options.",
          loanAmount: "₹5 Lakhs – ₹10 Crores",
          interestRate: "Starting from 7.5% p.a.",
          tenure: "Up to 30 years",
          eligibility: [
            "Salaried or self-employed with stable income",
            "Minimum CIBIL Score of 750+"
          ],
          requiredDocuments: [
            "Identity & Address Proof",
            "Income Proof (Salary Slips, ITRs, Bank Statements)",
            "Property Papers"
          ]
        },
        {
            name: "Savings & Current Account",
            description:
              "Open a savings or current account with high interest rates and benefits.",
            benefits: [
              "Earn interest up to 6.5% p.a.",
              "Free internet banking & mobile banking",
              "No minimum balance requirement for savings accounts",
            ],
            eligibility: [
              "Indian citizens above 18 years of age",
              "Valid ID proof and address proof",
              "Minimum opening deposit as per bank policy",
            ],
            requiredDocuments: [
              "Aadhaar Card",
              "PAN Card",
              "Address Proof (Electricity Bill, Passport, etc.)",
              "Passport-sized Photographs",
            ],
          },
          {
            name: "Demat Account Opening",
            description: "Start investing in the stock market with a seamless Demat account opening.",
            benefits: [
              "Zero account opening charges",
              "No annual maintenance fee for the first year",
              "Trade in stocks, mutual funds, and bonds",
            ],
            eligibility: [
              "Individuals above 18 years of age",
              "Valid PAN and Aadhaar linkage",
            ],
            requiredDocuments: [
              "Aadhaar Card",
              "PAN Card",
              "Cancelled Cheque",
              "Income Proof (For derivatives trading)",
            ],
          },
      ]
    },
    {
      category: "Investment Solutions",
      services: [
        {
          name: "Mutual Funds & SIPs",
          description: "Secure your future with the best investment plans.",
          eligibility: [
            "Minimum age: 18 years",
            "PAN Card mandatory"
          ],
          requiredDocuments: [
            "PAN Card & Aadhaar Card",
            "Bank Details for auto-debit"
          ]
        },
        {
          name: "Stock Market Advisory",
          description: "Expert insights for high returns.",
          eligibility: [
            "Demat Account required"
          ],
          requiredDocuments: [
            "PAN Card, Aadhaar, and Bank Proof"
          ]
        },
        {
          name: "Tax-Saving Investments",
          description: "Reduce tax liability while growing wealth.",
          taxSavingOptions: [
            "ELSS Mutual Funds – Save up to ₹1.5 Lakhs under 80C",
            "PPF (Public Provident Fund) – Guaranteed returns",
            "Tax-Free Bonds"
          ],
          requiredDocuments: [
            "PAN & Aadhaar Card",
            "Investment Proof (for tax benefits)"
          ]
        }
      ]
    }
  ];
  
  export default servicesdata;
  