import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [form, setForm] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (functionality to be added)");
    setForm({ email: "", message: "" });
  };

  return (
    <div id="contact-container">
      <div className="contact-left">
        <h2>Contact Details:</h2>
        <p><strong>Email:</strong> support@kognos.com</p>
        <p><strong>Phone:</strong> +1 123 456 7890</p>
        <p><strong>Address:</strong> 123 Wellness Ave, Mindcity</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
        <p className="response-text">We typically respond within 12 hours.</p>
      </div>
      <div className="contact-right">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Message"
            required
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
