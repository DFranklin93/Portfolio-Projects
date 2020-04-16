import React from "react";
import ProductList from "./ProductListing";

import data from "../assets/product.json";

export default class Shop extends React.Component {
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
    const newProducts = this.state.products.filter(
      (items) => items.newArrival === true
    );
    const oldProducts = this.state.products.filter(
      (items) => items.newArrival === false
    );
    let newProductList, oldProductList;

    if (!newProducts && !oldProducts) {
      newProductList = "There are no products on record";
      oldProductList = "There are no products on record";
    } else {
      newProductList = newProducts.map((product, k) => (
        <ProductList product={product} key={k} />
      ));
      oldProductList = oldProducts.map((product, k) => (
        <ProductList product={product} key={k} />
      ));
    }
    return (
      <div className="closed-menus" id="main-container">
        <section>
          <div
            className="product-items container"
            style={{ paddingTop: "16vh" }}
          >
            <h1
              className="text-center text-uppercase"
              style={{ fontSize: "2vw", paddingBottom: "6vh" }}
            >
              New Arrivals
            </h1>
            <div className="d-flex flex-wrap justify-content-around align-content-around">
              {newProductList}
            </div>
          </div>
          <div
            className="product-items container"
            style={{ paddingTop: "4vh" }}
          >
            <h1
              className="text-center text-uppercase"
              style={{ fontSize: "2vw", paddingBottom: "6vh" }}
            >
              Shop all
            </h1>
            <div className="d-flex flex-wrap justify-content-around align-content-around">
              {oldProductList}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
