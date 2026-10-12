import React from "react";
import HeroSection from "./home/HeroSection";
import Marquee from "./home/Marquee";
import AboutSection from "./home/AboutSection";
import ProductSolutions from "./home/ProductSolutions";
import WhyVoltra from "./home/WhyVoltra";
import MissionStats from "./home/MissionStats";
import FaqCta from "./home/FaqCta";
import Gigafactory from "./home/Gigafactory";
import { BATTERY_SOLUTIONS, INVERTER_SOLUTIONS, HIGH_VOLTAGE_PRODUCTS, ROUTES } from "../constants/site";

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
      <ProductSolutions
        title={BATTERY_SOLUTIONS.title}
        subtitle={BATTERY_SOLUTIONS.subtitle}
        products={BATTERY_SOLUTIONS.products}
        cta={{ label: "View More Batteries", to: ROUTES.lithiumBatteries }}
      />
      <ProductSolutions
        title={INVERTER_SOLUTIONS.title}
        subtitle={INVERTER_SOLUTIONS.subtitle}
        products={INVERTER_SOLUTIONS.products}
        tall
        cta={{ label: "View More Inverters", to: ROUTES.hybridInverters }}
      />
      <ProductSolutions
        title={HIGH_VOLTAGE_PRODUCTS.title}
        subtitle={HIGH_VOLTAGE_PRODUCTS.subtitle}
        products={HIGH_VOLTAGE_PRODUCTS.products}
        cta={{ label: "View More BESS", to: ROUTES.gridBess }}
      />
      <WhyVoltra />
      <MissionStats />
      <FaqCta />
      <Gigafactory />
    </div>
  );
};

export default Home;
