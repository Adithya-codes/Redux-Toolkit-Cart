import React from "react";
import { items } from "./helpers";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./Redux/cartSlice";

const itemList = () => {
  console.log(items);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.cartItems);

  console.log(cartItems);

  return (
    <div className="container">
      <div className="items-container">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <h1> {item.title} </h1>
            <h2> {item.price} </h2>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    title: item.title,
                    id: item.id,
                    price: item.price
                  })
                )
              }
            >
              {" "}
              Add{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default itemList;
