"use client";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "@/redux/slices/cartSlice";

function AddToCart({ product }) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  function addToCartHandler() {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.qty + 1 <= product.count) {
        setQty((prevState) => prevState + 1);
      } else {
        return alert("موجودی محصول به پایان رسیده است!");
      }
    }

    dispatch(addToCart({ ...product, qty }));
  }

  return (
    <button
      onClick={addToCartHandler}
      className="border border-slate-300 text-slate-300 rounded-lg px-3 py-2
                mt-3 hover:bg-slate-800"
    >
      افزودن به سبد خرید
    </button>
  );
}

export default AddToCart;
