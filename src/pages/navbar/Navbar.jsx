import React, {useState} from "react";
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
          <a href="#">Buy</a>
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
        <a href="#">Home</a>
      </div>
      <div id="buy">
        <a href="#">Buy</a>
      </div>
    </nav>
    <h1>კარები</h1>
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
        <i className="far fa-heart"></i>
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
