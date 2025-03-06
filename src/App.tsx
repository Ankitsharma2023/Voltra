import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import { Header } from "./Components/Header";
import React from "react";
import Footer from "./Components/Footer";
import Products from "./Components/Product";
import About from "./Components/About";
import Solutions from "./Components/Solutions";
import Contact from "./Components/Contact";
import Technology from "./Components/Technology";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

        <Route path="/about" element={<About />} />

        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
