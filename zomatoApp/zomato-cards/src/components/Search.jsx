import React, { useState } from "react";
import "./style.css";
import Fooddata from "./FoodCard";
import Form from "react-bootstrap/Form";
import Cards from "./Cards";
import Button from "react-bootstrap/Button";
import TopBrands from "./TopBrands ";

const Search = () => {
  const [fdata, setfdata] = useState(Fooddata);
  //  console.log(fdata);

  const zomatologo =
    "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center">
        <img
          src={zomatologo}
          style={{
            width: "8rem",
            position: "relative",
            left: "2%",
            cursor: "pointer",
          }}
          alt=""
        />
        <h3 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">
          Zomato Web Application
        </h3>
        <div className="button">
          <Button variant="primary" className="button">
            Login{" "}
          </Button>
          <Button variant="success" className="button">
            SignUp
          </Button>
        </div>
      </div>

      <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Search Resturant food" />
        </Form.Group>

        <button
          className="btn text-light col-lg-1 "
          style={{ background: "#ed4c67" }}
        >
          Submit{" "}
        </button>
      </Form>

      <div className="top-brands mt-3">
        <TopBrands></TopBrands>
      </div>

      <section className="item_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: "300" }}>
          Discover the best food & drinks in Pune{" "}
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          <Cards data={fdata}></Cards>
        </div>
      </section>
    </>
  );
};

export default Search;
