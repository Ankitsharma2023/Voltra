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
        <section className="flex flex-col md:flex-row items-center justify-between p-16 bg-white gap-4">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-blue-600 ">VOLTRA TECH </h2>
            <p className="text-gray-700 text-lg font-gilroy">
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
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <div className="w-full h-64 flex items-center justify-center p-20">
              <img src={Tech} alt="Product" className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className="w-[1440px] h-[629px] flex flex-col justify-start items-center bg-white  mt-40 ">
          <div className="flex flex-row w-full h-auto justify-around items-center">
            <img width={943} height={584} src={factory} />

            <div className="flex flex-col p-4 gap-4 w-[584px] ">
              <div>
                <h1 className="text-[#0C33F2] text-[40px] font-medium">
                  The Voltra GigaFactory
                </h1>
                <div className="text-black text-[16px] mt-5 font-gilroy">
                  Voltra BESS is proud to operate a cutting-edge gigafactory
                  dedicated to the production of state-of-the-art Battery Energy
                  Storage Systems (BESS). Our facility, located in a prime
                  industrial zone, incorporates the latest automation,
                  efficiency, and sustainability standards. It is designed to
                  meet the increasing demand for high-performance energy storage
                  solutions in renewable energy applications.
                </div>
           
              </div>

              <div className="flex flex-row justify-around w-full gap-4">
                <div className="flex flex-col w-[286px] justify-center items-center gap-4">
                  <img src={robust} width={40} height={40} />
                  <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-black font-bold text-[20px]">
                      Robust Testing
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col w-[286px] justify-center items-center gap-4">
                  <img src={data} width={40} height={40} />
                  <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-black font-bold text-[20px]">
                      Data Integration
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-around w-full gap-4">
                <div className="flex flex-col w-[286px] justify-center items-center gap-4">
                  <img src={intl} width={40} height={40} />
                  <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-black font-bold text-[20px]">
                      Intelligent Production
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col w-[286px] justify-center items-center gap-4">
                  <img src={rd} width={40} height={40} />
                  <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-black font-bold text-[20px]">
                      R&D Lab
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-8 ">
          <h1 className="flex flex-row w-full justify-center text-[40px] font-medium text-[#0C33F2] mt-20">
            Testing & Analysis
          </h1>

          <div className="flex flex-col w-full justify-center items-center p-4 gap-4">
            <div className="flex flex-row justify-center items-center p-4 gap-4 ">
              <div className="flex flex-col justify-center items-center w-[276px] h-[300px]">
                <img src={Test_1} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    Cell Grading
                  </h2>
                  <p className="text-[16px] font-gilroy">
                    Combined with the cell failure mechanism model, it monitors
                    all cells with charge and discharge in real-time. 
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[276px] h-[300px]">
                <img src={Test_2} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    Container Testing
                  </h2>
                  <p className="text-[16px] font-gilroy">
                    Multiple cycles are tested to comply with safety standards
                    and monitoring communication & control systems for all the
                    components.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[276px] h-[300px]">
                <img src={Test_3} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    BMS Testing
                  </h2>
                  <p className="text-[16px] font-gilroy">
                    Each BMS is tested with detailed parameters like voltage,
                    temperature accuracy, balancing, over-under voltage, voltage
                    interlock, insulation, shunt accuracy etc.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[276px] h-[300px]">
                <img src={Test_4} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    Insulation Test
                  </h2>
                  <p className="text-[16px] font-gilroy">
                    To verify the integrity of the insulation in the battery
                    pack and its components, to ensure no electrical leakage
                    paths that could pose safety risks.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center p-4 gap-4 ">
              <div className="flex flex-col justify-center items-center w-[276px] h-[300px]">
                <img src={Test_5} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    Pack Grading
                  </h2>
                  <p className="text-[16px] font-gilroy">
                    Each battery pack is rigorously tested with EU standards to
                    check capacity, voltage, charge-discharge, safety, cut-off
                    parameters, etc.  
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[276px] h-[300px]">
                <img src={Test_6} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    Environmental Testing
                  </h2>
                  <p className="text-[16px] font-gilroy">
                    Exposes the battery under different environmental
                    conditions, such as temperature extremes, humidity,
                    pressure, vibration, and other external factors.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[276px]">
                <img src={Test_7} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    Pressure Leak Test
                  </h2>
                  <p className="text-[16px] font-gilroy">
                    The test verifies that the liquid cooling system is sealed
                    and free of leaks, preventing coolant loss, which could lead
                    to overheating or thermal management failures.
                  </p>
                </div>
              </div>
            </div>
          </div>
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


        <section className="flex flex-col justify-center items-center w-full h-full p-4 relative overflow-hidden">
          <div className="relative bg-[#0C33F2] rounded-lg p-8 text-white overflow-hidden flex flex-col md:flex-row items-center justify-between md:px-24 w-3/4 h-full">
            <div className="md:w-2/3 space-y-4 z-10">
              <h2 className="text-2xl md:text-3xl font-semibold">
                We offer tailored customization to meet your needs.
                <br />
                Share your requirements with us.
              </h2>
              <br />
              <a href="/contact">
                <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow-md hover:bg-gray-100 transition">
                  GET IN TOUCH
                </button>
              </a>
            </div>
          </div>
          <div className="md:flex relative w-3/4 h-full">
            <img
              src={waveGraphic}
              alt="Wave Graphic"
              className="absolute bottom-[-100px] right-[-40px] w-64"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Technology;
