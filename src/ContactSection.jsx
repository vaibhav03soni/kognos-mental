import React from 'react';
import './ContactSection.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact-section">
      <div className="contact-heading">
        <h5>GET IN TOUCH</h5>
        <h2>We’re Here to Support You</h2>
        <p>
          Whether you have questions, need help getting started, or want to learn more —
          reach out anytime.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-details">
          <h4>Contact Details:</h4>
          <p><strong>Email:</strong> support@kognos.com</p>
          <p><strong>Phone:</strong> –</p>
          <p><strong>Address:</strong></p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </div>
          <p className="response-time">We typically respond within 12 hours.</p>
        </div>

        <div className="contact-form">
          <form>
            <label>Email</label>
            <input type="email" placeholder="Your email" required />
            <label>Message</label>
            <textarea placeholder="Your message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
