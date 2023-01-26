import React, { useState } from "react";
import addToCart from "@icons/bt_add_to_cart.svg";
import "./../styles/ProductItem.scss";
import type { Product } from "../utils/type";
const ProductItem = (product: Product) => {
  const [cart, SetCart] = useState("");

  const handleClick = () => {
    SetCart("");
  };
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>{product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={addToCart} alt="Icon add to cart" />
        </figure>
        {cart}
      </div>
    </div>
  );
};

export default ProductItem;
