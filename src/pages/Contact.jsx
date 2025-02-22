import { useState } from "react";
import styles from "./Contact.module.css";
import HeadNav from "../components/HeadNav";
import Toast from "../components/Toast";
import StickyComponent from "../components/StickyComponent";
import Footer from "../components/Footer";

const contactData = {
  email: "info@sqr400official.com",
};

const initialData = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [formData, setFormData] = useState(initialData);

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
    setFormData(initialData);
  };

  return (
    <>
      <HeadNav />
      <main className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <p>Have any questions? Reach out to us!</p>

        <div className={styles.contactInfo}>
          <p>
            <strong>Email:</strong> {contactData.email}
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {showToast && (
          <Toast message="Your message has been sent!" type="success" />
        )}
      </main>
      <StickyComponent />
      <Footer />
    </>
  );
};

export default Contact;
