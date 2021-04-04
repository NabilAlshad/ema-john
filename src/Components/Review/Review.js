import React from "react";
import { useState, useEffect } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import happyImage from "../../images/giphy.gif";
const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlace, setOrderPlace] = useState(false);
  const handleRemoveProduct = (productKey) => {
    console.log("clicked", productKey);
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  const handlePlaceOrder = () => {
    console.log("order placed");
    setCart([]);
    setOrderPlace(true);
    processOrder();
  };
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);

      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  let thankYou;
  if (orderPlace) {
    thankYou = <img src={happyImage} alt="" />;
  }

  return (
    <div className="review-item container d-flex ">
      <div className="col-md-8 p-3 ">
        {cart.map((pd) => (
          <ReviewItem
            handleRemoveProduct={handleRemoveProduct}
            key={pd.key}
            product={pd}
          ></ReviewItem>
        ))}
        {thankYou}
      </div>
      <div className="col-md-4 p-3">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="main-button">
            place order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
