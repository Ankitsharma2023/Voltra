import React from "react";
import Tech from "../assets/Tech.png";
import factory from "../assets/Factory.png";
import rd from "../assets/rd.svg";
import intl from "../assets/intelligent.svg";
import robust from "../assets/robust.svg";
import data from "../assets/data.svg";
import waveGraphic from "../assets/wave.png";
import { Link, Outlet } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Adv1 from "../assets/adv1.png";
import Adv2 from "../assets/adv2.png";
import Adv3 from "../assets/adv3.png";
import Adv4 from "../assets/adv4.png";
import Adv5 from "../assets/adv5.png";
import Adv6 from "../assets/adv6.png";
import Tech2 from "../assets/Tech2.png";
import Test_1 from "../assets/Test_1.png";
import Test_2 from "../assets/Test_2.png";
import Test_3 from "../assets/Test_3.png";
import Test_4 from "../assets/Test_4.png";
import Test_5 from "../assets/Test_5.png";
import Test_6 from "../assets/Test_6.png";
import Test_7 from "../assets/Test_7.png";
import Adva1 from "../assets/Adva1.png";
import Adva2 from "../assets/Adva2.png";
import Adva3 from "../assets/Adva3.png";
import Adva4 from "../assets/Adva4.png";
const Technology = () => {
  return (
    <>
     <main className="flex flex-col w-full gap-4 font-[Akshar]">
  {/* Hero Section */}
  <section className="flex flex-col md:flex-row items-center justify-between p-4 md:p-16 bg-white gap-4">
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-[#0C33F2] font-[Akshar]">VOLTRA TECH</h2>
      <p className="text-base md:text-lg font-gilroy text-justify">
        At Voltra BESS, we are committed to advancing the future of energy
        storage with cutting-edge technology and innovative solutions. Our
        state-of-the-art manufacturing processes, commitment to
        sustainability, and continuous research into next-generation
        battery technologies set us apart in the energy sector. This page
        provides an in-depth look into the core technologies that power
        our high-performance Battery Energy Storage Systems (BESS), from
        our Gigafactory and production processes to the rigorous testing
        methods we use to ensure quality and reliability.
      </p>
      <br />
      <a href="/contact">
        <button className="px-6 py-3 bg-blue-600 text-white font-[Akshar] font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          CONTACT US
        </button>
      </a>
    </div>
    <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
      <div className="w-full p-4 md:p-20">
        <img src={Tech} alt="Product" className="w-full h-auto" />
      </div>
    </div>
  </section>

  {/* Gigafactory Section */}
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

  {/* Testing & Analysis Section */}
  <section className="w-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-8 px-4 mt-12">
    <h1 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] mt-10 md:mt-20 text-center">
      Testing & Analysis
    </h1>

    <div className="flex flex-col w-full justify-center items-center gap-4">
      {/* First row of cards - responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        <div className="flex flex-col justify-start items-center p-2">
          <div className="w-full flex justify-center">
            <img src={Test_1} alt="Cell Grading" className="h-auto" />
          </div>
          <div className="flex flex-col w-full items-start mt-2">
            <h2 className="text-[#0C33F2] text-xl md:text-[24px] font-medium">
              Cell Grading
            </h2>
            <p className="text-xs md:text-[12px] font-gilroy">
              Combined with the cell failure mechanism model, it monitors
              all cells with charge and discharge in real-time.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center p-2">
          <div className="w-full flex justify-center">
            <img src={Test_2} alt="Container Testing" className="h-auto" />
          </div>
          <div className="flex flex-col w-full items-start mt-2">
            <h2 className="text-[#0C33F2] text-xl md:text-[24px] font-medium">
              Container Testing
            </h2>
            <p className="text-xs md:text-[12px] font-gilroy">
              Multiple cycles are tested to comply with safety standards
              and monitoring communication & control systems for all the
              components.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center p-2">
          <div className="w-full flex justify-center">
            <img src={Test_3} alt="BMS Testing" className="h-auto" />
          </div>
          <div className="flex flex-col w-full items-start mt-2">
            <h2 className="text-[#0C33F2] text-xl md:text-[24px] font-medium">
              BMS Testing
            </h2>
            <p className="text-xs md:text-[12px] font-gilroy">
              Each BMS is tested with detailed parameters like voltage,
              temperature accuracy, balancing, over-under voltage, voltage
              interlock, insulation, shunt accuracy etc.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center p-2">
          <div className="w-full flex justify-center">
            <img src={Test_4} alt="Insulation Test" className="h-auto" />
          </div>
          <div className="flex flex-col w-full items-start mt-2">
            <h2 className="text-[#0C33F2] text-xl md:text-[24px] font-medium">
              Insulation Test
            </h2>
            <p className="text-xs md:text-[12px] font-gilroy">
              To verify the integrity of the insulation in the battery
              pack and its components, to ensure no electrical leakage
              paths that could pose safety risks.
            </p>
          </div>
        </div>
      </div>

      {/* Second row of cards - responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mt-4">
        <div className="flex flex-col justify-start items-center p-2">
          <div className="w-full flex justify-center">
            <img src={Test_5} alt="Pack Grading" className="h-auto" />
          </div>
          <div className="flex flex-col w-full items-start mt-2">
            <h2 className="text-[#0C33F2] text-xl md:text-[24px] font-medium">
              Pack Grading
            </h2>
            <p className="text-xs md:text-[12px] font-gilroy">
              Each battery pack is rigorously tested with EU standards to
              check capacity, voltage, charge-discharge, safety, cut-off
              parameters, etc.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center p-2">
          <div className="w-full flex justify-center">
            <img src={Test_6} alt="Environmental Testing" className="h-auto" />
          </div>
          <div className="flex flex-col w-full items-start mt-2">
            <h2 className="text-[#0C33F2] text-xl md:text-[24px] font-medium">
              Environmental Testing
            </h2>
            <p className="text-xs md:text-[12px] font-gilroy">
              Exposes the battery under different environmental
              conditions, such as temperature extremes, humidity,
              pressure, vibration, and other external factors.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center p-2">
          <div className="w-full flex justify-center">
            <img src={Test_7} alt="Pressure Leak Test" className="h-auto" />
          </div>
          <div className="flex flex-col w-full items-start mt-2">
            <h2 className="text-[#0C33F2] text-xl md:text-[24px] font-medium">
              Pressure Leak Test
            </h2>
            <p className="text-xs md:text-[12px] font-gilroy">
              The test verifies that the liquid cooling system is sealed
              and free of leaks, preventing coolant loss, which could lead
              to overheating or thermal management failures.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* The Voltra Advantage Section */}
  <section className="w-full flex flex-col justify-start items-center bg-white font-[Akshar] mt-10 px-4">
    <h2 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] my-8 text-center font-[Akshar]">
      The Voltra Advantage
    </h2>

    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {/* Card 1: Modular BESS */}
      <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 h-full">
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="leading-tight mb-4">
            <h3 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] m-0 p-0 font-[Akshar]">
              Modular
            </h3>
            <h3 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] font-[Akshar] mt-2 p-0">
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
          <h3 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] font-[Akshar] m-0 p-0">
            Thermal
          </h3>
          <h3 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] font-[Akshar] m-0 p-0">
            Management
          </h3>
          <br />
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
          <h3 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] font-[Akshar] mb-4">
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
          <h3 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] font-[Akshar] m-0 p-0">
            Long
          </h3>
          <h3 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] font-[Akshar] m-0 p-0">
            Service Life
          </h3>
          <br />
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

  {/* Contact Section */}
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
    </>
  );
};

export default Technology;
