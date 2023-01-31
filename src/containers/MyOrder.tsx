import React from "react";
import OrderItem from "@components/orderItem";
import AppContext from "./../context/AppContext";
import "@styles/MyOrders.scss";
import arrow from "@icons/flechita.svg";
import { useContext } from "react";
import { Product } from "../utils/type";
const MyOrder = () => {
  const { state }: any = useContext(AppContext);
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product: any) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};
export default MyOrder;
