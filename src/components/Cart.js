import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  const total = cart.reduce((total, pd) => total + pd.price, 0);
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 12;
  } else if (total > 5) {
    shipping = 14;
  }
  return (
    <div>
      <h2>order summary:</h2>
      <h5>items ordered:{cart.length}</h5>
      <p>shipping cost{shipping}</p>
      <p>total price:{total + shipping}</p>
    </div>
  );
};

export default Cart;
