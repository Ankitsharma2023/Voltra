import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import React from "react";
import Navbar from "./Components/home/Navbar";
import SiteFooter from "./Components/home/SiteFooter";
import ScrollToTop from "./Components/ScrollToTop";
import Products from "./Components/Product";
import About from "./Components/About";
import HybridInverters from "./Components/HybridInverters";
import LithiumBatteries from "./Components/LithiumBatteries";
import GridScaleBess from "./Components/GridScaleBess";
import EnergyAdvisor from "./Components/EnergyAdvisor";
import Blog from "./Components/Blog";
import Solutions from "./Components/Solutions";
import Contact from "./Components/Contact";
import Technology from "./Components/Technology";
import IslandModeSection from "./Components/IslandMode";
import MicrogridModeSection from "./Components/MicrogridMode";
import HybridModeSection from "./Components/HybridMode";

function App() {
  return (
    // Page-wash gradient is the shared canvas for the nav + all transparent
    // sections; the font-sans default resolves to the Helvetica Neue stack.
    <div className="flex min-h-screen flex-col bg-page-wash font-sans text-navy">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/hybrid-inverters" element={<HybridInverters />} />
          <Route path="/lithium-batteries" element={<LithiumBatteries />} />
          <Route path="/grid-scale-bess" element={<GridScaleBess />} />
          <Route path="/energy-advisor" element={<EnergyAdvisor />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="solutions/island-mode" element={<IslandModeSection />} />
          <Route path="solutions/hybrid-mode" element={<HybridModeSection />} />
          <Route path="solutions/microgrid-mode" element={<MicrogridModeSection />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
export default App;
