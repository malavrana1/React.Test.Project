import React from 'react';
import './css/ContactUs.css'; // Remove the dot before "ContactUs.css"

const ContactPage = () => {
  return (
    <div className="contact-container"> {/* Use className instead of class */}
      <h1>Contact Us</h1>
      <form id="contactForm">
        <label htmlFor="name">Name:</label> {/* Use htmlFor instead of for */}
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
