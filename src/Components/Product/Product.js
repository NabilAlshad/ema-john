import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  console.log(props.product.key);
  const { img, name, seller, price, key } = props.product;
  return (
    <div>
      <div className="row product">
        <div className="col-md-4">
          <img src={img} alt="" />
        </div>
        <div className="col-md-8">
          <h3>
            <Link to={"/product/" + key}>{name}</Link>
          </h3>
          <br></br>
          <h5>by {seller}</h5>
          <br></br>
          <br></br>
          <p>${price}</p>
          <br />
          {props.showAddCart && (
            <button
              onClick={() => props.handleAddProduct(props.product)}
              className="main-button"
            >
              <FontAwesomeIcon icon={faCartPlus} /> add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
