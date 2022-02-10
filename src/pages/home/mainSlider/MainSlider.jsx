import React from 'react'
import "./MainSlider.scss"

function MainSlider() {
  return (
    <div className="container-fluid main-carousel">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active first indicator"
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          className="second indicator"
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
          className="third indicator"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100 first"></div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 second"></div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 third"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MainSlider