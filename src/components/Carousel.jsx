import React from "react";
import "../style/carousel.css";
export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="container">
        <div className="row align-items-center py-lg-0 pt-5">
          <div className="col-lg-8">
            <div className="text-center animate__animated animate__slideInLeft">
              <div className="sale-banner-text">
                <p>India's Biggest</p>
                <p className="sale-text text-bold">SALE</p>
                <p className="description-text">Upto 90% Discount</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 carousel-image-model">
            <img
              className="animate__animated animate__slideInRight"
              src="/assets/images/male_model_1.jpg"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
