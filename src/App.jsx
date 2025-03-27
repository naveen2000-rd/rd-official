import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ServicesList from "./Pages/Services";
import EMICalculator from "./Pages/EMI";
import ContactUs from "./Pages/ContactUS";
import Blogs from "./Pages/Blog";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesList />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
