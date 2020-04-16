import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../actions/cartActions";
import Recipe from "../Recipe";

import "./Cart.css";

class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
    // let item = this.state.items.find(item => item.id === id);
    // item.quantity += 1;
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    // this.props.subtractQuantity(id);
    // let item = this.state.items.find(item => item.id === id);
    // item.quantity -= 1;
  };

  render() {
    let addedItems = this.props.items ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img
                src={`../assets/hats/${item.images[0]}`}
                alt={item.img}
                className="img-fluid rounded"
              />
            </div>

            <div className="item-desc">
              <span className="title">{item.name}</span>
              <p>
                <b>Price: ${item.price * item.quantity}</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link
                  to="/cart"
                  onClick={() => {
                    this.handleAddQuantity(item.id);
                  }}
                >
                  <i className="fas fa-arrow-up"></i> +1 Quantity
                </Link>
                <Link to="/cart">
                  <i
                    className="fas fa-arrow-down ml-4"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  ></i>{" "}
                  -1 Quantity
                </Link>
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
      <p>Nothing.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
