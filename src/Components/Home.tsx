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
import VOLT_MAX from "../assets/VOLT_MAX.png";
import VOLT_LINK from "../assets/VOLT_LINK.png";
import cloud from "../assets/cloud.png";
import Temp from "../assets/Temp.png";
import Hand from "../assets/Hand.png";
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
        "Voltra's Battery Energy Storage Systems are super efficient in island mode, which ensures a reliable stand-alone power solution that works even during disconnection from the grid. Discover how homes and businesses stay powered up when the grid goes down. unlock the secrets of Island Mode.",
      link: "solutions/island-mode",
    },
    {
      id: "hybrid",
      width: "30%",
      title: "HYBRID",
      description:
        "Voltra's Battery Energy Storage Systems are super efficient in island mode, which ensures a reliable stand-alone power solution that works even during disconnection from the grid. Discover how homes and businesses stay powered up when the grid goes down. unlock the secrets of Island Mode.",
      link: "solutions/hybrid-mode",
    },
    {
      id: "microgrid",
      width: "30%",
      title: "MICROGRID",
      description:
        "Voltra's Battery Energy Storage Systems are super efficient in island mode, which ensures a reliable stand-alone power solution that works even during disconnection from the grid. Discover how homes and businesses stay powered up when the grid goes down. unlock the secrets of Island Mode.",
      link: "solutions/microgrid-mode",
    },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  const [year, setYear] = useState(4);

  return (
    <main className="flex flex-col w-full overflow-x-hidden">


      <section className="w-full h-screen flex flex-col justify-center items-center bg-[url(/home_cover.png)] bg-cover ">
        <div className="w-full h-full flex flex-col justify-center items-center bg-black/60 ">
          <img width={216} height={96} src={logo} />
          <h1 className="text-white text-[64px] font-[Akshar] font-medium gap-5 ">
            The Future of Energy
          </h1>
          <a href="/contact">
          <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal rounded-md transform transition-transform duration-300 hover:scale-105">
  BOOK A CALL
</button>


          </a>
        </div>
      </section>
      
      <section className="w-full h-screen flex flex-col justify-start items-center bg-white font-[Akshar] ">
        <div className="flex flex-row p-4 gap-5 w-full justify-start bg-gray-100">
          <div className="flex flex-col w-full justify-center items-center text-[#0C33F2] p-4">
            <button className="border-[#0C33F2] border-2 rounded-md p-2 px-4 ">
              Reliability
            </button>
            <div className="font-semibold text-[108px]">
              20+ <span className="text-[64px] font-normal">year</span>
            </div>
            <div className="text-black w-3/4 font-gilroy">
              Technology that last longer with higher reliability and less
              maintenance.
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center text-[#00C069] p-4">
            <button className="border-[#00C069] border-2 rounded-md p-2 px-4 ">
              REDUCED FOOTPRINT
            </button>
            <div className="font-semibold text-[108px]">90%</div>
            <div className="text-black w-3/4 font-gilroy">
  less CO₂ compared to cells made using coal power by 2030.
</div>


          </div>
          <div className="flex flex-col w-full justify-center items-center text-[#0C33F2] p-4">
            <button className="border-[#0C33F2] border-2 rounded-md p-2 px-4">
              CAPACITY
            </button>
            <div className="font-semibold text-[108px]">
              10<span className="text-[64px] font-normal">GWh</span>
            </div>
            <div className="text-black w-3/4 font-gilroy">
              Voltra’s target for lithium-ion cell installed capacity by 2030.
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-auto justify-around mt-20">
          <img width={590} height={340} src={power} />

          <div className=" w-[509px] h-[351px] ">
            <div className="w-full h-full flex flex-col ">
              <div className="w-full h-full">
                <h1 className="text-[#0C33F2] font-medium text-[40px]">
                  Revolutionizing the Battery Storage Landscape of India
                </h1>
                <div className="font-gilroy text-[16px]">
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
  className="flex flex-row items-center gap-2 text-[16px] text-[#00C069]"
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


      <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] mt-20 gap-8 ">
        <h1 className="flex flex-row w-full justify-center text-[40px] font-medium text-[#0C33F2]">
          Our Products
        </h1>
        <div className="flex flex-col w-full gap-8">
  {/* Product Cards Row */}
  <div className="flex flex-col md:flex-row w-full justify-center gap-4 px-4">

{/* VOLT-100 Card */}
    <div className="flex flex-col w-[584px] bg-white shadow-sm rounded-md overflow-hidden">
      <div className="w-full bg-[#EDEDED] h-[400px] p-8">
        <img
          src={VOLT_MAX}
          alt="VOLT-MAX ESS Cabinet"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col p-6 bg-[#FAFAFA]">
        <h1 className="text-[#0C33F2] text-3xl font-medium mb-2">
          VOLT-MAX
        </h1>
        <p className="text-black text-sm mb-6">
        The ESS container product integrates PACK, EMS, BMS, HVAC, fire safety system into one container. It has the advantages of high energy density, easy transportation & installation, and high protection level. The DC output can combine with PCS-boost container to realize AC network connection at medium/high voltage . It can be applied to the generation and grid side.
        </p>

        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="flex flex-col items-center">
            <img src={Temp} width={36} height={36} alt="Energy Saving" className="mb-2" />
            <p className="text-black text-xs font-medium text-center">
            Better Temperature Control
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={bar} width={36} height={36} alt="Economic" className="mb-2" />
            <p className="text-black text-xs font-medium text-center">
            Lower Local Power Consumption
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Cube} width={36} height={36} alt="Smart" className="mb-2" />
            <p className="text-black text-xs font-medium text-center">
            Higher Energy Density
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={gaurd} width={36} height={36} alt="Safe" className="mb-2" />
            <p className="text-black text-xs font-medium text-center">
            High Protection
            </p>
          </div>
        </div>
        
        <a
          href="/solutions?id=7"
          className="inline-flex items-center text-[#00C069] text-sm font-medium"
        >
          <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
          Know more
          </span>
          <ArrowUpRight className="ml-1" width={16} height={16} />
        </a>
      </div>
    </div>

    {/* VOLT-HVC Card */}
    <div className="flex flex-col w-[584px] bg-white shadow-sm rounded-md overflow-hidden">
    <div className="w-full bg-[#EDEDED] h-[400px] p-8">
        <img
          src={VOLT_LINK}
          alt="VOLT-HVC ESS Cabinet"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col p-6 bg-[#FAFAFA]">
        <h1 className="text-[#0C33F2] text-3xl font-medium mb-2">
          VOLT-LINK
        </h1>
        <p className="text-black text-sm mb-6">
        The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. Through AC side parallel connection, it achieves flexible capacity expansion up to MWH.
        </p>

        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="flex flex-col items-center">
            <img src={Hand} width={36} height={36} alt="Ultra-Long Life" className="mb-2" />
            <p className="text-black text-xs font-medium text-center">
            High Integration 
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Temp} width={36} height={36} alt="Economic" className="mb-2" />
            <p className="text-black text-xs font-medium text-center">
              Efficient Cooling 

            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Cube} width={36} height={36} alt="Intelligent" className="mb-2" />
            <p className="text-black text-xs font-medium text-center">
              Compact and Modular  
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={gaurd} width={36} height={36} alt="Flexible" className="mb-2" />
            <p className="text-black text-xs font-medium text-center">
              Safe and Reliable 
            </p>
          </div>
        </div>
        
        <a
          href="/solutions?id="
          className="inline-flex items-center text-[#00C069] text-sm font-medium"
        >
           <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
          Know more
          </span>
          <ArrowUpRight className="ml-1" width={16} height={16} />
        </a>
      </div>
    </div>
  </div>

  {/* Buttons Row */}
  <div className="flex flex-row w-full justify-center gap-4 mt-6">
    <a href="/products">
      <button className="border-2 border-[#0C33F2] bg-white text-[#0C33F2] hover:bg-[#0C33F2] hover:text-white py-2 px-4 rounded-md font-medium transition duration-300">
        VIEW ALL PRODUCTS
      </button>
    </a>
    <a
      href="https://drive.google.com/file/d/1kWX9pZ0KSg7l7vk-1HQHthldLIXiVu3U/view"
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-[#0C33F2] bg-white text-[#0C33F2] hover:bg-[#0C33F2] hover:text-white py-2 px-4 rounded-md font-medium transition duration-300"
    >
      DOWNLOAD BROCHURE
    </a>
  </div>
</div>
      </section>

      <section className="w-full h-[626px] flex flex-col justify-around items-center bg-gray-100 font-[Akshar] gap-8 mt-10">
      <div className="flex flex-row p-4 justify-around w-full items-center gap-8">
          <div className="flex flex-col w-[540px] gap-2">
            <h1 className="text-[#0C33F2] font-medium text-[40px]">
              INVESTING IN VOLTRA BESS IS MONEY{" "}
              <span className="text-[#00C069]"> IN THE BANK</span>
            </h1>
            <p className="font-gilroy">Calculate your savings and battery life.</p>
            <div>
              <input
                type="range"
                min="0"
                max="11"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="w-full appearance-none h-[36px] bg-gray-200 rounded-lg cursor-pointer accent-[#0C33F2]"
                style={{
                  WebkitAppearance: "none",
                  background: `linear-gradient(to right, #0C33F2 0%, #0C33F2 ${(year / 11) * 100}%, #e5e7eb ${(year / 11) * 100}%, #e5e7eb 100%)`,
                  transition: "all 0.3s ease",
                }}
              />
              <div className="flex flex-row w-full justify-between items-center mt-2 font-gilroy ">
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
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: url("/icon.svg") no-repeat center;
                background-size: 26.4px;
                cursor: pointer;
                background-color: white;

                transition: background 0.3s ease;
              }

              input[type="range"]:focus::-webkit-slider-thumb {
                background: url("/icon.svg") no-repeat center;
                background-size: 26.4px;
                background-color: white;
              }

              /* Firefox */
              input[type="range"]::-moz-range-thumb {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: url("/icon.svg") no-repeat center;
                background-size: 26.4px;
                background-color: white;
                cursor: pointer;
                transition: background 0.3s ease;
              }

              input[type="range"]:focus::-moz-range-thumb {
                background: url("/icon.svg") no-repeat center;
                background-size: 26.4px;
              }
            `}</style>
            <div className="flex flex-row gap-4 justify-around">
              <div className=" flex flex-col ">
                <div className="text-[36px] text-[#00C069] font-semibold">
                  90%
                </div>
                <div className="text-[14px] font-gilroy">Annual savings</div>
              </div>
              <div className=" flex flex-col">
                <div className="text-[36px] text-[#00C069] font-semibold">
                  2024
                </div>
                <div className="text-[14px] font-gilroy">Monthly savings</div>
              </div>
            </div>
          </div>
          <div>
            <Graph year={year} />
          </div>
        </div>
      </section>
      
      <section className="w-full h-screen flex flex-row font-[Akshar] bg-[url(/factory.png)] bg-cover">

{sections.map((section, index) => (
    <div
      key={section.id}
      className={`w-1/3 flex flex-col border-r ${index < sections.length - 1 ? "border-white" : ""} h-full bg-black/20 hover:bg-black/50 justify-end items-end p-4 transition-all duration-300 ease-in-out relative -hidden`}
      onMouseEnter={() => setHoveredSection(section.id)}
      onMouseLeave={() => setHoveredSection(null)}
    >
      <div
        className={`flex flex-col text-white w-3/4 justify-center p-4 gap-2 transition-transform duration-500 ease-in-out ${hoveredSection === section.id ? "transform -translate-y-8" : ""}`}
      >
        <h1 className="text-[40px]">{section.title}</h1>
        <p
          className={`text-[16px] font-gilroy transition-all duration-500 ease-in-out ${hoveredSection === section.id ? "top-1/2 opacity-100 translate-y-0" : "top-0 opacity-0 translate-y-4 hidden"}`}
        >
          {section.description}
        </p>
        <a
          className={`flex flex-row items-start gap-2 text-[16px] text-[#00C069] transition-opacity duration-300 ${hoveredSection === section.id ? "opacity-100" : "opacity-70"}`}
          href={section.link}
        >
          <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200 text-16px">
    Know more
  </span>
          
          
          <ArrowUpRight width={24} height={24} />
        </a>
      </div>
    </div>
  ))}
</section>


      
<section className="w-full flex flex-col justify-start items-center bg-white font-[Akshar] mt-10">
  <h2 className="text-3xl font-bold text-blue-600 my-8 text-center">
    The Voltra Advantage
  </h2>

  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-2 max-w-7xl mx-auto">
    {/* Card 1: Modular BESS */}
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 h-full">
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="leading-tight mb-4">
          <h3 className="text-3xl font-semibold text-blue-600 m-0 p-0">
            Modular
          </h3>
          <h3 className="text-4xl font-semibold text-blue-600 m-0 p-0">
            BESS
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
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Card 2: Thermal Management */}
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 h-full">
      <div className="md:w-1/2 flex flex-col justify-center">
      <h3 className="text-3xl font-semibold text-blue-600 m-0 p-0">
            Thermal
          </h3>
          <h3 className="text-3xl font-semibold text-blue-600 m-0 p-0">
            Management
          </h3>
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
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Card 3: Intelligent Communication */}
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 h-full">
      <div className="md:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">
          Intelligent Communication
        </h3>
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
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Card 4: Long Service Life */}
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 h-full">
      <div className="md:w-1/2 flex flex-col justify-center">
      <h3 className="text-3xl font-semibold text-blue-600 m-0 p-0">
            Long
          </h3>
          <h3 className="text-3xl font-semibold text-blue-600 m-0 p-0">
            Service Life
          </h3>
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
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>



  <section className="w-full max-w-7xl mx-auto flex flex-col justify-start items-center bg-white font-[Akshar] my-20 px-4">
    <div className="flex flex-col lg:flex-row w-full h-auto justify-between items-center gap-8">
      
      {/* Left image */}
      <img
        className="w-full lg:w-1/2 object-cover"
        src={factory}
        alt="Voltra GigaFactory"
      />

      {/* Right content */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <div>
          <h1 className="text-[#0C33F2] text-3xl md:text-[40px] font-medium">
            The Voltra GigaFactory
          </h1>
          <div className="text-black text-base mt-5 font-gilroy">
            An advanced manufacturing facility focused on producing cutting-edge electric vehicle (EV) batteries and energy storage solutions. Located in a strategic area to support sustainable energy and transportation innovations, the factory aims to significantly reduce the cost of battery production while increasing efficiency and performance.
          </div>
          <div className="text-black text-base mt-5 font-gilroy">
            Voltra’s commitment to green energy solutions makes it a key player in the shift toward a more sustainable, carbon-neutral future.
          </div>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row justify-around w-full gap-4">
          <div className="flex flex-col w-full sm:w-[48%] justify-center items-center gap-4">
            <img src={robust} width={40} height={40} />
            <h1 className="text-black font-semibold text-lg font-gilroy text-center">
              Robust Testing
            </h1>
          </div>
          <div className="flex flex-col w-full sm:w-[48%] justify-center items-center gap-4">
            <img src={data} width={40} height={40} />
            <h1 className="text-black font-semibold text-lg font-gilroy text-center">
              Data Integration
            </h1>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row justify-around w-full gap-4">
          <div className="flex flex-col w-full sm:w-[48%] justify-center items-center gap-4">
            <img src={intl} width={40} height={40} />
            <h1 className="text-black font-semibold text-lg font-gilroy text-center">
              Intelligent Production
            </h1>
          </div>
          <div className="flex flex-col w-full sm:w-[48%] justify-center items-center gap-4">
            <img src={rd} width={40} height={40} />
            <h1 className="text-black font-semibold text-lg font-gilroy text-center">
              R&D Lab
            </h1>
          </div>
        </div>

        {/* Link */}
        <a
          className="flex flex-row items-center gap-2 text-sm text-[#00C069]"
          href={"/technology"}
        >
          <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
            Explore the GigaFactory
          </span>
          <ArrowUpRight width={24} height={24} />
        </a>
      </div>
    </div>
  </section>

      <section className="w-full max-w-7xl mx-auto flex flex-col justify-start items-center bg-white font-[Akshar] py-16 px-4">        <div className="flex flex-row w-full h-auto justify-center items-center ">
          <div className="flex flex-col p-4 gap-4 w-[584px] h-[362px] ">
            <div>
              <h1 className="text-[#0C33F2] text-[40px] font-medium">
                KNOW ABOUT BEES
              </h1>
              <p className="mb-6">Have any more queries?</p>
              <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal rounded-lg ">
                <a href="/contact">
               Contact Us
                </a>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 bg-gray-50 rounded-lg justify-evenly shadow-md p-6 max-h-[500px] overflow-y-auto w-full md:w-1/2 font-gilroy">


{faqItems.map((item, index) => (
              <article key={index} className="border-b border-gray-200 py-4">
                <header>
                  <button
                    className="flex w-full justify-between items-center text-left focus:outline-none"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openItem === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <h3 className="text-md font-medium text-gray-900">
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
                    openItem === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-2 text-sm text-gray-600 py-2">
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
