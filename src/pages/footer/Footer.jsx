import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className="container-fluid footer">
    <div className="container">
      <div className="row">

        <div className="col footer-left">
          <div>

            <h5>get latest minimalism news</h5>
            <h2>Newsletter Subscribe</h2>
            <p>It only takes a second to be the first to find out about our latest news and promotions...</p>
            <div className="email dFlex">
              <input type="email" placeholder="Email Address"/>
              <button type="submit">SUBSCRIBE</button>
            </div>

          </div>
        </div>
        <div className="col footer-right">
          <div>
            <h5>read our news</h5>
            <h2>Follow Us</h2>
            <p>It only takes a second to be the first to find out about our news and promotions...</p>
            <div className="social">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer