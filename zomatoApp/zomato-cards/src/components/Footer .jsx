import React from 'react';
import './Footer.css'; // Import the CSS file for styling

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
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-details">
        <div className="footer-address">
          <h3>Our Address</h3>
          <p>123 Zomato Street</p>
          <p>Foodville, ZO 54321</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@zomato.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-social">
        <ul>
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
