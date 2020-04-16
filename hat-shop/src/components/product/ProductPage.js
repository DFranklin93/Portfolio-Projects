import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

import AddToCart from "./AddToCart";
import "./ProductPage.css";

import data from "../../assets/product.json";

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      size: null,
    };
  }

  UNSAFE_componentWillMount() {
    window.scrollTo(0, 0);
    let url = window.location.href.slice(-3);
    const product = data.filter((item) => item.id === url);
    this.setState({
      product: product,
    });
  }

  selectedSize = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const product = this.state.product[0];

    return (
      <div
        className="product_page_container closed-menus"
        id="main-container"
        style={{ paddingTop: "15vh" }}
      >
        <div
          className="subheader"
          style={{ position: "relative", right: "39%" }}
        >
          <div className="directory">
            <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> /{" "}
            <span className="font-weight-bold">Item#{product.id}</span>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col position-static">
              <div>
                <img
                  className="img-fluid rounded"
                  src={`../assets/hats/${product.images[0]}`}
                  alt={`${product.name}`}
                />
              </div>
            </div>
            <div className="col  position-static">
              <div className="productBlock" id="product">
                <h2
                  data-name={`${product.name}`}
                  data-sku={`${product.id}`}
                  data-price={`${product.price}`}
                >
                  {product.name}
                </h2>
                <div>
                  <span id="item-price">
                    <NumberFormat
                      value={product.price}
                      displayType={"text"}
                      prefix={"$"}
                      decimalScale={4}
                    />
                  </span>
                  <AddToCart product={product} />
                </div>
              </div>
              <div className="info_and_returns_container">
                <div className="section">
                  <h4 className="text-capitalize">product info</h4>
                  <p>
                    I'm a product detail. I'm a great place to add more
                    information about your product such as sizing, material,
                    care and cleaning instructions. This is also a great space
                    to write what makes this product special and how your
                    customers can benefit from this item.
                  </p>
                </div>
                <div className="section">
                  <h4 className="text-capitalize">return & refund policy</h4>
                  <p>
                    I’m a Return and Refund policy. I’m a great place to let
                    your customers know what to do in case they are dissatisfied
                    with their purchase. Having a straightforward refund or
                    exchange policy is a great way to build trust and reassure
                    your customers that they can buy with confidence.
                  </p>
                </div>
                <div className="section">
                  <h4 className="text-capitalize">shipping info</h4>
                  <p>
                    I'm a shipping policy. I'm a great place to add more
                    information about your shipping methods, packaging and cost.
                    Providing straightforward information about your shipping
                    policy is a great way to build trust and reassure your
                    customers that they can buy from you with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
