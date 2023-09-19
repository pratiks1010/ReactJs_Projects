import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const zomatologo =
    "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={zomatologo} alt="Zomato Logo" />
          <p>Your favorite food, delivered.</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a >Home</a></li>
            <li><a >About Us</a></li>
            <li><a >Menu</a></li>
            <li><a >Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-details">
        <div className="footer-address">
          <h3>Our Address</h3>
          <p>Clover Park, Viman Nagar</p>
          <p>Pune, Maharashtra 41101</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@zomato.com</p>
          <p>Phone: +91558647784</p>
        </div>
      </div>
      <div className="footer-social">
        <ul>
          <li><a ><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a ><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a ><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
