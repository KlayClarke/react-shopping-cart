import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import data from "./data";

export default function RouteSwitch() {
  const { products } = data;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Main products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
