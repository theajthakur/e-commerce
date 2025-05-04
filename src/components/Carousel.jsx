import React from "react";
import "../style/carousel.css";
export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="container">
        <div className="row align-items-center py-sm-0 py-5">
          <div className="col-sm-8 ">
            <div className="text-center">
              <div className="sale-banner-text">
                <p>India's Biggest</p>
                <p className="sale-text text-bold">SALE</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 carousel-image-model">
            <img src="/assets/images/male_model_1.jpg" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
