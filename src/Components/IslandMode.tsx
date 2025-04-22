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
    <main className="flex flex-col w-screen gap-4 font-[Akshar]">

      <section className="flex w-full flex-col md:flex-row items-center justify-between bg-white gap-4 text-[Akshar]">
        <div className="md:w-1/2 space-y-6 p-24">
          <h2 className="text-[64px] font-medium text-[#0C33F2]">Island Mode</h2>
          <p className=" font-gilroy text-[16px]">
            Island BESS are commonly found in remote areas such as rural towns
            and mine sites, where access to the utility grid is limited. Island
            micro grids connected with BESS often serve as backup or standby
            generators to provide electricity during grid failures.
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
            src={islandModeImage}
            alt="Island Mode BESS"
            className="w-full h-auto rounded"
          />
        </div>
      </section>

      <section className="px-8 py-16 bg-white">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <img
              src={reliabilityIcon}
              alt="Reliability Boost"
              className="mx-auto w-16 h-16"
            />
           <h3 className="text-xl font-gilroy font-bold text-black-600">

              Reliability Boost
            </h3>
          <p className="text-[14px] font-medium font-gilroy m-0">
  India's BESS: Ensuring Uninterrupted power Supply During Grid Failures.
</p>


          </div>

          <div className="space-y-4">
            <img
              src={resilienceIcon}
              alt="Enhanced Resilience"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-gilroy font-bold text-black-600 ">
              Enhanced Resilience
            </h3>
            <p className="text-[14px] font-gilroy">
              Back-up power for outages and disasters.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src={stabilityIcon}
              alt="Improved Stability"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-gilroy font-bold text-black-600">
              Improved Stability
            </h3>
            <p className="text-[14px] font-gilroy">
              Optimal power quality and reduced voltage/frequency deviations.
            </p>
          </div>
        </div>
  <br/>
  <br/>
  <br/>
  <br/>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="md:w-1/2 ">
            <img
              src={Solutions1}
              alt="A Reliable Power Solution"
              className="w-full h-auto rounded"
            />
          </div>
         

          <div className="md:w-[505px] space-y-4 leading-[150%]">
            <h2 className="text-[40px] font-medium text-[#0C33F2] font-[Akshar]">
              A Reliable Power Solution
            </h2>
            <br/>
            <p className="text-[16px] font-gilroy font-bold">
              As the name suggests, Island Mode allows you to generate and use
              energy independently. Although it also has the flexibility to stay
              connected with the grid for benefits like net metering.
            </p>
            <p className="text-[16px] font-gilroy">
              Energy Storage System-connected Island Mode energy stations are
              more reliable as Excess energy can be stored in BESS and used
              anytime and anywhere.
            </p>
            <p className="text-[16px] font-gilroy">
              Despite its name, islanding doesn’t disconnect your home from the
              grid entirely. Instead, it allows you to stay connected for
              benefits like net metering.
            </p>
            <p className="text-[16px] font-gilroy">
              Even with solar and storage installed, your home maintains this
              connection, ensuring you can still draw power from the grid when
              needed, such as during the night when solar panels aren’t
              producing.
            </p>

            <a
              className="flex flex-row items-center gap-2 text-[16px] text-[#00C069] font-bold"
              href={"/products"}
            >
              <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-bold transition-all duration-200 ">
              View our Products

              </span>
              
               <ArrowUpRight width={24} height={24} />
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full h-full justify-center items-center">
        <video src={islandVideo} autoPlay={true} controls={false} muted loop />
      </section>

      <section className="flex flex-col md:flex-row items-start bg-white font-[Akshar]">
  <div className="md:w-2/5 space-y-4 px-8 py-16 ">
    <h2 className="text-[40px] font-[Akshar] font-medium text-[#0C33F2] ml-40">
      Multiple Applications,<br />One-Stop Solution
    </h2>
    <p className="font-gilroy ml-40">
      Voltra's battery energy storage system is<br />modular, allowing you to
      scale to your needs, and<br />keeping CAPEX low.
    </p>
  </div>

  <div className="md:w-3/5 flex flex-row gap-0 p-0 m-0">
    <div className="relative w-1/2 h-72 md:h-80">
      <img
        src={hybridImage}
        alt="Hybrid"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-4">
        <h3 className="text-white text-2xl font-semibold mb-2">HYBRID</h3>
        <a
          className="flex flex-row items-center gap-2 text-[14px] text-[#00C069] font-bold"
          href="/solutions/hybrid-mode"
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
  <h2 className="text-2xl md:text-3xl font-semibold whitespace-nowrap font-[Akshar]" >
    We offer tailored customization to meet your needs.
  </h2>
  <h2 className="text-2xl md:text-3xl font-semibold font-[Akshar]">
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
