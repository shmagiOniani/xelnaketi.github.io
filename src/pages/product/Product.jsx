import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import product from "../../assets/images/product.png";
import "./Product.scss"

function Product() {
  const next = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>;
  const prev = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>;
  return (
    <div className="container-fluid product-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 product-slider">
            <Carousel
              autoPlay={false}
              interval={2000}
              infiniteLoop={true}
              emulateTouch={true}
              showStatus={false}
              showIndicators={false}
            >
              <div className="product-slider-item">
                <img src={product} />
              </div>
              <div className="product-slider-item">
                <img src={product} />
              </div>
              <div className="product-slider-item">
                <img src={product} />
              </div>
              <div className="product-slider-item">
                <img src={product} />
              </div>
              <div className="product-slider-item">
                <img src={product} />
              </div>
            </Carousel>
          </div>
          <div className="col-xs-12 col-sm-6 product-desc">
            <h2>Ash Double Bed</h2>
            <p>A bed is a piece of furniture which is used as a place to sleep or relax.</p>
            <span className="price"></span>
            <div className="add-amount d-flex justify-content-center">
              <button>add to shopping cart</button>
              <p>30 pieces available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
