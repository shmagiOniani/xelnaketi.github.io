import React, {useState} from "react";
import { Link } from "react-router-dom";

import search from "../../assets/images/search.png"
import "./Navbar.scss"

function Navbar() {
    const [searchOpen, setSearchOpen] = useState(false)
    const [resNavOpen, setResNavOpen] = useState(false)

    const handleSearch = () => {
        setSearchOpen(prev => !prev)
        console.log("edsd");
    }

    const handleResNavOpen = () => {
        setResNavOpen(prev => !prev)
        console.log(resNavOpen);
    }

    const heart = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
      </svg>
    );

  return(

  <div id="nav-bar" className="container-fluid nav-bar d-flex">
    <div className="responsive-nav">
      <div id="burger" className={`nav-list ${resNavOpen ? "show" : "hide"}`}>
        <div className="Home">
          <a href="#">Home</a>
        </div>
        <div id="shop">
          <a href="#">
            Shop<i className="fas fa-chevron-down d-flex"></i>
          </a>
          <div className="drop-down shop-down d-flex">
            <div className="first category">
              <h5>category</h5>
              <ul>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
              </ul>
            </div>
            <div className="second category">
              <h5>category</h5>
              <ul>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
              </ul>
            </div>
            <div className="third category">
              <h5>category</h5>
              <ul>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
                <li>
                  <a href="#">item</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="buy" >
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
      <div className="Home">
        <Link to="/home">Home</Link>
      </div>
      <div id="buy">
        <Link to="/buy">Buy</Link>
      </div>
    </nav>
    <Link to="/home">

      <h1>კარები</h1>
    </Link>
    <div className="shop-tools ">
      <div className="search">
        <input
          type="text"
          id="search-input"
          className={!searchOpen ? "invisible" : "visible"}
          placeholder="  ძებნა..."
        />
        <img
          className="search-icon"
          src={search}
          alt="search-icon"
          onClick={handleSearch}
        />
      </div>
      <div className="favorite">
        {/* <i className="far fa-heart"></i> */}
        {heart}
        <div className="number ">
          <p>1</p>
        </div>
      </div>
      <div className="basket d-flex">
        <img src="images/basket.png" alt="" />
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
