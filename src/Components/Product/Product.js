import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  console.log(props.product);
  return (
    <div>
      <div className="row product">
        <div className="col-md-4">
          <img src={props.product.img} alt="" />
        </div>
        <div className="col-md-8">
          <h3>{props.product.name}</h3>
          <br></br>
          <h5>by {props.product.seller}</h5>
          <br></br>
          <br></br>
          <p>${props.product.price}</p>
          <br />
          <button
            onClick={() => props.handleAddProduct(props.product)}
            className="main-button"
          >
            <FontAwesomeIcon icon={faCartPlus} /> add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
