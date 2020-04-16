import React, { Component } from "react";
import "./NavSideMenu.css";

export default class NavSideMenu extends Component {
  closeSideMenu = (e) => {
    let navMenu = document.getElementById("nav-menu");
    let mainContainer = document.getElementById("main-container");
    navMenu = navMenu.classList;
    mainContainer = mainContainer.classList;
    switch (navMenu.value) {
      case "base-cart opened-cart":
        navMenu.remove("opened-cart");
        navMenu.add("closed-cart");
        mainContainer.remove("opened-menus");
        mainContainer.add("closed-menus");
        break;
      default:
      // alert("Error closing cart");
    }
  };

  render() {
    return (
      <div id="nav-menu" className="base-cart closed-cart">
        <div id="cart-header">
          <div className="row text-center container">
            <div
              className="col-10"
              style={{ position: "relative", left: "17%" }}
            >
              <span>Menu</span>
            </div>
            <div
              className="col-2 side-menu-exit"
              onClick={(e) => this.closeSideMenu(e)}
            >
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </div>
        </div>
        <div id="menu-list">
          <ul>
            <li>Home</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    );
  }
}
