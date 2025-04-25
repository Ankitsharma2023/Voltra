import React from "react";
import islandModeImage from "../assets/island-mode.png";
import reliabilityIcon from "../assets/reliability.svg";
import resilienceIcon from "../assets/resilience.svg";
import stabilityIcon from "../assets/stability.svg";
// import solutionImage from "../assets/solutions.png";
import islandVideo from "../assets/island.mp4";
import hybridImage from "../assets/hybrid.png";
import microgridImage from "../assets/microgrid.png";
import waveGraphic from "../assets/wave.png";
import Solutions1 from "../assets/Solutions1.jpg";

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function IslandModeSection() {
  return (
    <main className="flex flex-col w-full font-[Akshar]">
    {/* Hero Section */}
    <section className="flex w-full flex-col md:flex-row items-center justify-between bg-white gap-4 text-[Akshar]">
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 p-6 md:p-12 lg:p-24">
        <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#0C33F2]">Island Mode</h2>
        <p className="font-gilroy text-sm md:text-[16px]">
          Island BESS are commonly found in remote areas such as rural towns
          and mine sites, where access to the utility grid is limited. Island
          micro grids connected with BESS often serve as backup or standby
          generators to provide electricity during grid failures.
        </p>
        <div className="pt-4">
          <a href="/contact">
            <button className="px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              CONTACT US
            </button>
          </a>
        </div>
      </div>
  
      <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0 px-4 md:px-0">
        <img
          src={islandModeImage}
          alt="Island Mode BESS"
          className="w-full h-auto rounded"
        />
      </div>
    </section>
  
    {/* Features Section */}
    <section className="px-4 sm:px-6 md:px-8 py-8 md:py-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-3 md:space-y-4">
          <img
            src={reliabilityIcon}
            alt="Reliability Boost"
            className="mx-auto w-12 h-12 md:w-16 md:h-16"
          />
          <h3 className="text-lg md:text-xl font-gilroy font-bold text-black-600">
            Reliability Boost
          </h3>
          <p className="text-xs md:text-[14px] font-medium font-gilroy m-0">
            India's BESS: Ensuring Uninterrupted power Supply During Grid Failures.
          </p>
        </div>
  
        <div className="space-y-3 md:space-y-4">
          <img
            src={resilienceIcon}
            alt="Enhanced Resilience"
            className="mx-auto w-12 h-12 md:w-16 md:h-16"
          />
          <h3 className="text-lg md:text-xl font-gilroy font-bold text-black-600">
            Enhanced Resilience
          </h3>
          <p className="text-xs md:text-[14px] font-gilroy">
            Back-up power for outages and disasters.
          </p>
        </div>
  
        <div className="space-y-3 md:space-y-4 sm:col-span-2 md:col-span-1">
          <img
            src={stabilityIcon}
            alt="Improved Stability"
            className="mx-auto w-12 h-12 md:w-16 md:h-16"
          />
          <h3 className="text-lg md:text-xl font-gilroy font-bold text-black-600">
            Improved Stability
          </h3>
          <p className="text-xs md:text-[14px] font-gilroy">
            Optimal power quality and reduced voltage/frequency deviations.
          </p>
        </div>
      </div>
  
      {/* Reliable Power Solution Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-16">
        <div className="w-full md:w-1/2 px-2 md:px-0">
          <img
            src={Solutions1}
            alt="A Reliable Power Solution"
            className="w-full h-auto rounded"
          />
        </div>
  
        <div className="w-full md:w-[505px] space-y-3 md:space-y-4 leading-[150%] px-2 md:px-0 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] font-[Akshar]">
            A Reliable Power Solution
          </h2>
          <div className="pt-2 md:pt-4"></div>
          <p className="text-sm md:text-[16px] font-gilroy font-bold">
            As the name suggests, Island Mode allows you to generate and use
            energy independently. Although it also has the flexibility to stay
            connected with the grid for benefits like net metering.
          </p>
          <p className="text-sm md:text-[16px] font-gilroy">
            Energy Storage System-connected Island Mode energy stations are
            more reliable as Excess energy can be stored in BESS and used
            anytime and anywhere.
          </p>
          <p className="text-sm md:text-[16px] font-gilroy">
            Despite its name, islanding doesn't disconnect your home from the
            grid entirely. Instead, it allows you to stay connected for
            benefits like net metering.
          </p>
          <p className="text-sm md:text-[16px] font-gilroy">
            Even with solar and storage installed, your home maintains this
            connection, ensuring you can still draw power from the grid when
            needed, such as during the night when solar panels aren't
            producing.
          </p>
  
          <a
            className="flex flex-row items-center gap-2 text-sm md:text-[16px] text-[#00C069] font-bold mt-4"
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
    <section className="flex flex-col w-full justify-center items-center">
      <video 
        src={islandVideo} 
        autoPlay={true} 
        controls={false} 
        muted 
        loop
        className="w-full" 
      />
    </section>
  
    {/* Applications Section */}
    <section className="flex flex-col md:flex-row items-start bg-white font-[Akshar]">
      <div className="w-full md:w-2/5 space-y-4 px-4 py-8 md:px-8 md:py-16">
        <h2 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] ml-0 sm:ml-8 md:ml-40">
          Multiple Applications,<br />One-Stop Solution
        </h2>
        <p className="font-gilroy text-sm md:text-base ml-0 sm:ml-8 md:ml-40">
          Voltra's battery energy storage system is<br className="hidden sm:block" />modular, allowing you to
          scale to your needs, and<br className="hidden sm:block" />keeping CAPEX low.
        </p>
      </div>
  
      <div className="w-full md:w-3/5 flex flex-row gap-0 p-0 m-0">
        <div className="relative w-1/2 h-56 sm:h-64 md:h-80">
          <img
            src={hybridImage}
            alt="Hybrid"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-2 sm:p-4">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-2">HYBRID</h3>
            <a
              className="flex flex-row items-center gap-1 md:gap-2 text-xs md:text-[14px] text-[#00C069] font-bold"
              href="/solutions/hybrid-mode"
            >
              <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
                Know more
              </span>
              <ArrowUpRight width={16} height={16} className="md:w-6 md:h-6" />
            </a>
          </div>
        </div>
  
        <div className="relative w-1/2 h-56 sm:h-64 md:h-80">
          <img
            src={microgridImage}
            alt="Microgrid"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-2 sm:p-4">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-2">MICROGRID</h3>
            <a
              className="flex flex-row items-center gap-1 md:gap-2 text-xs md:text-[14px] text-[#00C069] font-bold"
              href="/solutions/microgrid-mode"
            >
              <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
                Know more
              </span>
              <ArrowUpRight width={16} height={16} className="md:w-6 md:h-6" />
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
