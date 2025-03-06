import React from "react";
import islandModeImage from "../assets/island-mode.png";
import batteryIcon from "../assets/battery.svg";
import savingsIcon from "../assets/savings.svg";
import settingsIcon from "../assets/settings.svg";
import solutionImage from "../assets/solutions.png";
import island2 from "../assets/island_2.png";
import hybridImage from "../assets/hybrid.png";
import microgridImage from "../assets/microgrid.png";
import waveGraphic from "../assets/wave.png";

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function MicrogridModeSection() {
  return (
    <main className="flex flex-col w-screen gap-4">
      <section className="flex w-full flex-col md:flex-row items-center justify-between bg-white gap-4 text-[Akshar]">
        <div className="md:w-1/2 space-y-6 p-24">
          <h2 className="text-4xl font-bold text-blue-600">Hybrid Mode</h2>
          <p className="text-gray-700">
            Hybrid Mode integrates multiple energy sources like Grid, Solar PV,
            Generators, etc., and helps in enhancing the overall efficiency and
            reliability of the system.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            CONTACT US
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src={hybridImage}
            alt="Island Mode BESS"
            className="w-full h-auto rounded"
          />
        </div>
      </section>
      <section className="px-8 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <img
              src={batteryIcon}
              alt="Reliability Boost"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-bold text-blue-600">
              Maximized Redundancy
            </h3>
            <p className="text-[12px] font-medium">
              Minimizes the risk of power disruptions by switching sources.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src={settingsIcon}
              alt="Enhanced Resilience"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-bold text-blue-600">
              Increased Efficiency
            </h3>
            <p className="text-[12px] font-medium">
              Battery for Solar Inverter: Storing Energy for Peak Efficiency
            </p>
          </div>

          <div className="space-y-4">
            <img
              src={savingsIcon}
              alt="Improved Stability"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-bold text-blue-600">Cost-Savings</h3>
            <p className="text-[12px] font-medium">
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

          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-blue-600">
              Your Smart Energy Partner
            </h2>
            <p className="text-[12px]">
              Imagine you’re at a construction site, where work never stops. A
              lot is going on, and the need for electricity changes all the
              time—more in the morning, less at night.
            </p>
            <p className="text-[14px] font-bold">
              With a setup called ‘hybrid working,’ energy sources like
              generators can be used in combination with Battery Energy Storage
              System, which stores energy in lean hours and provides energy in
              peak hours.
            </p>
            <p className="text-[12px]">
              Hybrid working not only reduces the cost of energy but also makes
              it more reliable and sustainable.
            </p>
            <p className="text-[12px]">
              Here’s how it works: When there’s a lot of demand for power, like
              in the morning when everyone’s starting their day, the ESS kicks
              in. It saves extra electricity to use later, so we don’t have to
              rely too much on expensive power from the grid. Then, when it’s
              quieter at night and we don’t need as much energy, the stored
              power gets used efficiently.
            </p>

            <Link
              className="flex flex-row items-center gap-2 text-[14px] text-[#00C069]"
              to={"/products"}
            >
              View our Products <ArrowUpRight width={24} height={24} />
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full h-full justify-center items-center">
        <img src={island2} width={"100%"} height={"100%"} />
      </section>
      <section className="flex flex-col md:flex-row items-center px-8 py-16 bg-white gap-8">
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Multiple Applications, One-Stop Solution
          </h2>
          <p className="text-gray-700">
            Voltra's battery energy storage system is modular, allowing you to
            scale to your needs, and keeping CAPEX low.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-64 rounded overflow-hidden group">
            <img
              src={islandModeImage}
              alt="island"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">Island</h3>
              <Link
                className="flex flex-row items-center gap-2 text-[14px] text-[#00C069] font-bold"
                to={"/island-mode"}
              >
                Know more <ArrowUpRight width={24} height={24} />
              </Link>
            </div>
          </div>

          <div className="relative h-64 rounded overflow-hidden group">
            <img
              src={microgridImage}
              alt="Microgrid"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">
                MICROGRID
              </h3>
              <Link
                className="flex flex-row items-center gap-2 text-[14px] text-[#00C069] font-bold"
                to={"/microgrid-mode"}
              >
                Know more <ArrowUpRight width={24} height={24} />
              </Link>
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
  );
}
