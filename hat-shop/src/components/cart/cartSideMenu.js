import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../actions/cartActions";
import Recipe from "./Recipe";

import "./cartSideMenu.css";

class CartSideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
    };
  }

  closeSideCart = (e) => {
    let cartWindow = document.getElementById("cart-window");
    let mainContainer = document.getElementById("main-container");
    mainContainer = mainContainer.classList;
    switch (cartWindow.classList.value) {
      case "base-cart opened-cart":
        cartWindow.classList.remove("opened-cart");
        cartWindow.classList.add("closed-cart");
        mainContainer.remove("opened-menus");
        mainContainer.add("closed-menus");
        break;
      default:
      // alert("Error closing cart");
    }
  };
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
    this.setState({ items: this.props.items });
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
    this.setState({ items: this.props.items });
    // let item = this.state.items.find(item => item.id === id);
    // item.quantity += 1;
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
    this.setState({ items: this.props.items });
    // let item = this.state.items.find(item => item.id === id);
    // item.quantity -= 1;
  };

  render() {
    let addedItems = this.props.items ? (
      this.props.items.map((item) => {
        return (
          <li className="collection-item avatar pt-2 pb-2" key={item.id}>
            <div className="item-img">
              <img
                src={`../assets/hats/${item.images[0]}`}
                alt={item.img}
                className="img-fluid rounded w-75"
              />
            </div>

            <div className="item-desc">
              <span className="title">{item.name}</span>
              <p className="pt-2">
                <b>Price: ${(item.price * item.quantity).toFixed(2)}</b>
              </p>
              <p className="pt-2 pb-2">
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove d-flex align-items-center justify-content-around">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => {
                    this.handleAddQuantity(item.id);
                  }}
                >
                  +1<i className="fas fa-arrow-up"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark "
                  onClick={() => {
                    this.handleSubtractQuantity(item.id);
                  }}
                >
                  -1<i className="fas fa-arrow-down"></i>
                </button>
              </div>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p className="pt-2">Nothing.</p>
    );
    return (
      <div className="base-cart closed-cart" id="cart-window">
        <div style={{ height: "100%" }}>
          <div
            className="d-flex justify-content align-items-center"
            id="cart-header"
          >
            <div className="row text-center container">
              <div
                className="col-10"
                style={{ position: "relative", left: "17%" }}
              >
                <span>your bag</span>
              </div>
              <div
                className="col-2 side-menu-exit"
                onClick={(e) => this.closeSideCart(e)}
              >
                <i className="fas fa-sign-out-alt"></i>
              </div>
            </div>
          </div>
          <div style={{ height: "70%", borderLeft: "2px solid #181818" }}>
            <ul
              className="container collection text-center"
              style={{ height: "100%", overflow: "auto", listStyle: "none" }}
            >
              {addedItems}
            </ul>
          </div>

          <Recipe />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartSideMenu);
