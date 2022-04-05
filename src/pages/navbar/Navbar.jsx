import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Form } from "react-bootstrap";
import {
  DSCF2859,
  DSCF2861,
  DSCF2862,
  DSCF2864,
  DSCF2865,
  DSCF2867,
} from "../../assets/images/foldable";
import search from "../../assets/images/search.png";
import basket from "../../assets/images/basket.png";
import "./Navbar.scss";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const productArr = [DSCF2859, DSCF2861, DSCF2862, DSCF2864, DSCF2865, DSCF2867];

function Navbar() {
  const [searchContainerOn, setSearchContainerOn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [resNavOpen, setResNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleSearch = () => {
    setSearchOpen((prev) => !prev);
    console.log("edsd");
  };

  const handleResNavOpen = () => {
    setResNavOpen((prev) => !prev);
    console.log(resNavOpen);
  };

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
    <div id="nav-bar" className="container-fluid nav-bar d-flex">
      <div className="responsive-nav">
        <div id="burger" className={`nav-list ${resNavOpen ? "show" : "hide"}`}>
          <div className="Home">
            <a href="home/">Home</a>
          </div>
          <div id="shop">
            <a href="home/">
              Shop<i className="fas fa-chevron-down d-flex"></i>
            </a>
            <div className="drop-down shop-down d-flex">
              <div className="first category">
                <h5>category</h5>
                <ul>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                </ul>
              </div>
              <div className="second category">
                <h5>category</h5>
                <ul>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                </ul>
              </div>
              <div className="third category">
                <h5>category</h5>
                <ul>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                  <li>
                    <a href="home/">item</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="buy">
            <Link to="/buy">Buy</Link>
          </div>
        </div>
        <div className="wrap" onClick={handleResNavOpen}>
          <div className={`${!resNavOpen ? "artopen" : "artclose"}`}>
            <div className="burgx"></div>
            <div className="burgx2"></div>
            <div className="burgx3"></div>
          </div>
        </div>
      </div>
      <nav>
        <div className="Home">{/* <Link to="/home">მთავარი</Link> */}</div>
        {/* <div id="buy">
        <Link to="/buy">Buy</Link>
      </div> */}
      </nav>

      <Link className="page-name" to="/home">
        <h1>ბარახლო</h1>
      </Link>
      <div className="shop-tools ">
        <div className="search">
          <div
            className={`input-container ${
              !searchOpen ? "invisible" : "visible"
            }`}
          >
            <input
              type="text"
              className="search-input"
              placeholder="ძიება..."
              onFocus={() => setSearchContainerOn(true)}
              onBlur={() => setSearchContainerOn(false)}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <div
              className={`search-result-container ${
                // true ? "active-search " : ""
                searchContainerOn ? "active-search " : ""
              }`}
            >
              <div className="map-wrapper">
                {arr.map((item) => {
                  return (
                    <Row key={item} className="search-result-item">
                      <Col xs={2} className="img-container">
                        <div>
                          <img src={basket} alt="search/img" />
                        </div>
                      </Col>
                      <Col xs={10} className="search-result-body">
                        შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
                        ტიპოგრაფიული ნაწარმის შემქმნელებს.
                      </Col>
                      {/* <Col xs={2} className="read-more">
                  <span>მეტის ნა</span>
                </Col> */}
                    </Row>
                  );
                })}
                {/* <div className="show-more"><span>მეტის ნახვა</span></div> */}
              </div>
            </div>
          </div>
          <img
            className="search-icon"
            src={search}
            alt="search-icon"
            onClick={handleSearch}
          />
        </div>
        <div className="favorite">
          <div className="cart" onClick={()=> setCartOpen((prev)=> !prev)} >
            <img src={basket} />
          </div>
          <div className="number ">
            <p>1</p>
          </div>
          <div className={`favorite-dropdown ${
              !cartOpen ? "invisible" : ""
            }`}
           
            >
              <div className="items"  onBlur={()=> console.log(false)}>
                {productArr.map((item, index)=> {
                  return (
                    <div key={index} className="item">
                      <div className="img-container">
                        <img src={item} />
                      </div>
                      <div className="item-body">
                        <div className="name">გასაშლელი მაყალი</div>
                        <div className="price">200.00$</div>
                        <div className="delete-button">X</div>
                      </div>
                    </div>
                  )
                })}
              </div>
                <div className="submit-cart">
                  <Link to={"/map"}>შეკვეთა</Link>
                </div>
          </div>
        </div>
        <div className="basket d-flex">
          <div className="price-number">
            <p>0</p>
            <p>/$</p>
            <p>000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
