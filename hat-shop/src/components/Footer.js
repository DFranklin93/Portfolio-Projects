import React from "react";

import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="info">
            <div className="infoWrapper">
              <div className="infoOne">
                <p>
                  <a href="/shop">Shop</a>
                </p>
                <p>
                  <a href="//#">stockists</a>
                </p>
                <p>
                  <a href="//#">blog</a>
                </p>
                <p>
                  <a href="//#">about us</a>
                </p>
                <p>
                  <a href="//#">contact</a>
                </p>
              </div>
              <div className="infoTwo">
                <p>
                  <a href="//#">FAQ</a>
                </p>
                <p>
                  <a href="//#">Shipping & Returns</a>
                </p>
                <p>
                  <a href="//#">Store Policy</a>
                </p>
                <p>
                  <a href="//#">Payment Methonds</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <a href="https://solowebdev.org">Back To Solo Web Dev</a>
        </footer>
      </div>
    );
  }
}
