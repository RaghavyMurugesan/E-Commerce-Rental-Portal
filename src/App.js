import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/Dashboard";
import NotFoundPage from "./Pages/NotFoundPage";
import React, { useState } from "react";
import { productList } from "./data";
import { ProductDetails } from "./components/ProductDetails";
import { AddProduct } from "./Pages/AddProduct";
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
// import { Paper } from "@mui/material";
function App() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(productList);
  // const [mode, setMode] = useState("light");
  // const theme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });
  function addToCart(item) {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  }
  // useEffect(() => {
  //   console.log(cart.length);
  // }, [cart]);

  return (
    // <ThemeProvider theme={theme}>
    //   <Paper style={{ borderRadius: 0, minHeight: "100%" }} elevation={4}>
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product addToCart={addToCart} product={product} setProduct={setProduct} />} />
        <Route
          path="product/:id"
          element={<ProductDetails product={product} setProduct={setProduct} addToCart={addToCart} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product/add" element={<AddProduct product={product} setProduct={setProduct} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route element={<Home />} />
      </Routes>
    </Router>
    //   </Paper>
    // </ThemeProvider>
  );
}

export default App;
