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

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
// HybridModeSection  HybridMode
export default function HybridModeSection() {
  return (
    <main className="flex flex-col w-screen gap-4 font-[Akshar]">
      <section className="flex w-full flex-col md:flex-row items-center justify-between bg-white gap-4 text-[Akshar]">
        <div className="md:w-1/2 space-y-6 p-24">
          <h2 className="text-4xl font-bold text-blue-600">Hybrid Mode</h2>
          <p className="text-gray-700 font-gilroy text-[16px]">
            Hybrid Mode integrates multiple energy sources like Grid, Solar PV,
            Generators, etc., and helps in enhancing the overall efficiency and
            reliability of the system.
          </p>
          <br />
          <a href="/contact">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              CONTACT US
            </button>
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src={hybridImage}
            alt="Hybrid Mode BESS"
            className="w-full h-auto rounded"
          />
        </div>
      </section>
      <section className="px-8 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <img
              src={batteryIcon}
              alt="Maximized Redundancy"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-gilroy font-bold text-black-600">
              Maximized Redundancy
            </h3>
            <p className="text-[14px] font-medium font-gilroy">
              Minimizes the risk of power disruptions by switching sources.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src={settingsIcon}
              alt="Increased Efficiency"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-gilroy font-bold text-black-600">
              Increased Efficiency
            </h3>
            <p className="text-[14px] font-medium font-gilroy">
              Battery for Solar Inverter: Storing Energy for Peak Efficiency
            </p>
          </div>

          <div className="space-y-4">
            <img
              src={savingsIcon}
              alt="Cost-Savings"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-gilroy font-bold text-black-600">Cost-Savings</h3>
            <p className="text-[14px] font-medium font-gilroy">
              Reduces energy costs and enhances financial performance.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="md:w-1/2">
            <img
              src={solutionImage}
              alt="A Reliable Power Solution"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="md:w-[505px] space-y-4 leading-[150%]">
            <h2 className="text-[40px] font-bold text-blue-600">
              Your Smart Energy Partner
            </h2>
            <p className="text-[16px] font-gilroy">
              Imagine you're at a construction site, where work never stops. A
              lot is going on, and the need for electricity changes all the
              time—more in the morning, less at night.
            </p>
            <p className="text-[16px] font-gilroy font-bold">
              With a setup called 'hybrid working,' energy sources like
              generators can be used in combination with Battery Energy Storage
              System, which stores energy in lean hours and provides energy in
              peak hours.
            </p>
            <p className="text-[16px] font-gilroy">
              Hybrid working not only reduces the cost of energy but also makes
              it more reliable and sustainable.
            </p>
            <p className="text-[16px] font-gilroy">
              Here's how it works: When there's a lot of demand for power, like
              in the morning when everyone's starting their day, the ESS kicks
              in. It saves extra electricity to use later, so we don't have to
              rely too much on expensive power from the grid. Then, when it's
              quieter at night and we don't need as much energy, the stored
              power gets used efficiently.
            </p>

            <a
              className="flex flex-row items-center gap-2 text-[14px] text-[#00C069]"
              href={"/products"}
            >
              <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
                View our Products
              </span>
              <ArrowUpRight width={24} height={24} />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full h-full justify-center items-center">
        <video src={hybridVideo} autoPlay={true} controls={false} muted loop />
      </section>
      <section className="flex flex-col md:flex-row items-start bg-white font-[Akshar]">
        <div className="md:w-2/5 space-y-4 px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-[Akshar] font-bold text-[#0C33F2]">
            Multiple Applications,<br />One-Stop Solution
          </h2>
          <p className="text-gray-700 font-gilroy">
            Voltra's battery energy storage system is<br />modular, allowing you to
            scale to your needs, and<br />keeping CAPEX low.
          </p>
        </div>

        <div className="md:w-3/5 flex flex-row gap-0 p-0 m-0">
          <div className="relative w-1/2 h-72 md:h-80">
            <img
              src={islandModeImage}
              alt="Island"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">ISLAND</h3>
              <a
                className="flex flex-row items-center gap-2 text-[14px] text-[#00C069] font-bold"
                href="/solutions/island-mode"
              >
                <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
                  Know more
                </span>
                <ArrowUpRight width={24} height={24} />
              </a>
            </div>
          </div>

          <div className="relative w-1/2 h-72 md:h-80">
            <img
              src={microgridImage}
              alt="Microgrid"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">MICROGRID</h3>
              <a
                className="flex flex-row items-center gap-2 text-[14px] text-[#00C069] font-bold"
                href="/solutions/microgrid-mode"
              >
                <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
                  Know more
                </span>
                <ArrowUpRight width={24} height={24} />
              </a>
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
  );
}