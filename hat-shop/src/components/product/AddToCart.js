import React, { Component } from "react";
import { connect } from "react-redux";
import KeyValueDropDown from "./KeyValueDropDown";

import { addToCart } from "../actions/cartActions";

class AddToCart extends Component {
  handleSubmit = (e, id, sizeName, sizeValue) => {
    e.preventDefault();
    let selectedValue = {
      size: document.getElementById("size-button").value,
      count: document.getElementById("quantity-button").value,
    };
    this.props.addToCart(id, selectedValue.size, selectedValue.count);
    console.log(this.props);
  };

  render() {
    let product = this.props.product;
    const sizeName = Object.keys(product.sizes);
    const sizeValue = Object.values(product.sizes);
    return (
      // <div></div>
      <div>
        <form
          onSubmit={(e) =>
            this.handleSubmit(e, this.props.product.id, sizeName, sizeValue)
          }
        >
          <div className="sizeSelector form-group">
            <KeyValueDropDown
              name={"Size and Quantity"}
              sizeName={sizeName}
              sizeValue={sizeValue}
            />
            <button className="btn btn-primary mt-1 mb-1 form_buttons">
              Add To Cart
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, size, count) => {
      dispatch(addToCart(id, size, count));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
