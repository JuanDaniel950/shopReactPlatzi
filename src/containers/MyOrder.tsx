import React from "react";
import OrderItem from "@components/orderItem";
import AppContext from "./../context/AppContext";
import "@styles/MyOrders.scss";
import arrow from "@icons/flechita.svg";
import { useContext } from "react";
import { Product } from "../utils/type";
const MyOrder = () => {
  const { state }: any = useContext(AppContext);
  const totalPrice = state.cart.reduce((acc: number, product: Product) => {
    return acc + product.price;
  }, 0);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product: Product, idx: number) => (
          <OrderItem {...product} key={`orderItem-${product.id}-idx`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${totalPrice}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};
export default MyOrder;
