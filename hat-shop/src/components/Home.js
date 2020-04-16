import React from "react";
import ProductListing from "./ProductListing";

import "./Home.css";
import data from "../assets/product.json";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: data,
    });
  }

  render() {
    const products = this.state.products.filter(
      (items) => items.newArrival === true
    );
    let productList;

    if (!products) {
      productList = "There are no products on record";
    } else {
      productList = products.map((product, k) => (
        <ProductListing product={product} key={k} />
      ));
    }

    return (
      <div className="closed-menus" id="main-container">
        <section>
          <div className="intro">
            <div className="text-area">
              <h1 className="text-uppercase">
                always be <br /> original
              </h1>
              <p className="text-uppercase">new arrivals are here</p>
              <a href="/shop">Shop Now</a>
            </div>
          </div>
          <div className="product">
            <h2 className="text-uppercase text-center">
              limited edition collection
            </h2>
            <div className="product-items container p-4">
              <div className="d-flex flex-wrap justify-content-around align-content-around">
                {productList}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
