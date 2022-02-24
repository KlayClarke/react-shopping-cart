import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Cart from "./Components/Cart";
import Header from "./Components/Header";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
