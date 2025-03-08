import React, { useRef, useState } from "react";
import "./BlogSection.css"; // Import CSS for styling

// Import local images
import blog1 from "../assets/personal.jpg";
import blog2 from "../assets/mortage.jpg";
import blog3 from "../assets/business.jpg";
import blog4 from "../assets/education.jpg";
import blog5 from "../assets/car.jpg";

const blogs = [
  {
    id: 1,
    title: "Understanding Personal Loans",
    description:
      "Learn how personal loans work and how to get the best interest rates.",
    image: blog1,
    content:
      "Personal loans are a flexible financial tool that can help individuals cover...",
    Description:
      `Personal loans are a flexible financial tool that can help individuals cover unexpected expenses, consolidate debt, or finance major life events. Unlike secured loans, personal loans do not require collateral, making them accessible to a broader range of borrowers. They are typically repaid in fixed monthly installments with varying interest rates depending on the borrower's creditworthiness and lender policies.

The application process involves submitting personal and financial details to banks, credit unions, or online lenders. Once approved, borrowers receive a lump sum and repay it over a set period. Interest rates can be fixed or variable, and repayment terms range from a few months to several years.

Personal loans offer multiple advantages, such as flexibility in usage, predictable repayment schedules, and the ability to consolidate high-interest debts. Additionally, they can improve credit scores when managed responsibly. However, they may also come with drawbacks like higher interest rates for those with lower credit scores, origination fees, and penalties for early repayment.

Before applying for a personal loan, borrowers should compare lenders, assess their credit scores, and read the fine print to avoid hidden fees. It's essential to ensure the loan aligns with their financial situation and repayment ability to prevent unnecessary financial strain.

Ultimately, personal loans can be a valuable financial resource when used wisely. Proper planning and understanding of loan terms can help borrowers make informed decisions that support their financial goals.`,
  },
  {
    id: 2,
    title: "Mortgage Loans Explained",
    description: "Everything you need to know about securing a mortgage loan.",
    image: blog2,
    content:
      "Mortgage loans are a type of secured loan that helps individuals purchase...",
    Description:
      `Mortgage loans are a type of secured loan that helps individuals purchase real estate by borrowing money against the property itself. These loans are repaid over an extended period through fixed or variable monthly installments. The property serves as collateral, meaning the lender can seize it if the borrower fails to meet repayment obligations.

The mortgage loan process begins with an application to a bank, credit union, or mortgage lender, where creditworthiness, income, and debt-to-income ratio are assessed. Once approved, borrowers receive funds to purchase a home and agree to repay the loan with interest over a set term, typically 15 to 30 years.

There are several types of mortgage loans, including fixed-rate mortgages, where interest remains constant throughout the loan term, and adjustable-rate mortgages (ARMs), where interest rates fluctuate based on market conditions. Other options include government-backed loans like FHA, VA, and USDA loans, designed to assist specific borrower groups.

Mortgage loans offer benefits such as homeownership opportunities, potential tax advantages, and long repayment terms. However, they also come with risks, including foreclosure if payments are not maintained and possible fluctuations in interest rates for ARMs. Additionally, borrowers must consider costs such as down payments, closing fees, and property taxes.

Before obtaining a mortgage loan, individuals should assess their financial situation, compare lenders, and understand all loan terms. A well-planned mortgage can be a valuable investment in long-term financial stability. Proper research and budgeting ensure that borrowers select a loan that aligns with their income and future financial goals.`,
  },
  {
    id: 3,
    title: "Business Loan Benefits",
    description: "How business loans help entrepreneurs grow their companies.",
    image: blog3,
    content:
      "Business loans are a crucial financial tool for entrepreneurs and companies...",
    Description:
      `Business loans are a crucial financial tool for entrepreneurs and companies seeking to expand operations, manage cash flow, or invest in new opportunities. These loans provide businesses with the necessary capital to fund various needs while maintaining ownership and control.

One of the primary benefits of business loans is access to substantial funding without relinquishing equity. Unlike investors who require a share in the business, lenders only expect repayment with interest. This allows business owners to retain full decision-making authority.

Another advantage is the flexibility of loan usage. Businesses can use the funds for multiple purposes, such as purchasing equipment, hiring staff, expanding facilities, or boosting inventory. Additionally, business loans often come with structured repayment plans, enabling borrowers to manage finances efficiently.

Business loans can also help build creditworthiness. Timely repayments contribute to a strong credit history, improving future borrowing potential and securing better loan terms. Furthermore, certain business loans offer tax benefits, as interest payments may be deductible.

Despite these benefits, business loans come with potential risks, such as interest costs and the possibility of financial strain if revenue does not meet expectations. It's essential for businesses to assess their financial health, compare loan options, and choose terms that align with their growth strategy.

By carefully selecting the right loan and managing finances effectively, businesses can leverage funding to drive success and long-term stability.`,
  },
  {
    id: 4,
    title: "Education Loans: What to Know",
    description: "Find out the best options for funding your higher education.",
    image: blog4,
    content:
      "Education loans are a vital financial resource for students seeking to...",
    Description:
      `Education loans are a vital financial resource for students seeking to fund their higher education. These loans help cover tuition fees, accommodation, books, and other educational expenses, making quality education more accessible.

One of the key benefits of education loans is that they allow students to focus on their studies without the immediate financial burden. Many education loans come with flexible repayment options, including grace periods that enable students to start repaying after completing their education.

Education loans typically offer lower interest rates compared to other loan types, and some government-backed loans provide subsidized interest rates to eligible students. Additionally, repayment terms are often extended, making monthly installments more manageable.

A significant advantage of education loans is the opportunity to build a positive credit history. Responsible repayment can improve a borrower's credit score, making it easier to access future financial products like car or home loans.

However, students should be aware of potential challenges, such as accumulating debt and interest over time. It is essential to borrow only what is necessary and explore options like scholarships and grants to minimize loan amounts. Understanding loan terms, interest rates, and repayment obligations is crucial before applying.

By choosing the right education loan and managing finances wisely, students can invest in their future while maintaining financial stability.`,
  },
  {
    id: 5,
    title: "Car Loan Tips",
    description: "Best practices for getting a low-interest car loan.",
    image: blog5,
    content:
      "Car loans provide a convenient way to finance a vehicle purchase, allowing...",
    Description:
      `Car loans provide a convenient way to finance a vehicle purchase, allowing buyers to spread the cost over time. To secure the best deal, start by checking your credit score, as a higher score can help you qualify for lower interest rates. Compare multiple lenders, including banks, credit unions, and online lenders, to find competitive terms and avoid high fees. It’s also essential to determine a realistic budget by considering not just the monthly payments but also insurance, maintenance, and fuel costs. Making a larger down payment can reduce the loan amount and interest burden. Opt for the shortest loan term you can afford to minimize interest expenses over time. Carefully review the loan agreement, ensuring you understand the interest rate, repayment terms, and any hidden fees. Avoid unnecessary add-ons that can increase the overall cost. Lastly, make timely payments to build a positive credit history and avoid penalties. By planning wisely, you can finance your car efficiently while maintaining financial stability.

`,
  },
];

const BlogSection = () => {
  const scrollRef = useRef(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Scroll Left (Move by 900px = 3 Cards)
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -900, behavior: "smooth" });
    }
  };

  // Scroll Right (Move by 900px = 3 Cards)
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  // Open Modal with Blog Details
  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-container">
      <h2>LATEST BLOGS</h2>

      {/* Scroll Left Button */}
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>

      {/* Blog Slider */}
      <div className="blog-slider" ref={scrollRef}>
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button onClick={() => openBlogModal(blog)}>Read More</button>
          </div>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>

      {/* Modal for Blog Details */}
      {selectedBlog && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedBlog.title}</h2>
            {/* <img src={selectedBlog.image} alt={selectedBlog.title} /> */}
            <p>{selectedBlog.Description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
