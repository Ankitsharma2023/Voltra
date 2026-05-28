import React, { useState } from "react";
import logo from "../assets/logo.png";
import power from "../assets/power.png";
import Cube from "../assets/Cube.png";
import light from "../assets/light.svg";
import bar from "../assets/bar.svg";
import rd from "../assets/rd.svg";
import intl from "../assets/intelligent.svg";
import robust from "../assets/robust.svg";
import data from "../assets/data.svg";
import gaurd from "../assets/gaurd.svg";
import invesment from "../assets/invesment.png";
import slidebar from "../assets/slidebar.png";
import Adv1 from "../assets/adv1.png";
import Adv2 from "../assets/adv2.png";
import Adv3 from "../assets/adv3.png";
import Adv4 from "../assets/adv4.png";
import Adv5 from "../assets/adv5.png";
import Adv6 from "../assets/adv6.png";
import factory from "../assets/Factory.png";
import {  ChevronDown, ChevronUp } from "lucide-react";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Graph from "./Graph";
import VOLT_100 from "../assets/VOLT_100.png";
import VOLT_215 from "../assets/VOLT_215.png";
import VOLT_HVC from "../assets/VOLT_HVC.png";
import VOLT_HVD from "../assets/VOLT_HVD.png";
import VOLT_LVS from "../assets/VOLT_LVS.png";
import VOLT_LVW from "../assets/VOLT_LVW.png";
import Adva1 from "../assets/Adva1.png";
import Adva2 from "../assets/Adva2.png";
import Adva3 from "../assets/Adva3.png";
import Adva4 from "../assets/Adva4.png";
import Battery from "../assets/Battery.png";
import VOLT_MAX_EDIT from "../assets/VOLT_MAX_EDIT.png";
import VOLT_LINK_EDIT from "../assets/VOLT_LINK_EDIT.png";
import cloud from "../assets/cloud.png";
import Temp from "../assets/Temp.png";
import Hand from "../assets/Hand.png";
import home_back from "../assets/Home_back.png";

import hybrid from "../assets/hybrid.png";
import microgrid from "../assets/microgrid.png";
import islandModeImage from "../assets/island-mode.png";
const Home = () => {
  const [openItem, setOpenItem] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const faqItems = [
    {
      title: "What is a Battery Energy Storage System (BESS)?",
      content:
        "A Battery Energy Storage System (BESS) is a technology that stores energy for later use. It allows energy to be captured during times of low demand or when renewable energy sources like solar or wind are abundant, and then released during peak demand or when renewable energy production is low.",
    },
    {
      title: "How does a BESS work?",
      content:
        "A BESS works by converting electrical energy to chemical energy for storage in batteries. When electricity is needed, the chemical energy is converted back to electrical energy. The system includes batteries, a power conversion system (inverter), and controls to manage charging and discharging cycles efficiently.",
    },
    {
      title: "What are the benefits of using a BESS?",
      content:
        "Benefits include energy cost savings, backup power during outages, grid stability support, peak demand reduction, integration of renewable energy sources, reduced carbon footprint, and potential revenue through energy arbitrage or grid services.",
    },
    {
      title: "What types of batteries are used in a BESS?",
      content:
        "Common battery technologies include lithium-ion (most popular for commercial BESS), lead-acid, flow batteries, sodium-sulfur, and emerging technologies like solid-state batteries. Each type has different characteristics in terms of energy density, cycle life, and cost.",
    },
  ];

  const sections = [
    {
      id: "island",
      width: "35%",
      title: "ISLAND",
      description:
        "In Island Mode our BESS can supply power independently, without any connection to the utility grid. Commonly found in remote areas such as rural towns and mine sites often serve as backup or standby generators to provide electricity during grid failures.",
      link: "solutions/island-mode",
    },
    {
      id: "hybrid",
      width: "30%",
      title: "HYBRID",
      description:
      "Hybrid Mode refers to BESS operating in coordination with both the grid and other energy sources, such as solar PV or wind. Our Energy Storage Systems pair seamlessly with diesel generators for intelligent load management, making it ideal for factories and different challenging environments.",
      link: "solutions/hybrid-mode",
    },
    {
      id: "microgrid",
      width: "30%",
      title: "MICROGRID",
      description:
      "In Microgrid Mode, the BESS operates as part of a controlled, self-contained power system that can connect to or disconnect from the main grid. Microgrids serve as vital solutions for areas lacking reliable access to traditional grid power. Offering localized control, these self-sufficient energy grids operate independently of the larger grid.",
      link: "solutions/microgrid-mode",
    },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  const [year, setYear] = useState(4);

  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed md:bg-local bg-[url(/home_cover.png)] md:bg-[url(/home_cover.png)] sm:bg-[url(/home_back.png)]">
  {/* Rest of your content remains exactly the same */}
  <div className="w-full h-full flex flex-col justify-center items-center bg-black/60 px-4">
    <img 
      width={216} 
      height={96} 
      src={logo} 
      className="w-32 md:w-48" 
      alt="Voltra Logo" 
    />
    <h1 className="text-white text-4xl md:text-6xl lg:text-[64px] font-[Akshar] font-medium text-center mt-4">
      The Future of Energy
    </h1>
    <a href="/contact" className="mt-8">
      <button className="bg-[#0C33F2] py-2 px-6 text-white font-[Akshar] font-normal rounded-md transform transition-transform duration-300 hover:scale-105">
        BOOK A CALL
      </button>
    </a>
  </div>
</section>
      
      {/* Stats Section */}
      <section className="w-full py-12 md:py-20 flex flex-col justify-start items-center bg-white font-[Akshar] px-4">
  <div className="flex flex-col md:flex-row gap-6 w-full justify-center bg-gray-100 p-4 rounded-lg">
    {/* Reliability Section */}
    <div className="flex flex-col w-full justify-center items-center text-[#0C33F2] p-4">
      <button className="border-[#0C33F2] border-2 rounded-md p-2 px-4 text-sm md:text-base mb-4 md:mb-6">
        Reliability
      </button>
      <div className="font-semibold text-6xl md:text-8xl lg:text-[108px]">
        20+ <span className="text-4xl md:text-5xl lg:text-[64px] font-normal">year</span>
      </div>
      <div className="text-black w-full md:w-3/4 font-gilroy text-sm md:text-base text-center mt-4 md:mt-6">
        Technology that last longer with higher reliability and less maintenance.
      </div>
    </div>

    {/* Reduced Footprint Section */}
    <div className="flex flex-col w-full justify-center items-center text-[#00C069] p-4">
      <button className="border-[#00C069] border-2 rounded-md p-2 px-4 text-sm md:text-base mb-4 md:mb-6">
        REDUCED FOOTPRINT
      </button>
      <div className="font-semibold text-6xl md:text-8xl lg:text-[108px]">90%</div>
      <div className="text-black w-full md:w-3/4 font-gilroy text-sm md:text-base text-center mt-4 md:mt-6">
        less CO₂ compared to cells made using coal power by 2030.
      </div>
    </div>

    {/* Capacity Section */}
    <div className="flex flex-col w-full justify-center items-center text-[#0C33F2] p-4">
      <button className="border-[#0C33F2] border-2 rounded-md p-2 px-4 text-sm md:text-base mb-4 md:mb-6">
        CAPACITY
      </button>
      <div className="font-semibold text-6xl md:text-8xl lg:text-[108px]">
        10<span className="text-4xl md:text-5xl lg:text-[64px] font-normal">GWh</span>
      </div>
      <div className="text-black w-full md:w-3/4 font-gilroy text-sm md:text-base text-center mt-4 md:mt-6">
        Voltra's target for lithium-ion cell installed capacity by 2030.
      </div>
    </div>
  </div>
  
  <div className="flex flex-col lg:flex-row w-full justify-around items-center mt-12 md:mt-20 gap-8 px-4">
    <img 
      src={power} 
      alt="Power illustration" 
      className="w-full lg:w-1/2 max-w-[590px] h-auto object-contain"
    />

    <div className="w-full lg:w-1/2 max-w-[509px]">
      <div className="w-full h-full flex flex-col">
        <div className="w-full">
          <h1 className="text-[#0C33F2] font-medium text-3xl md:text-4xl lg:text-[40px]">
            Revolutionizing the Battery Storage Landscape of India
          </h1>
          <br/>
          <div className="font-gilroy text-base md:text-lg text-justify">
            Voltra Energy is revolutionizing India's energy future with
            advanced Battery Energy Storage Systems (BESS) utilizing
            cutting-edge technology and world-class infrastructure.
            Focused on indigenizing BESS solutions for renewable energy
            integration, grid stabilization, and enhanced energy
            reliability, the company serves residential, commercial, and
            industrial sectors. 
          </div>
        </div>
        <a
          reloadDocument
          className="flex flex-row items-center gap-2 text-base md:text-lg text-[#00C069] mt-4"
          href="/products"
        >
          <span className="border-b-2 border-transparent hover:border-[#00C069] transition-all duration-200">
            View our products
          </span>
          <ArrowUpRight width={24} height={24} />
        </a>
      </div>
    </div>
  </div>
</section>
  
      {/* Products Section */}
      <section className="w-full min-h-[626px] flex flex-col justify-around items-center bg-gray-100 font-[Akshar] gap-4 md:gap-8 mt-10 py-8 px-4">
  <div className="flex flex-col lg:flex-row p-2 md:p-4 justify-around w-full items-center gap-6 md:gap-8">
    <div className="flex flex-col w-full lg:w-[540px] gap-2">
      <h1 className="text-[#0C33F2] font-medium text-2xl sm:text-3xl md:text-[40px]">
        INVESTING IN VOLTRA BESS IS MONEY{" "}
        <span className="text-[#00C069]"> IN THE BANK</span>
      </h1>
      <p className="font-gilroy text-sm md:text-base">Calculate your savings and battery life.</p>
      <div className="mt-2 md:mt-4">
        <input
          type="range"
          min="0"
          max="11"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className="w-full appearance-none h-6 md:h-[36px] bg-gray-200 rounded-lg cursor-pointer accent-[#0C33F2]"
          style={{
            WebkitAppearance: "none",
            background: `linear-gradient(to right, #0C33F2 0%, #0C33F2 ${(year / 11) * 100}%, #e5e7eb ${(year / 11) * 100}%, #e5e7eb 100%)`,
            transition: "all 0.3s ease",
          }}
        />
        <div className="flex flex-row w-full justify-between items-center mt-2 font-gilroy text-xs md:text-base">
          <p>1 year </p>
          <div className="text-[#0C33F2] font-medium">
            Year {year + 1}
          </div>
          <p>12 years</p>
        </div>
      </div>
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: url("/icon.svg") no-repeat center;
          background-size: 18px;
          cursor: pointer;
          background-color: white;
          transition: background 0.3s ease;
        }
        
        @media (min-width: 768px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 36px;
            height: 36px;
            background-size: 26.4px;
          }
        }
        
        input[type="range"]:focus::-webkit-slider-thumb {
          background: url("/icon.svg") no-repeat center;
          background-size: 18px;
          background-color: white;
        }
        
        @media (min-width: 768px) {
          input[type="range"]:focus::-webkit-slider-thumb {
            background-size: 26.4px;
          }
        }
        
        /* Firefox */
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: url("/icon.svg") no-repeat center;
          background-size: 18px;
          background-color: white;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        @media (min-width: 768px) {
          input[type="range"]::-moz-range-thumb {
            width: 36px;
            height: 36px;
            background-size: 26.4px;
          }
        }
        
        input[type="range"]:focus::-moz-range-thumb {
          background: url("/icon.svg") no-repeat center;
          background-size: 18px;
          background-color: white;
        }
        
        @media (min-width: 768px) {
          input[type="range"]:focus::-moz-range-thumb {
            background-size: 26.4px;
          }
        }
      `}</style>
      <div className="flex flex-row gap-4 justify-around mt-4">
        <div className="flex flex-col">
          <div className="text-xl sm:text-2xl md:text-[36px] text-[#00C069] font-semibold">
            90%
          </div>
          <div className="text-xs md:text-[14px] font-gilroy">Annual savings</div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl sm:text-2xl md:text-[36px] text-[#00C069] font-semibold">
            20+ years
          </div>
          <div className="text-xs md:text-[14px] font-gilroy">Life Span</div>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-auto mt-6 lg:mt-0 flex justify-center">
      <Graph year={year} />
    </div>
  </div>
</section>
      
      {/* Hover Sections */}



      <section className="w-full h-auto md:h-screen flex flex-col md:flex-row font-[Akshar] bg-white md:bg-[url(/factory.png)] md:bg-cover">
  {sections.map((section, index) => {
    let sectionImage;
    switch(section.id.toUpperCase()) {
      case "HYBRID":
        sectionImage = hybrid;
        break;
      case "ISLAND":
        sectionImage = islandModeImage;
        break;
      default:
        sectionImage = microgrid;
    }

    return (
      <div
        key={section.id}
        className={`w-[90%] mx-auto my-2 md:my-0 md:w-1/3 flex flex-col border-b md:border-b-0 md:border-r ${
          index < sections.length - 1 ? "border-white" : ""
        } h-96 md:h-full md:bg-black/20 md:hover:bg-black/50 justify-end items-end p-0 transition-all duration-300 ease-in-out md:rounded-none rounded-xl overflow-hidden cursor-pointer`}
        onMouseEnter={() => setHoveredSection(section.id)}
        onMouseLeave={() => setHoveredSection(null)}
        onClick={() => window.location.href = section.link}
      >
        {/* Mobile layout with image overlay */}
        <div className="md:hidden relative w-full h-full transition-all duration-500 ease-in-out hover:scale-105">
          <img
            src={sectionImage}
            alt={section.title}
            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent flex flex-col items-start justify-end p-4 transition-all duration-300 ease-in-out hover:bg-black/40">
            <div className="flex flex-col w-full">
              <h1 className="text-white text-3xl font-medium mb-2 font-[Akshar] uppercase">
                {section.id}
              </h1>
              <p className="text-white text-sm mb-4 line-clamp-3 font-gilroy">
                {section.description}
              </p>
              <a
                className="flex flex-row items-center gap-2 text-[#00C069] font-semibold"
                href={section.link}
                onClick={(e) => e.stopPropagation()} // Prevent double triggering
              >
                <span className="border-b-2 border-transparent hover:border-[#00C069] transition-all duration-200">
                  Know more?
                </span>
                <ArrowUpRight width={20} height={20} className="text-[#00C069]" />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop layout (unchanged) */}
        <div
          className={`hidden md:flex flex-col text-white w-full md:w-3/4 justify-center p-4 gap-2 transition-transform duration-500 ease-in-out ${
            hoveredSection === section.id ? "transform -translate-y-8" : ""
          }`}
        >
          <h1 className="text-2xl md:text-4xl">{section.title}</h1>
          <p
            className={`text-sm md:text-base font-gilroy transition-all duration-500 ease-in-out ${
              hoveredSection === section.id
                ? "top-1/2 opacity-100 translate-y-0"
                : "top-0 opacity-0 translate-y-4 hidden"
            }`}
          >
            {section.description}
          </p>
          <a
            className={`flex flex-row items-start gap-2 text-sm md:text-base text-[#00C069] transition-opacity duration-300 ${
              hoveredSection === section.id ? "opacity-100" : "opacity-70"
            }`}
            href={section.link}
            onClick={(e) => e.stopPropagation()} // Prevent double triggering
          >
            <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
              Know more
            </span>
            <ArrowUpRight width={24} height={24} />
          </a>
        </div>
      </div>
    );
  })}
</section>
  
      {/* Advantage Section */}
      <section className="w-full py-12 md:py-20 flex flex-col justify-start items-center bg-white font-[Akshar] px-4">
  <h2 className="text-3xl md:text-4xl font-medium text-[#0C33F2] mb-8 md:mb-12 text-center">
    The Voltra Advantage
  </h2>

  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
  {/* Card 1: Modular BESS */}
  <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg">
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="leading-tight mb-4">
          <h3 className="hidden md:block text-4xl font-medium text-[#0C33F2] m-0 p-0">
            Modular
          </h3>
          <h3 className="hidden md:block text-4xl font-medium text-[#0C33F2] m-0 p-0">
            BESS
          </h3>
          <h3 className="block md:hidden text-3xl font-medium text-[#0C33F2] m-0 p-0 font-[Akshar]">
            Modular BESS
          </h3>
        </div>
        <p className="text-base mb-3 font-gilroy">
          Voltra's Modular Cabinet configurations enable seamless scaling from kWh to MWh systems.
        </p>
        <p className="text-base font-gilroy">
          These solutions offer superior efficiency and reliability, easy maintenance, and longer battery life.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src={Adva1}
          alt="Modular BESS system"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>

    {/* Card 2: Thermal Management */}
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg">
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="leading-tight mb-4">
          <h3 className="text-3xl md:text-4xl font-medium text-[#0C33F2] m-0 p-0">
            Thermal Management
          </h3>
          {/* <h3 className="text-2xl md:text-4xl font-medium text-[#0C33F2] m-0 p-0">
            Management
          </h3> */}
        </div>
        <p className="text-base mb-3 font-gilroy">
          Our technology is designed for the Indian climate, both for air and liquid cooling systems.
        </p>
        <p className="text-base font-gilroy">
          Our uniform heat dissipation technology ensures efficient performance and prolongs battery life.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src={Adva2}
          alt="Thermal management system"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>

   {/* Card 3: Intelligent Communication */}
<div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg">
  <div className="md:w-1/2 flex flex-col justify-center">
    <div className="leading-tight mb-4">
      <h3 className="hidden md:block text-4xl font-medium text-[#0C33F2] m-0 p-0">
        Intelligent
      </h3>
      <h3 className="hidden md:block text-4xl font-medium text-[#0C33F2] m-0 p-0">
        Communication
      </h3>
      <h3 className="block md:hidden text-2xl font-medium text-[#0C33F2] m-0 p-0 font-[Akshar]">
        Intelligent Communication
      </h3>
    </div>
    <p className="text-base mb-3 font-gilroy">
      We have implemented intelligent communication between the DC and AC using AI technology.
    </p>
    <p className="text-base font-gilroy">
      This helps in enhancing system robustness and reliability and enables fault detection.
    </p>
  </div>
  <div className="md:w-1/2">
    <img
      src={Adva3}
      alt="Intelligent communication system"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>


    {/* Card 4: Long Service Life */}
 {/* Card: Long Service Life */}
<div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg">
  <div className="md:w-1/2 flex flex-col justify-center">
    <div className="leading-tight mb-4">
      <h3 className="hidden md:block text-4xl font-medium text-[#0C33F2] m-0 p-0">
        Long
      </h3>
      <h3 className="hidden md:block text-4xl font-medium text-[#0C33F2] m-0 p-0">
        Service Life
      </h3>
      <h3 className="block md:hidden text-3xl font-medium text-[#0C33F2] m-0 p-0 font-[Akshar]">
        Long Service Life
      </h3>
    </div>
    <p className="text-base mb-3 font-gilroy">
      We have benchmarked battery cells based on components like cathodes, anodes, and electrolytes.
    </p>
    <p className="text-base font-gilroy">
      This helps us in achieving lower degradation rates and extended battery life.
    </p>
  </div>
  <div className="md:w-1/2">
    <img
      src={Adva4}
      alt="Long service life battery"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>

  </div>
</section>
  
      {/* GigaFactory Section */}
      <section className="w-full max-w-screen-2xl mx-auto py-0 lg:py-16 bg-white font-[Akshar]">
  <div className="flex flex-col lg:flex-row w-full items-center">
    {/* Image container - full width on mobile with no margins and increased height */}
    <div className="w-full lg:w-3/5 h-full px-0">
      <img 
        className="w-full h-[300px] md:h-[350px] lg:h-auto object-cover object-center" 
        src={factory} 
        alt="Voltra GigaFactory" 
      />
    </div>
    
    {/* Content container */}
    <div className="flex flex-col gap-4 w-full lg:w-2/5 px-6 lg:px-8 mt-6 lg:mt-0">
      <div>
        <h1 className="text-[#0C33F2] text-2xl md:text-3xl lg:text-[40px] font-medium">
          The Voltra GigaFactory
        </h1>
        <div className="text-black text-sm lg:text-base mt-4 lg:mt-5 font-gilroy text-justify">
          An advanced manufacturing facility focused on producing cutting-edge electric vehicle (EV) batteries and energy storage solutions. Located in a strategic area to support sustainable energy and transportation innovations, the factory aims to significantly reduce the cost of battery production while increasing efficiency and performance.
        </div>
        <div className="text-black text-sm lg:text-base mt-4 lg:mt-5 font-gilroy text-justify">
          Voltra's commitment to green energy solutions makes it a key player in the shift toward a more sustainable, carbon-neutral future.
        </div>
      </div>
      
      {/* Features grid - 2x2 on mobile, same on desktop */}
      <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-6 lg:mt-8">
        <div className="flex flex-col items-center text-center">
          <img src={robust} className="w-10 h-10 lg:w-12 lg:h-12" alt="Robust Testing Icon" />
          <h2 className="text-black font-semibold text-base lg:text-lg mt-2 lg:mt-3">
            Robust Testing
          </h2>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <img src={data} className="w-10 h-10 lg:w-12 lg:h-12" alt="Data Integration Icon" />
          <h2 className="text-black font-semibold text-base lg:text-lg mt-2 lg:mt-3">
            Data Integration
          </h2>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <img src={intl} className="w-10 h-10 lg:w-12 lg:h-12" alt="Intelligent Production Icon" />
          <h2 className="text-black font-semibold text-base lg:text-lg mt-2 lg:mt-3">
            Intelligent Production
          </h2>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <img src={rd} className="w-10 h-10 lg:w-12 lg:h-12" alt="R&D Lab Icon" />
          <h2 className="text-black font-semibold text-base lg:text-lg mt-2 lg:mt-3">
            R&D Lab
          </h2>
        </div>
      </div>
      
      {/* Link - adjusted for mobile */}
      <div className="mt-6 lg:mt-8">
        <a
          className="inline-flex items-center gap-2 text-[#00C069] font-bold text-base lg:text-lg"
          href="/technology"
        >
          <span className="border-b-2 border-transparent hover:border-[#00C069] transition-all duration-200">
            Explore the GigaFactory
          </span>
          <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </a>
      </div>
    </div>
  </div>
</section>

  
      {/* FAQ Section */}
      <section className="w-full py-12 md:py-20 flex flex-col justify-start items-center bg-white font-[Akshar] px-4">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl justify-between items-center gap-8"> 
          {/* Left Text Section */}
          <div className="flex flex-col p-4 gap-4 w-full lg:w-2/5"> 
            <h1 className="text-[#0C33F2] text-3xl md:text-4xl font-medium"> 
              KNOW ABOUT BESS
            </h1> 
            <p className="mb-4 text-gray-700 font-bold">Have any more queries?</p> 
            <a href="/contact" className="w-fit"> 
              <button className="bg-[#0C33F2] py-2 px-6 text-white font-normal rounded-lg"> 
                Contact Us 
              </button> 
            </a> 
          </div> 
   
          {/* Right FAQ Section */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 w-full lg:w-3/5 max-h-[500px] overflow-y-auto font-gilroy"> 
            {faqItems.map((item, index) => ( 
              <article key={index} className="border-b border-gray-200 py-4"> 
                <header> 
                  <button 
                    className="flex w-full justify-between items-center text-left focus:outline-none" 
                    onClick={() => toggleItem(index)} 
                    aria-expanded={openItem === index} 
                    aria-controls={`faq-content-${index}`} 
                  > 
                    <h3 className="text-base md:text-lg font-medium text-gray-900"> 
                      {item.title} 
                    </h3> 
                    {openItem === index ? ( 
                      <ChevronUp className="h-5 w-5 text-gray-500" /> 
                    ) : ( 
                      <ChevronDown className="h-5 w-5 text-gray-500" /> 
                    )} 
                  </button> 
                </header> 
                <div 
                  id={`faq-content-${index}`} 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${ 
                    openItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0" 
                  }`} 
                > 
                  <div className="mt-2 text-sm md:text-base text-gray-600 py-2"> 
                    <p>{item.content}</p> 
                  </div> 
                </div> 
              </article> 
            ))} 
          </div> 
        </div> 
      </section>
    </main>
  );
};

export default Home;
