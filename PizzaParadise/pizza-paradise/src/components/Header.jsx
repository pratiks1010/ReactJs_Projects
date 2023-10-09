import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
        <Navbar/>
      <div className="banner__context">
        <div className="container">
            <div className="banner_text">
            <h3>Pizza Delivery</h3>
          <h1>Pioneers of Pizzas</h1>
          <p>
            Ever looked at Pizza Toppings and wondered, "WHY SO LESS"? Well, we
            did. And we definitely wanted more! So, we immediately took it upon
            ourselves to fix it, and made the pizzas that we all deserve -
            PIZZAS LOADED WITH 2X TOPPINGS.
          </p>
          <div className="banner_btn">
            <a href="" className="btn btn-smart">Order Now</a>
          </div>

            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
