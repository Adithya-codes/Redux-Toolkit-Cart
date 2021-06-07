import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "./Redux/cartSlice";
import { useState, useEffect } from "react";

const cartList = () => {
  const cartItems = useSelector((state) => state.cart?.cartItems);

  const [cartTotal, setCartTotal] = useState(null);

  console.log(cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    cartItems.map((item) => {
      var cartTotal = 0;
      cartTotal = +item.price;
      return setCartTotal(cartTotal);
    });
  }, [cartItems]);

  return (
    <div>
      {cartItems.map((item) => (
        <>
          <h1 key={item.id}> {item.title} </h1>
          <button onClick={() => dispatch(deleteItem(item.id))}>
            {" "}
            delete{" "}
          </button>
        </>
      ))}

      <h1>Items:{cartItems.length}</h1>

      <h1>CartTotal:{cartItems.reduce((a, c) => a + c.price, 0)}</h1>
    </div>
  );
};

export default cartList;
