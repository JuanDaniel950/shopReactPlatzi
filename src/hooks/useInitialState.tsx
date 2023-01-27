import { useState } from "react";
import { Product } from "../utils/type";

const initialState = {
  cart: [] as Product[],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: Product) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  return {
    state,
    addToCart,
  };
};

export default useInitialState;
