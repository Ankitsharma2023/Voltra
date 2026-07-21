import React from "react";
import AboutHero from "./about/AboutHero";
import StatsRow from "./about/StatsRow";
import MissionSection from "./about/MissionSection";
import WhoWeServe from "./about/WhoWeServe";

/**
 * About — the redesigned About page (Figma frame "About", node 1:612).
 * Composition only; Navbar (dark header variant) and Footer render globally
 * in App.tsx. Copy/assets/tokens live in constants + design/tokens.
 */
export default function About() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <AboutHero />
      <StatsRow />
      <MissionSection />
      <WhoWeServe />
    </div>
  );
}
