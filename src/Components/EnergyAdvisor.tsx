import React from "react";
import EnergyAdvisorHero from "./energyAdvisor/EnergyAdvisorHero";
import ConfiguratorWizard from "./energyAdvisor/ConfiguratorWizard";
import LoadCalculator from "./energyAdvisor/LoadCalculator";
import ProductHub from "./energyAdvisor/ProductHub";
import FaqCta from "./home/FaqCta";

/**
 * EnergyAdvisor — the Energy Advisor page (Figma frame "Energy Advisor",
 * node 62:331). Three tools stacked: a guided configurator, a live load
 * calculator and the product spec hub, closing on the shared FAQ/CTA block.
 * The dark-variant Navbar and Footer render globally in App.tsx.
 */
export default function EnergyAdvisor() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <EnergyAdvisorHero />
      <ConfiguratorWizard />
      <LoadCalculator />
      <ProductHub />
      <FaqCta />
    </div>
  );
}
