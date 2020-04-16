import React from "react";

import CartSideMenu from "./cart/cartSideMenu";
import NavSideMenu from "./NavSideMenu";

import "./Header.css";

const onCartClick = () => {
  let cartWindow = document.getElementById("cart-window");
  let mainContainer = document.getElementById("main-container");
  mainContainer = mainContainer.classList;
  cartWindow = cartWindow.classList;
  switch (cartWindow.value) {
    case "base-cart closed-cart":
      cartWindow.remove("closed-cart");
      cartWindow.add("opened-cart");
      mainContainer.remove("closed-menus");
      mainContainer.add("opened-menus");
      break;
    case "base-cart opened-cart":
      cartWindow.remove("opened-cart");
      cartWindow.add("closed-cart");
      mainContainer.remove("opened-menus");
      mainContainer.add("closed-menus");
      break;
    default:
  }
};

const onMenuClick = (e) => {
  let navMenu = document.getElementById("nav-menu");
  let mainContainer = document.getElementById("main-container");
  navMenu = navMenu.classList;
  mainContainer = mainContainer.classList;
  switch (navMenu.value) {
    case "base-cart closed-cart":
      navMenu.remove("closed-cart");
      navMenu.add("opened-cart");
      mainContainer.remove("closed-menus");
      mainContainer.add("opened-menus");
      break;
    case "base-cart opened-cart":
      navMenu.remove("opened-cart");
      navMenu.add("closed-cart");
      mainContainer.remove("opened-menus");
      mainContainer.add("closed-menus");
      break;
    default:
  }
};

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <CartSideMenu />
        <NavSideMenu />
        <header>
          <div className="ship">
            <span>FREE SHIPPING WORLDWIDE</span>
          </div>
          <div className="background">
            <div className="whitebar">
              <div className="logo">
                <a href="/">HATS</a>
              </div>
              <div className="cart-menu">
                <div className="cart" onClick={onCartClick}>
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="list-cart" id="list-cart">
                  <div className="list-cart-header">
                    <span className="btn-close">&times;</span>
                    <span className="header">CART</span>
                  </div>
                  <div className="shoppingCart">
                    <ul id="show-cart"></ul>
                    <div>
                      <span id="total-cart"></span>
                    </div>
                  </div>
                </div>
                <div className="menu" onClick={onMenuClick}>
                  <i className="fas fa-bars"></i>
                </div>
                <div className="side-nav" id="side-menu">
                  <li className="btn-close">&times;</li>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="aboutUs.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
