import AboutUs from "../Component/About";
import Banner from "../Component/Banner";
import ContactForm from "../Component/Contact";
import Services from "../Component/Services";
import Testi from "../Component/Testi";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Rudronil Financial Pvt Ltd | Secure Your Future with Loans &
          Investments
        </title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testi></Testi>
      <ContactForm></ContactForm>
    </>
  );
};

export default Home;
