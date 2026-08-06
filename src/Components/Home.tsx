import React from "react";
import HeroSection from "./home/HeroSection";
import Marquee from "./home/Marquee";
import AboutSection from "./home/AboutSection";
import ProductSolutions from "./home/ProductSolutions";
import OfferingsCarousel from "./home/OfferingsCarousel";
import WhyVoltra from "./home/WhyVoltra";
import MissionStats from "./home/MissionStats";
import FaqCta from "./home/FaqCta";
import Gigafactory from "./home/Gigafactory";
import { BATTERY_SOLUTIONS, INVERTER_SOLUTIONS } from "../constants/site";

/**
 * Home — the redesigned Voltra landing page. Purely a composition of section
 * components; all copy/assets/tokens live in constants + design/tokens.
 * (Navbar and Footer are rendered globally in App.tsx.)
 */
const Home = () => {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ProductSolutions title={BATTERY_SOLUTIONS.title} products={BATTERY_SOLUTIONS.products} />
      <OfferingsCarousel />
      <ProductSolutions title={INVERTER_SOLUTIONS.title} products={INVERTER_SOLUTIONS.products} tall />
      <WhyVoltra />
      <MissionStats />
      <FaqCta />
      <Gigafactory />
    </div>
  );
};

export default Home;
