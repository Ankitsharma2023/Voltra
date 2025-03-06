import React, { useState } from "react";
import {
  Cloud,
  Home,
  Briefcase,
  Server,
  BatteryCharging,
  Zap,
  Link as LucideLink,
  Shield,
} from "lucide-react";
import product_main from "../assets/product_main.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import power from "../assets/power.png";
import light from "../assets/light.svg";
import cloud from "../assets/cloud.png";
import bar from "../assets/bar.svg";
import gaurd from "../assets/gaurd.svg";
import waveGraphic from "../assets/wave.png";
import solution from "../assets/solution.png";
import future from "../assets/future.png";
import Flip from "../assets/Flip.png";

export default function Solutions() {
  return (
    <>
      <main className="flex flex-col w-full gap-4">
        <section className="flex flex-col md:flex-row items-center justify-between p-16 bg-white gap-4">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-blue-600">VOLT - 1000</h2>
            <p className="text-gray-700">
              The all-in-one air-cooled ESS cabinet integrates a long-life
              battery, efficient balancing BMS, high-performance PCS, active
              safety system, smart distribution, and HVAC into one cabinet,
              enabling long-term operation with safety, stability, and
              reliability.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              ORDER NOW
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <div className="w-full h-64 flex items-center justify-center ml-20 p-10">
              <img src={solution} alt="Product" className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-8 ">

<div className="flex flex-row w-full justify-around p-4 gap-4">
          <div className="flex flex-col gap-4 w-[584px]">
            <img src={solution} width={584} height={336} />
          </div>
          <div className="flex flex-col gap-4 p-4 w-[584px]">
            <img src={Flip} height={336} />
          </div>
        </div>

</section>


        <section className="flex justify-center items-center w-full h-full p-4 relative overflow-hidden">
  
  <div className="relative bg-[#0C33F2] rounded-lg p-8 text-white flex flex-row items-center justify-between md:px-24 w-[1200px] h-[323px]">
    
    
    <div className="md:w-2/3 space-y-4 z-10">
      <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
        Explore if the VOLT-1000 is the ideal <br />
        solution for your needs.
      </h2>
      <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow-md hover:bg-gray-100 transition">
        DOWNLOAD BROCHURE
      </button>
    </div>

  
    <div className="md:w-1/3 flex justify-end">
      <img src={future} alt="Brochure" className="w-[250px] md:w-[280px] rounded-lg shadow-lg" />
    </div>

  </div>
</section>









 
      </main>
    </>
  );
}
