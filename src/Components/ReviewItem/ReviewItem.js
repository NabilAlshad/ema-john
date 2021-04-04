import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, quantity, key } = props.product;
  return (
    <div className="review-item">
      <h3>{name}</h3>
      <h4>Quantity: {quantity}</h4>
      <button
        onClick={() => props.handleRemoveProduct(key)}
        className="main-button"
      >
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
