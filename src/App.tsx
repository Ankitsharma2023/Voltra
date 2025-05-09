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
import IslandModeSection from "./Components/IslandMode";
import MicrogridModeSection from "./Components/MicrogridMode";
import HybridModeSection from "./Components/HybridMode";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="solutions/island-mode" element={<IslandModeSection />} />
        <Route path="solutions/hybrid-mode" element={<HybridModeSection />} />
        <Route
          path="solutions/microgrid-mode"
          element={<MicrogridModeSection />}
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
