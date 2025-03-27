import ContactForm from "../Component/Contact";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Us | Get Financial Assistance | Rudronil Financial
        </title>
        <meta
          name="description"
          content="Get in touch with Rudronil Financial Pvt Ltd for expert guidance on loans, investments, and financial planning."
        />
      </Helmet>
      <ContactForm />
    </>
  );
};

export default ContactUs;
