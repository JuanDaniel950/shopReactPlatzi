import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "@styles/OrderItem.scss";
import close from "@icons/icon_close.png";
import { Product } from "../utils/type";

const OrderItem = (product: Product) => {
  const { removeFromCart }: any = useContext(AppContext);

  const handleRemove = (product: Product) => {
    removeFromCart(product);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]!} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img
        src={close}
        className="btn-close"
        alt="close"
        onClick={() => handleRemove(product)}
      />
    </div>
  );
};

export default OrderItem;
