import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import { Header } from "./Components/Header";
import React from "react";
import Footer from "./Components/Footer";
import Products from "./Components/Product";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
