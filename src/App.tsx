import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import { Header } from "./Components/Header";
import React from "react";
import Footer from "./Components/Footer";
import Products from "./Components/Product";
import AboutVoltra from "./Components/About";
import About from "./Components/About";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
