import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import product from "../../../assets/images/product.png";
import {useCurrentWidth} from "../../../hooks/useCurrentWidth"
import "./OwlSlider.scss"

function OwlSlider() {
 let screenWidth = useCurrentWidth();
  return (
    <div id="sales-carousel" className="container-fluid">
      <h2>Sales</h2>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        autoplayTimeout={1000}
        dotData={true}
        items={"5"}
      >
      <div className="sale-item">
        <div className="pricing">
          <div className="price">
            <del>
              <span className="amount">€35,<sup>00</sup></span>
            </del>
            <ins>
              <span className="amount">€32,<sup>50</sup></span>
            </ins>
          </div>

          <div className="name">
            <h3>Door Name</h3>
          </div>
          <div className="read-more">
            <a href="#">
              <p>read more</p>
            </a>
          </div>
        </div>
        <div className="dFlex">
          <img src={product} alt=""/>
        </div>

      </div>
      <div className="sale-item">
        <div className="pricing">
          <div className="price">
            <del>
              <span className="amount">€35,<sup>00</sup></span>
            </del>
            <ins>
              <span className="amount">€32,<sup>50</sup></span>
            </ins>
          </div>

          <div className="name">
            <h3>Door Name</h3>
          </div>
          <div className="read-more">
            <a href="#">
              <p>read more</p>
            </a>
          </div>
        </div>
        <div className="dFlex">
          <img src={product} alt=""/>
        </div>
      </div>
      <div className="sale-item">
        <div className="pricing">
          <div className="price">
            <del>
              <span className="amount">€35,<sup>00</sup></span>
            </del>
            <ins>
              <span className="amount">€32,<sup>50</sup></span>
            </ins>
          </div>

          <div className="name">
            <h3>Door Name</h3>
          </div>
          <div className="read-more">
            <a href="#">
              <p>read more</p>
            </a>
          </div>
        </div>
        <div className="dFlex">
          <img src={product} alt=""/>
        </div>
      </div>
      <div className="sale-item">
        <div className="pricing">
          <div className="price">
            <del>
              <span className="amount">€35,<sup>00</sup></span>
            </del>
            <ins>
              <span className="amount">€32,<sup>50</sup></span>
            </ins>
          </div>

          <div className="name">
            <h3>Door Name</h3>
          </div>
          <div className="read-more">
            <a href="#">
              <p>read more</p>
            </a>
          </div>
        </div>
        <div className="dFlex">
          <img src={product} alt=""/>
        </div>
      </div>
      <div className="sale-item">
        <div className="pricing">
          <div className="price">
            <del>
              <span className="amount">€35,<sup>00</sup></span>
            </del>
            <ins>
              <span className="amount">€32,<sup>50</sup></span>
            </ins>
          </div>

          <div className="name">
            <h3>Door Name</h3>
          </div>
          <div className="read-more">
            <a href="#">
              <p>read more</p>
            </a>
          </div>
        </div>
        <div className="dFlex">
          <img src={product} alt=""/>
        </div>
      </div>
      <div className="sale-item">
        <div className="pricing">
          <div className="price">
            <del>
              <span className="amount">€35,<sup>00</sup></span>
            </del>
            <ins>
              <span className="amount">€32,<sup>50</sup></span>
            </ins>
          </div>

          <div className="name">
            <h3>Door Name</h3>
          </div>
          <div className="read-more">
            <a href="#">
              <p>read more</p>
            </a>
          </div>
        </div>
        <div className="dFlex">
          <img src={product} alt=""/>
        </div>
      </div>
      <div className="sale-item">
        <div className="pricing">
          <div className="price">
            <del>
              <span className="amount">€35,<sup>00</sup></span>
            </del>
            <ins>
              <span className="amount">€32,<sup>50</sup></span>
            </ins>
          </div>

          <div className="name">
            <h3>Door Name</h3>
          </div>
          <div className="read-more">
            <a href="#">
              <p>read more</p>
            </a>
          </div>
        </div>
        <div className="dFlex">
          <img src={product} alt=""/>
        </div>
      </div>
      <div className="sale-item">
        <div className="pricing">
          <div className="price">
            <del>
              <span className="amount">€35,<sup>00</sup></span>
            </del>
            <ins>
              <span className="amount">€32,<sup>50</sup></span>
            </ins>
          </div>

          <div className="name">
            <h3>Door Name</h3>
          </div>
          <div className="read-more">
            <a href="#">
              <p>read more</p>
            </a>
          </div>
        </div>
        <div className="dFlex">
          <img src={product} alt=""/>
        </div>
      </div>
      <div className="sale-item">
        <div className="pricing">
          <div className="price">
            <del>
              <span className="amount">€35,<sup>00</sup></span>
            </del>
            <ins>
              <span className="amount">€32,<sup>50</sup></span>
            </ins>
          </div>

          <div className="name">
            <h3>Door Name</h3>
          </div>
          <div className="read-more">
            <a href="#">
              <p>read more</p>
            </a>
          </div>
        </div>
        <div className="dFlex">
          <img src={product} alt=""/>
        </div>
      </div>
      </OwlCarousel>
    </div>
  );
}

export default OwlSlider;
