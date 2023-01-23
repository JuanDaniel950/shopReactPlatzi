import React, { useState } from "react";
import addToCart from "@icons/bt_add_to_cart.svg"
import "./../styles/ProductItem.scss"
const ProductItem = () => {

    const [cart, SetCart] = useState('');

    const handleClick = () => {

        SetCart("Hola Mundo");
    }
    return (
        <div className="ProductItem">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Product" />
            <div className="product-info" >
                <div>
                    <p>$120.00</p>
                    <p>Bike</p>
                </div>
                <figure onClick={handleClick}>
                    <img
                        src={addToCart}
                        alt="Icon add to cart"
                    />
                </figure>
                {cart}
            </div>
        </div>
    );
}

export default ProductItem;