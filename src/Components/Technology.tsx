import React from "react";
import product_main from "../assets/product_main.png";
import tech1 from "../assets/tech1.svg";
import tech2 from "../assets/tech2.svg";
import Tech from "../assets/Tech.png";
import factory from "../assets/factory.png";
import light from "../assets/light.svg";
import cloud from "../assets/cloud.png";
import bar from "../assets/bar.svg";
import gaurd from "../assets/gaurd.svg";
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
import Test_2 from "../assets/Test_2.png";
import Test_3 from "../assets/Test_3.png";
import Test_4 from "../assets/Test_4.png";
import Test_5 from "../assets/Test_5.png";
import Test_6 from "../assets/Test_6.png";
import Test_7 from "../assets/Test_7.png";


const Technology = () => {
  return (
    <>
      <main className="flex flex-col w-full gap-4">
        <section className="flex flex-col md:flex-row items-center justify-between p-16 bg-white gap-4">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-blue-600">VOLTRA TECH </h2>
            <p className="text-gray-700">
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
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              CONTACT US
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <div className="w-full h-64 flex items-center justify-center p-20">
              <img src={Tech} alt="Product" className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className="w-[1440px] h-[629px] flex flex-col justify-start items-center bg-white font-[Akshar] mt-40 ">
          <div className="flex flex-row w-full h-auto justify-around items-center">
            <img width={943} height={584} src={factory} />

            <div className="flex flex-col p-4 gap-4 w-[584px] ">
              <div>
                <h1 className="text-[#0C33F2] text-[40px] font-medium">
                  The Voltra GigaFactory
                </h1>
                <div className="text-black text-[14px] mt-5">
                  An advanced manufacturing facility focused on producing
                  cutting-edge electric vehicle (EV) batteries and energy
                  storage solutions. Located in a strategic area to support
                  sustainable energy and transportation innovations, the factory
                  aims to significantly reduce the cost of battery production
                  while increasing efficiency and performance.
                </div>
                <div className="text-black text-[14px] mt-5">
                  Voltra’s commitment to green energy solutions makes it a key
                  player in the shift toward a more sustainable, carbon-neutral
                  future.
                </div>
              </div>

              <div className="flex flex-row justify-around w-full gap-4">
                <div className="flex flex-col justify-center items-center gap-4">
                  <img src={light} width={36} height={36} />
                  <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-black font-bold text-[10px]">
                      Energy Saving and Fast
                    </h1>
                    <div className="text-[8px] font-medium text-center">
                      1P fast charge/discharge rate, energy storing & releasing
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <img src={bar} width={36} height={36} />
                  <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-black font-bold text-[10px]">
                      Economical and Efficient
                    </h1>
                    <div className="text-[8px] font-medium text-center">
                      Conversion efficiency over 90%, DoD over 96%
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <img src={cloud} width={36} height={36} />

                  <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-black font-bold text-[10px]">
                      Smart O&M
                    </h1>
                    <div className="text-[8px] font-medium text-center">
                      Diversified monitoring by HMI (local), app/web (remote)
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <img src={gaurd} width={36} height={36} />

                  <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-black font-bold text-[10px]">
                      Safe and Reliable
                    </h1>
                    <div className="text-[8px] font-medium text-center">
                      IP55, thermal management, cell difference ≤6°C
                    </div>
                  </div>
                </div>
              </div>
              <Link
                className="flex flex-row items-center gap-2 text-[14px] text-[#00C069]"
                to={"/products"}
              >
                Explore the GigaFactory <ArrowUpRight width={24} height={24} />
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-8 ">
          <h1 className="flex flex-row w-full justify-center text-[40px] font-medium text-[#0C33F2] mt-20">
            Testing & Analysis
          </h1>

          <div className="flex flex-col w-full justify-center items-center p-4 gap-4">
            <div className="flex flex-row justify-center items-center p-4 gap-4 ">
              <div className="flex flex-col justify-center items-center w-[276px]">
                <img src={tech1} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    Cell Grading
                  </h2>
                  <p className="text-[16px]">
                    Combined with the cell failure mechanism model, it monitors
                    all cells with charge and discharge in real-time. 
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[276px]">
                <img src={Test_2} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    Container Testing 
                  </h2>
                  <p className="text-[16px]">
                  Multiple cycles are tested to comply with safety standards and monitoring communication & control systems for all the components.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[276px]">
                <img src={Test_3} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    BMS Testing
                  </h2>
                  <p className="text-[16px]">
                  Each BMS is tested with detailed parameters like voltage, temperature accuracy, balancing, over-under voltage, voltage interlock, insulation, shunt accuracy etc.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[276px]">
                <img src={Test_4} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    Insulation Test
                  </h2>
                  <p className="text-[16px]">
                  To verify the integrity of the insulation in the battery pack and its components, to ensure no electrical leakage paths that could pose safety risks.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center p-4 gap-4 ">
              <div className="flex flex-col justify-center items-center w-[276px]">
                <img src={Test_5} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                  Pack Grading 
                  </h2>
                  <p className="text-[16px]">
                  Each battery pack is rigorously tested with EU standards to check capacity, voltage, charge-discharge, safety, cut-off parameters, etc.  
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[276px]">
                <img src={Test_6} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                    Environmental Testing 
                  </h2>
                  <p className="text-[16px]">
                  Exposes the battery under different environmental conditions, such as temperature extremes, humidity, pressure, vibration, and other external factors.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[276px]">
                <img src={Test_7} />
                <div className="flex flex-col w-full items-start">
                  <h2 className="text-[#0C33F2] text-[24px] font-medium">
                   Pressure Leak Test 
                  </h2>
                  <p className="text-[16px]">
                  The test verifies that the liquid cooling system is sealed and free of leaks, preventing coolant loss, which could lead to overheating or thermal management failures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-8 ">
          <h1 className="flex flex-row w-full justify-center text-[40px] font-medium text-[#0C33F2] mt-20">
            The Voltra Advantage
          </h1>

          <div className="flex flex-row w-full justify-around p-4 gap-4">
            <div className="flex flex-col gap-4 w-[584px]">
              <img src={Adv1} width={584} height={336} />
            </div>
            <div className="flex flex-col gap-4 p-4 w-[584px]">
              <img src={Adv2} height={336} />
            </div>
          </div>

          <div className="flex flex-row w-full justify-around p-4 gap-4">
            <div className="flex flex-col gap-4 w-[584px]">
              <img src={Adv3} width={584} height={336} />
            </div>
            <div className="flex flex-col gap-4 p-4 w-[584px]">
              <img src={Adv4} height={336} />
            </div>
          </div>

          <div className="flex flex-row w-full justify-around p-4 gap-4">
            <div className="flex flex-col gap-4 w-[584px]">
              <img src={Adv5} width={584} height={336} />
            </div>
            <div className="flex flex-col gap-4 p-4 w-[584px]">
              <img src={Adv6} height={336} />
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

              <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow-md hover:bg-gray-100 transition">
                GET IN TOUCH
              </button>
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
