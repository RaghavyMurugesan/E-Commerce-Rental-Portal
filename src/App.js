import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import { React, useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  }
  // useEffect(() => {
  //   console.log(cart.length);
  // }, [cart]);

  return (
    <>
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
