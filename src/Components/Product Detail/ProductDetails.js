import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetails = () => {
  const { productKey } = useParams();
  console.log(productKey);
  const product = fakeData.find((pd) => pd.key === productKey);
  console.log(product);
  return (
    <div>
      <Product showAddCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetails;
