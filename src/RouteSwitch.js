import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import App from "./App";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import data from "./data";

export default function RouteSwitch() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;

  let total = 0;
  let cartLength = 0;

  for (let item of cartItems) {
    total += item.price * item.qty;
  }
  for (let item of cartItems) {
    cartLength += item.qty;
  }

  function onAdd(product) {
    const exist = cartItems.find((x) => x.id === product.id);
    let desiredQty;
    if (document.querySelectorAll("input[type='number']")) {
      for (let input of document.querySelectorAll("input[type='number']")) {
        if (input.id == product.id) {
          desiredQty = parseInt(input.value);
          input.value = "";
        }
      }
    }
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id == product.id
            ? {
                ...exist,
                qty: exist.qty + (desiredQty || 1),
              }
            : x
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          qty: desiredQty || 1,
        },
      ]);
    }
  }

  function onRemove(product) {
    const exist = cartItems.find((x) => x.id == product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id == product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  function onCheckout() {
    alert(
      `Invoice: ${cartItems.map(
        (item) => `\n${item.name} - $${item.price} x ${item.qty}`
      )}\nTotal: $${total.toFixed(2)}`
    );
    setCartItems([]);
  }

  return (
    <BrowserRouter>
      <Header cartLength={cartLength} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/products"
          element={<Main products={products} onAdd={onAdd} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onCheckout={onCheckout}
              total={total}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
