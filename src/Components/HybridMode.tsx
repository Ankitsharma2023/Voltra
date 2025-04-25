import React from "react";
import islandModeImage from "../assets/island-mode.png";
import batteryIcon from "../assets/battery.svg";
import savingsIcon from "../assets/savings.svg";
import settingsIcon from "../assets/settings.svg";
import solutionImage from "../assets/solutions.png";
import hybridVideo from "../assets/hybrid.mp4";
import hybridImage from "../assets/hybrid.png";
import microgridImage from "../assets/microgrid.png";
import waveGraphic from "../assets/wave.png";
import Solutions1 from "../assets/Solutions1.jpg";

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
// HybridModeSection  HybridMode
export default function HybridModeSection() {
  return (
    <main className="flex flex-col w-full gap-4 font-[Akshar]">
    {/* Hero Section */}
    <section className="flex w-full flex-col md:flex-row items-center justify-between bg-white gap-4 text-[Akshar]">
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 p-6 md:p-12 lg:p-24">
        <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#0C33F2]">Hybrid Mode</h2>
        <p className="font-gilroy text-sm sm:text-base">
          Hybrid Mode integrates multiple energy sources like Grid, Solar PV,
          Generators, etc., and helps in enhancing the overall efficiency and
          reliability of the system.
        </p>
        <br />
        <a href="/contact">
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            CONTACT US
          </button>
        </a>
      </div>
  
      <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0 px-4 md:px-0">
        <img
          src={hybridImage}
          alt="Hybrid Mode BESS"
          className="w-full h-auto rounded"
        />
      </div>
    </section>
  
    {/* Features Section */}
    <section className="px-4 sm:px-6 md:px-8 py-8 md:py-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
        <div className="space-y-3 md:space-y-4">
          <img
            src={batteryIcon}
            alt="Maximized Redundancy"
            className="mx-auto w-12 h-12 md:w-16 md:h-16"
          />
          <h3 className="text-lg md:text-xl font-gilroy font-bold text-black-600">
            Maximized Redundancy
          </h3>
          <p className="text-xs md:text-sm lg:text-[14px] font-medium font-gilroy">
            Minimizes the risk of power disruptions by switching sources.
          </p>
        </div>
  
        <div className="space-y-3 md:space-y-4">
          <img
            src={settingsIcon}
            alt="Increased Efficiency"
            className="mx-auto w-12 h-12 md:w-16 md:h-16"
          />
          <h3 className="text-lg md:text-xl font-gilroy font-bold text-black-600">
            Increased Efficiency
          </h3>
          <p className="text-xs md:text-sm lg:text-[14px] font-medium font-gilroy">
            Battery for Solar Inverter: Storing Energy for Peak Efficiency
          </p>
        </div>
  
        <div className="space-y-3 md:space-y-4 sm:col-span-2 md:col-span-1">
          <img
            src={savingsIcon}
            alt="Cost-Savings"
            className="mx-auto w-12 h-12 md:w-16 md:h-16"
          />
          <h3 className="text-lg md:text-xl font-gilroy font-bold text-black-600">Cost-Savings</h3>
          <p className="text-xs md:text-sm lg:text-[14px] font-medium font-gilroy">
            Reduces energy costs and enhances financial performance.
          </p>
        </div>
      </div>
  
      <div className="my-8 md:my-16"></div>
  
      {/* Smart Energy Partner Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-8 md:mt-16">
        <div className="w-full md:w-1/2 px-2">
          <img
            src={Solutions1}
            alt="A Reliable Power Solution"
            className="w-full h-auto rounded"
          />
        </div>
  
        <div className="w-full md:w-[505px] space-y-3 md:space-y-4 leading-[150%] px-2">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium text-[#0C33F2] font-[Akshar]">
            Your Smart Energy Partner
          </h2>
          <br className="hidden md:block" />
          <p className="text-sm md:text-base font-gilroy font-bold">
            With a setup called 'hybrid working,' energy sources like
            generators can be used in combination with Battery Energy Storage
            System, which stores energy in lean hours and provides energy in
            peak hours.
          </p>
          <p className="text-sm md:text-base font-gilroy">
            Imagine you're at a construction site, where work never stops. A
            lot is going on, and the need for electricity changes all the
            time—more in the morning, less at night.
          </p>
          <p className="text-sm md:text-base font-gilroy">
            Hybrid working not only reduces the cost of energy but also makes
            it more reliable and sustainable.
          </p>
          <p className="text-sm md:text-base font-gilroy">
            Here's how it works: When there's a lot of demand for power, like
            in the morning when everyone's starting their day, the ESS kicks
            in. It saves extra electricity to use later, so we don't have to
            rely too much on expensive power from the grid. Then, when it's
            quieter at night and we don't need as much energy, the stored
            power gets used efficiently.
          </p>
  
          <a
            className="flex flex-row items-center gap-2 text-sm md:text-base text-[#00C069] font-bold"
            href={"/products"}
          >
            <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-bold transition-all duration-200">
              View our Products
            </span>
            <ArrowUpRight width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  
    {/* Video Section */}
    <section className="flex flex-col w-full h-full justify-center items-center">
      <video src={hybridVideo} autoPlay={true} controls={false} muted loop className="w-full" />
    </section>
  
    {/* Applications Section */}
    <section className="flex flex-col md:flex-row items-start bg-white font-[Akshar]">
      <div className="w-full md:w-2/5 space-y-4 px-4 sm:px-6 md:px-8 py-8 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-[Akshar] font-medium text-[#0C33F2] ml-0 md:ml-20 lg:ml-40">
          Multiple Applications,<br />One-Stop Solution
        </h2>
        <p className="font-gilroy text-sm md:text-base ml-0 md:ml-20 lg:ml-40">
          Voltra's battery energy storage system is<br className="hidden md:block" />modular, allowing you to
          scale to your needs, and<br className="hidden md:block" />keeping CAPEX low.
        </p>
      </div>
  
      <div className="w-full md:w-3/5 flex flex-row gap-0 p-0 m-0">
        <div className="relative w-1/2 h-48 sm:h-60 md:h-72 lg:h-80">
          <img
            src={islandModeImage}
            alt="Island"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-2 sm:p-4">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">ISLAND</h3>
            <a
              className="flex flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-[14px] text-[#00C069] font-bold"
              href="/solutions/island-mode"
            >
              <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
                Know more
              </span>
              <ArrowUpRight width={16} height={16} className="sm:w-20 sm:h-20 md:w-24 md:h-24" />
            </a>
          </div>
        </div>
  
        <div className="relative w-1/2 h-48 sm:h-60 md:h-72 lg:h-80">
          <img
            src={microgridImage}
            alt="Microgrid"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-2 sm:p-4">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">MICROGRID</h3>
            <a
              className="flex flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-[14px] text-[#00C069] font-bold"
              href="/solutions/microgrid-mode"
            >
              <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
                Know more
              </span>
              <ArrowUpRight width={16} height={16} className="sm:w-20 sm:h-20 md:w-24 md:h-24" />
            </a>
          </div>
        </div>
      </div>
    </section>
  
    {/* CTA Section */}
    <section className="flex flex-col justify-center items-center w-full p-4 md:p-8 relative overflow-hidden my-8">
       <div className="relative bg-[#0C33F2] rounded-lg p-6 md:p-8 text-white overflow-hidden flex flex-col md:flex-row items-center justify-between md:px-12 lg:px-24 w-full md:w-3/4">
         <div className="md:w-2/3 space-y-4 z-10">
           <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
             We offer tailored customization to meet your needs.
           </h2>
           <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
             Share your requirements with us.
           </h2>
           <br />
           <a href="/contact">
             <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow-md hover:bg-gray-100 transition">
               GET IN TOUCH
             </button>
           </a>
         </div>
         <div className="absolute bottom-[-100px] right-[-40px] w-64 hidden md:block">
           <img
             src={waveGraphic}
             alt="Wave Graphic"
             className="w-full h-auto"
           />
         </div>
       </div>
     </section>
  </main>
  );
}