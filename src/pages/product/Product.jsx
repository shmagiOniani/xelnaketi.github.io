import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  DSCF2859,
  DSCF2861,
  DSCF2862,
  DSCF2864,
  DSCF2865,
  DSCF2867,
} from "../../assets/images/foldable";
import OwlSlider from "../home/owlSlider/OwlSlider"
import "./Product.scss";

const next = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
    <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
  </svg>
);
const prev = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
    <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
  </svg>
);

const productArr = [DSCF2859, DSCF2861, DSCF2862, DSCF2864, DSCF2865, DSCF2867];

function Product() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <>
    <div className="container-fluid product-wrapper">
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
            {productArr.map((img, ind) => {
              return (
                <div key={ind} className="product-slider-item">
                  <img src={img} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="col-xs-12 col-sm-6 product-details">
          <div className="product-header">
            <div className="product-name">
              <h2>პროდუქტის დასახელება</h2>
              <p> შემთხვევითად გენერირებული ტექსტი ეხმარება.</p>
            </div>
          </div>
          <div className="price">
          <del>
              <span className="old-price">
                35,<sup>00</sup>
              </span>
            </del>
            <ins>
              <span className="new-price">
                32,<sup>50</sup>
              </span>
              <span className="currency">ლარი</span>
            </ins>
       
          </div>
          <div className="product-description">
            <ul>
              <li
                className={tabIndex === 1 ? "active-tab" : ""}
                onClick={() => setTabIndex(1)}
              >
                აღწერა
              </li>
              <li
                className={tabIndex === 2 ? "active-tab" : ""}
                onClick={() => setTabIndex(2)}
              >
                ზომა
              </li>
              <li
                className={tabIndex === 3 ? "active-tab" : ""}
                onClick={() => setTabIndex(3)}
              >
                მატერიალი
              </li>
            </ul>
            <div className="tab-body">
              {tabIndex === 1 ? (
                <div className="description">
                  შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს.
                </div>
              ) : tabIndex === 2 ? (
                <div className="size">
                 ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება,
                </div>
              ) : (
                <div className="material">
                 რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება.
                </div>
              )}
            </div>
          </div>
          <div className="add-button">
            <button>კალათაში დამატება</button>
          </div>
        </div>
      </div>
    </div>
      <OwlSlider/>
    </>
  );
}

export default Product;
