import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { img, name, price, seller } = props.product;
  // console.log(name);

  return (
    <div className="products">
      <div className="products-img">
        {" "}
        <img src={img} alt="" />
      </div>
      <div className="product-name">
        <h2>{name}</h2>
        <h5>by {seller}</h5>
        <p>
          <small> ${price}</small>
        </p>
        <button
          onClick={() => props.handleAddProduct(props.product)}
          className="cart-button"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
