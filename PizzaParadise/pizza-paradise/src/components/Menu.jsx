import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
       
          <div className="col-6">
            <div className="about_img">
              <img src="/img/img2.jpg" alt="pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>DELUXE VEGGIE</h1>
            <p>
            For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.e. But we wanted
              more of those lovely toppings in our pizza.
            </p>
            <div className="about_btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
