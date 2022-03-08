import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className="container-fluid footer">
    <div className="container">
      <div className="row">

        <div className="col footer-left">
          <div>

            <h5>შეიტყეთ სიახლეები პირველებმა</h5>
            <h2>გამოიწერეთ ელ.ფოსტით</h2>
            <p>It only takes a second to be the first to find out about our latest news and promotions...</p>
            <div className="email dFlex">
              <input type="email" placeholder="ელ.ფოსტა"/>
              <button type="submit">გამოწერა</button>
            </div>

          </div>
        </div>
        <div className="col footer-right">
          <div>
            <h5>ადევნეთ თვალი სიახლეებს</h5>
            <h2>გამოგვყევით სოციალურ ქსელში</h2>
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