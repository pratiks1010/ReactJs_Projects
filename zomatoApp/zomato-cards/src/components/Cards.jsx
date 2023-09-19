import React from "react";
import Card from "react-bootstrap/Card";

const Cards = ({ data }) => {
  return (
    <>
      {data.map((element, k) => {
        return (
          <>
            <Card style={{ width: "24rem",border:"none" }} className="hover mb-4">
              <Card.Img variant="top" className="card-img" src={element.imgdata} />

              <div className="card_body">
                <div className="food-title d-flex justify-content-between align-items-center">
                  <h4 className="mt-2">{element.rname}</h4>
                  <span>{element.rating}&nbsp;★</span>
                </div>

                <div className="food-details d-flex justify-content-between">
                  <h5>{element.address}</h5>
                  <span>{element.price}</span>
                </div>

                <div className="more-info">

                </div>

                <div className="end-data d-flex justify-content-between align-items-center">
                    <img src={element.delimg} className="delimg" alt="" />
                    <p>{element.somedata}</p>
                </div>
              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;
