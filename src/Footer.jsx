import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="logo">Kognos</h2>

        <div className="footer-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#therapists">Therapists</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>

          <ul>
            <li><a href="/terms">Terms Of Use</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025Solus. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
