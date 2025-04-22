import React from "react";
import islandModeImage from "../assets/island-mode.png";
import energyIcon from "../assets/energy.svg";
import windmillIcon from "../assets/windmill.svg";
import handIcon from "../assets/hand.svg";
import solutionImage from "../assets/solutions.png";
import microgridVideo from "../assets/microgrid.mp4";
import hybridImage from "../assets/hybrid.png";
import microgridImage from "../assets/microgrid.png";
import waveGraphic from "../assets/wave.png";
import Solutions1 from "../assets/Solutions1.jpg";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
// MicrogridModeSection  MicrogridMode
export default function MicrogridModeSection() {
  return (
    <main className="flex flex-col w-screen gap-4 font-[Akshar]">
      <section className="flex w-full flex-col md:flex-row items-center justify-between bg-white gap-4 text-[Akshar]">
        <div className="md:w-1/2 space-y-6 p-24">
          <h2 className="text-[64px] font-medium text-[#0C33F2]">Microgrid Mode</h2>
          <p className="font-gilroy text-[16px]">
            Microgrids serve as vital solutions for areas lacking reliable
            access to traditional grid power. Offering localized control, these
            self-sufficient energy grids operate independently of the larger
            grid.
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
            src={microgridImage}
            alt="Microgrid Mode"
            className="w-full h-auto rounded"
          />
        </div>
      </section>
      <section className="px-8 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <img
              src={energyIcon}
              alt="Energy Independence"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-gilroy font-bold text-black-600">
              Energy Independence
            </h3>
            <p className="text-[14px] font-medium font-gilroy">
              Ensuring Self-Sufficiency with Renewable Energy Resources.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src={windmillIcon}
              alt="Reliable in Remote Areas"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-gilroy font-bold text-black-600">
              Reliable in Remote Areas
            </h3>
            <p className="text-[14px] font-medium font-gilroy">
              Crucial for areas with unreliable grid access
            </p>
          </div>

          <div className="space-y-4">
            <img
              src={handIcon}
              alt="Versatile Operations"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-gilroy font-bold text-black-600">
              Versatile Operations
            </h3>
            <p className="text-[14px] font-medium font-gilroy">
              Flexibility to connect or disconnect from the main grid.
            </p>
          </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="md:w-1/2">
            <img
              src={Solutions1}
              alt="A Reliable Power Solution"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="md:w-[505px] space-y-4 leading-[150%]">
            <h2 className="text-[40px] font-medium text-[#0C33F2] font-[Akshar]">
              A Self-sufficient Mode
            </h2>
            <br/>
            <p className="text-[16px] font-gilroy font-bold">
              To overcome these challenges and unlock the full potential of
              microgrids, owners turn to Battery Energy Storage Systems. BESS
              enhances micro-grid operations in several ways:
            </p>
            <p className="text-[16px] font-gilroy">
              The use of microgrids is widespread, but they come with
              limitations such as intermittency of renewable energy and power
              factor mismatches.
            </p>
            <p className="text-[16px] font-gilroy">
              <ul className="list-disc">
                <li>Improving grid reliability</li>
                <li>Reducing dependency on fuel and carbon footprint</li>{" "}
                <li>Enhancing solar penetration</li>{" "}
                <li>Optimizing owner profits</li>
                <li>Managing power grid frequency</li>
              </ul>
            </p>

            <a
              className="flex flex-row items-center gap-2 text-[16px] text-[#00C069] font-bold"
              href={"/products"}
            >
              <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-bold transition-all duration-200">
                View our Products
              </span>
              <ArrowUpRight width={24} height={24} />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full h-full justify-center items-center">
        <video src={microgridVideo} autoPlay={true} controls={false} muted loop />
      </section>
      <section className="flex flex-col md:flex-row items-start bg-white font-[Akshar]">
        <div className="md:w-2/5 space-y-4 px-8 py-16">
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
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full h-full p-4 relative overflow-hidden">
        <div className="relative bg-[#0C33F2] rounded-lg p-8 text-white overflow-hidden flex flex-col md:flex-row items-center justify-between md:px-24 w-3/4 h-full">
        <div className="md:w-2/3 space-y-4 z-10">
  <h2 className="text-2xl md:text-3xl font-semibold whitespace-nowrap font-[Akshar]">
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