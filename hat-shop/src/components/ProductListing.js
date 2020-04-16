import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const ProductListing = props => {
  let product = props.product;
  return (
    <div>
      <Link
        to={`/items/${product.id}`}
        className="card position-static text-decoration-none text-center"
        style={{ width: "14rem", border: "none", color: "black" }}
      >
        <img
          src={`../assets/hats/${product.images[0]}`}
          alt={`${product.name}`}
          className="card-img-top"
          onMouseOver={e => {
            let image = `../assets/hats/${product.images[1]}`;
            e.currentTarget.src = image;
          }}
          onMouseOut={e => {
            let image = `../assets/hats/${product.images[0]}`;
            e.currentTarget.src = image;
          }}
        />
        <div className="card-body">
          <p className="card-text">{product.name}</p>
          <p className="card-text" style={{ padding: "1vh" }}>
            <NumberFormat
              value={product.price}
              displayType={"text"}
              prefix={"$"}
              decimalScale={4}
            />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductListing;
