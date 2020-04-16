import React, { Component } from "react";
import { connect } from "react-redux";
//import { addShipping } from './actions/cartActions'
class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
    return (
      <div
        className="container text-center d-flex justify-content-center align-items-center flex-column"
        style={{
          height: "25%",
          borderLeft: "2px solid #181818",
          padding: "2% 0",
        }}
      >
        <div className="collection">
          <u style={{ listStyle: "none" }}>
            <li className="collection-item pb-2">
              <label>
                <input
                  type="checkbox"
                  ref="shipping"
                  onChange={this.handleChecked}
                />
                <span>Shipping(+6$)</span>
              </label>
            </li>
            <li className="collection-item pb-2">
              <b>Sub-Total: ${this.props.total.toFixed(2)} </b>
            </li>
            <li className="collection-item pb-2">
              <b>Tax: ${(this.props.total * 0.1).toFixed(2)} </b>
            </li>
            <li className="collection-item pb-2">
              <b>
                Total: ${(this.props.total * 0.1 + this.props.total).toFixed(2)}{" "}
              </b>
            </li>
          </u>
        </div>
        <div className="checkout">
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
