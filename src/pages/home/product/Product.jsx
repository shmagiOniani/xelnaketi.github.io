import React from "react";
import { Link } from "react-router-dom";

import product from "../../../assets/images/product.png";
import heart from "../../../assets/images/heart.svg";
import compare from "../../../assets/images/code-compare.svg";
import basket from "../../../assets/images/cart-shopping.svg";
import "./Product.scss";

function Product() {
  const compare = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M320 488C320 497.5 314.4 506.1 305.8 509.9C297.1 513.8 286.1 512.2 279.9 505.8L199.9 433.8C194.9 429.3 192 422.8 192 416C192 409.2 194.9 402.7 199.9 398.2L279.9 326.2C286.1 319.8 297.1 318.2 305.8 322.1C314.4 325.9 320 334.5 320 344V384H336C371.3 384 400 355.3 400 320V153.3C371.7 140.1 352 112.8 352 80C352 35.82 387.8 0 432 0C476.2 0 512 35.82 512 80C512 112.8 492.3 140.1 464 153.3V320C464 390.7 406.7 448 336 448H320V488zM456 79.1C456 66.74 445.3 55.1 432 55.1C418.7 55.1 408 66.74 408 79.1C408 93.25 418.7 103.1 432 103.1C445.3 103.1 456 93.25 456 79.1zM192 24C192 14.52 197.6 5.932 206.2 2.076C214.9-1.78 225-.1789 232.1 6.161L312.1 78.16C317.1 82.71 320 89.2 320 96C320 102.8 317.1 109.3 312.1 113.8L232.1 185.8C225 192.2 214.9 193.8 206.2 189.9C197.6 186.1 192 177.5 192 168V128H176C140.7 128 112 156.7 112 192V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V192C48 121.3 105.3 64 176 64H192V24zM56 432C56 445.3 66.75 456 80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432z" />
    </svg>
  );

  const heart = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
    </svg>
  );
  const cart = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
    </svg>
  );
  return (
    <div className="container-fluid featured-products">
      <h2>Product</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <Link to="product/3" className="option">
                  Select Option
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12  feature-item">
            <div className="product-item">
              <div className="image dFlex">
                <img src={product} alt="product_1.jpg" className="img-fluid" />
                <div className="quick-bar">
                  {heart}
                  {cart}
                  {compare}
                </div>
              </div>
            </div>
            <div className="title">
              <h4>Header</h4>
              <p>Paragraph</p>
              <div className="price-option">
                <p className="price">$00.00</p>
                <a className="option" href="#">
                  Select Option
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
