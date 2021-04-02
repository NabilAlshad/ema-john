import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProduct] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    console.log("clicked", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  console.log(products);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {products.map((product) => (
              <Product
                handleAddProduct={handleAddProduct}
                product={product}
              ></Product>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <h3>order-summary</h3>
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
