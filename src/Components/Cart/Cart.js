import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, pd) => total + pd.price, 0);
  let shipping = 0;
  if (total > 0) {
    shipping = 12.99;
  } else if (total > 12.0) {
    shipping = 5.0;
  } else if (total > 32.0) {
    shipping = 0;
  }
  const tax = total * 0.1;

  return (
    <div>
      <h5>item ordered:{cart.length}</h5>

      <h6>Shipping cost+vat:${shipping + tax}</h6>
      <h5>total price:${total + +tax + shipping}</h5>
    </div>
  );
};

export default Cart;
