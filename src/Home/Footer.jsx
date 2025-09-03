import Welcome from "../Small_Components/Welcome";
import Insta from "../Small_Components/Icons/insta";
import LinkedIn from "../Small_Components/Icons/LinkedIn";
import "./Footer.css";
import React, { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <footer id="footer-section" ref={ref} className="money-matters-footer">
      {/* Header Section */}
      <div className="footer-header-section">
        <Welcome text="CONTACT US" />
        <div className="header-description">
          <p>
            Connect with the Money Matters community and stay updated with
            financial insights
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="footer-main-content">
        <div className="footer-grid">
          {/* Contact Information */}
          <div className="footer-column contact-column">
            <div className="column-header">
              <div className="header-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3>Get In Touch</h3>
            </div>

            <div className="contact-info">
              <div className="info-item">
                <span className="info-label">Email Address</span>
                <a
                  href="mailto:moneymatters@iiitnr.edu.in"
                  className="info-value email-link"
                >
                  moneymatters@iiitnr.edu.in
                </a>
              </div>

              <div className="social-links-section">
                <span className="info-label">Follow Us</span>
                <div className="social-icons-container">
                  <div className="social-icon-wrapper">
                    <Insta Link="https://www.instagram.com/moneymatters_iiitnr/" />
                  </div>
                  <div className="social-icon-wrapper">
                    <LinkedIn Link="https://www.linkedin.com/company/nnnnchdskjhdsjhfdsjkh097/posts/?feedView=all" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="footer-column address-column">
            <div className="column-header">
              <div className="header-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Visit Us</h3>
            </div>

            <div className="address-info">
              <div className="address-item">IIIT Naya Raipur</div>
              <div className="address-item">Plot No. 7, Sector 24</div>
              <div className="address-item">Near Purkhoti Muktangan</div>
              <div className="address-item">Atal Nagar - 493661</div>
              <div className="address-item">Chhattisgarh, India</div>
            </div>
          </div>

          {/* Map Section */}
          <div className="footer-column map-column">
            <div className="column-header">
              <div className="header-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
                  <polyline points="8,2 8,18" />
                  <polyline points="16,6 16,22" />
                </svg>
              </div>
              <h3>Location</h3>
            </div>

            <div className="map-wrapper">
              <iframe
                className="location-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4688.930373299446!2d81.76451912210946!3d21.12825872924271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c434ac2ae871%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1726359787706!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IIIT Naya Raipur Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider">
        <div className="divider-line"></div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="copyright-container">
          <div className="logo-section">
            <span className="footer-logo">
              Money<span className="logo-accent">Matters</span>
            </span>
          </div>
          <div className="copyright-text">
            <p>© 2024 All Rights Reserved by Money Matters, IIIT Naya Raipur</p>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
