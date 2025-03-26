import React, { useState } from "react";
import logo from "../assets/logo.png";
import power from "../assets/power.png";

import light from "../assets/light.svg";
import cloud from "../assets/cloud.png";
import bar from "../assets/bar.svg";
import gaurd from "../assets/gaurd.svg";
import invesment from "../assets/invesment.png";
import slidebar from "../assets/slidebar.png";
import Adv1 from "../assets/adv1.png";
import Adv2 from "../assets/adv2.png";
import Adv3 from "../assets/adv3.png";
import Adv4 from "../assets/adv4.png";
import Adv5 from "../assets/adv5.png";
import Adv6 from "../assets/adv6.png";
import factory from "../assets/factory.png";
import { ChevronDown, ChevronUp } from "lucide-react";
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
    <main className="flex flex-col w-full gap-4">
      <section className="w-full h-screen flex flex-col justify-center items-center bg-[url(/home_cover.png)] bg-cover ">
        <div className="w-full h-full flex flex-col justify-center items-center bg-black/60 ">
          <img width={216} height={96} src={logo} />
          <h1 className="text-white text-[64px] font-[Akshar] font-medium gap-5">
            The Future of Energy
          </h1>
          <a href="/contact">
            <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal ">
              BOOK A CALL
            </button>
          </a>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col justify-start items-center bg-white font-[Akshar] ">
        <div className="flex flex-row p-4 gap-5 w-full justify-start">
          <div className="flex flex-col w-full justify-center items-center text-[#0C33F2] p-4">
            <button className="border-[#0C33F2] border-2 rounded-md p-2 px-4">
              FOUNDED
            </button>
            <div className="font-semibold text-[108px]">2024</div>
            <div className="text-black w-3/4">
              Developed by IIT alumni - Voltra boasts a diverse,
              inter-disciplinary team of talent.
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center text-[#00C069] p-4">
            <button className="border-[#00C069] border-2 rounded-md p-2 px-4">
              REDUCED FOOTPRINT
            </button>
            <div className="font-semibold text-[108px]">90%</div>
            <div className="text-black w-3/4">
              less CO2 compared to cells made using coal power by 2030.
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center text-[#0C33F2] p-4">
            <button className="border-[#0C33F2] border-2 rounded-md p-2 px-4">
              CAPACITY
            </button>
            <div className="font-semibold text-[108px]">
              150<span className="text-[64px] font-normal">GWh</span>
            </div>
            <div className="text-black w-3/4">
              Voltra’s target for lithium-ion cell installed capacity by 2030.
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-auto justify-around">
          <img width={590} height={340} src={power} />

          <div className="font-[Akshar] w-[509px] h-[351px]">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full h-full">
                <h1 className="text-[#0C33F2] font-medium text-[40px]">
                  Revolutionizing the Battery Storage Landscape of India
                </h1>
                <div className="font-regular text-[16px]">
                  Voltra Energy is revolutionizing India's energy future with
                  advanced Battery Energy Storage Systems (BESS) utilizing
                  cutting-edge technology and world-class infrastructure.
                  Focused on indigenizing BESS solutions for renewable energy
                  integration, grid stabilization, and enhanced energy
                  reliability, the company serves residential, commercial, and
                  industrial sectors. With a gigafactory under development and a
                  strong emphasis on top-tier R&D, Voltra is driving innovation
                  in energy storage, supporting sustainable practices, and
                  contributing to the global shift toward cleaner, more
                  efficient energy.
                </div>
              </div>
              <Link
                reloadDocument
                className="flex flex-row items-center gap-2 text-[16px] text-[#00C069]"
                to={"/products"}
              >
                View our products <ArrowUpRight width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-4 ">
        <h1 className="flex flex-row w-full justify-center text-[40px] font-medium text-[#0C33F2]">
          Our Products
        </h1>
        <div className="flex flex-col w-full gap-8">
          <div className="flex flex-row w-full justify-center gap-4">
            <div className="flex flex-col w-[584px]">
              <div
                className="w-full bg-gray-300 rounded-tl-[4px] rounded-tr-[4px] rounded-bl-none rounded-br-none"
                style={{ height: "500px" }}
              >
                <img
                  src={VOLT_100}
                  alt="VOLT-100 ESS Cabinet"
                  width={584}
                  className="object-cover"
                  style={{ height: "100%", objectPosition: "top" }} // Object cover with crop from the bottom
                />
              </div>

              <div className="flex flex-col p-4 gap-4 w-[584px] bg-gray-100">
                <div>
                  <h1 className="text-[#0C33F2] text-[40px] font-medium">
                    VOLT-100
                  </h1>
                  <div className="text-black text-[14px]">
                    The all-in-one air-cooled ESS cabinet integrates a long-life
                    battery, efficient balancing BMS, high-performance PCS,
                    active safety system, smart distribution, and HVAC into one
                    cabinet, enabling long-term operation with safety,
                    stability, and reliability.
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
                        1P fast charge/discharge rate, energy storing &
                        releasing
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
                  reloadDocument
                  className="flex flex-row items-center gap-2 text-[14px] text-[#00C069]"
                  to={"/products"}
                >
                  Know More <ArrowUpRight width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-[584px]">
              <div
                className="w-full bg-gray-300 rounded-tl-[4px] rounded-tr-[4px] rounded-bl-none rounded-br-none"
                style={{ height: "500px" }}
              >
                <img
                  src={VOLT_HVC}
                  alt="VOLT-100 ESS Cabinet"
                  width={584}
                  className="object-cover"
                  style={{ height: "100%", objectPosition: "top" }} // Object cover with crop from the bottom
                />
              </div>

              <div className="flex flex-col p-4 gap-4 w-[584px] bg-gray-100">
                <div>
                  <h1 className="text-[#0C33F2] text-[40px] font-medium">
                    VOLT-HVC
                  </h1>
                  <div className="text-black text-[14px]">
                    The all-in-one air-cooled ESS cabinet integrates a long-life
                    battery, efficient balancing BMS, high-performance PCS,
                    active safety system, smart distribution, and HVAC into one
                    cabinet, enabling long-term operation with safety,
                    stability, and reliability.
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
                        1P fast charge/discharge rate, energy storing &
                        releasing
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
                  reloadDocument
                  className="flex flex-row items-center gap-2 text-[14px] text-[#00C069]"
                  to={"/products"}
                >
                  Know More <ArrowUpRight width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full justify-center gap-4">
            <a href="/products">
              <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal ">
                VIEW ALL PRODUCTS
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1kWX9pZ0KSg7l7vk-1HQHthldLIXiVu3U/view"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[#0C33F2] border-2 text-[#0C33F2] p-2 px-4 font-[Akshar] font-normal"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>
        </div>
      </section>

      <section className="w-full h-[626px] flex flex-col justify-around items-center bg-white font-[Akshar] gap-8">
        <div className="flex flex-row p-4 justify-around w-full items-center gap-8">
          <div className="flex flex-col w-[540px] gap-2">
            <h1 className="text-[#0C33F2] font-medium text-[40px]">
              INVESTING IN VOLTRA BESS IS MONEY{" "}
              <span className="text-[#00C069]"> IN THE BANK</span>
            </h1>
            <p>Calculate your savings and battery life.</p>
            <div>
              <input
                type="range"
                min="0"
                max="11"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="w-full appearance-none h-3 bg-gray-200 rounded-lg cursor-pointer accent-[#0C33F2]"
                style={{
                  WebkitAppearance: "none",
                  background: `linear-gradient(to right, #0C33F2 0%, #0C33F2 ${(year / 11) * 100}%, #e5e7eb ${(year / 11) * 100}%, #e5e7eb 100%)`,
                  transition: "all 0.3s ease",
                }}
              />
              <div className="flex flex-row w-full justify-between items-center mt-2">
                <p>1 year </p>
                <div className="text-[#0C33F2] font-medium">
                  Year {year + 1}
                </div>
                <p>12 years</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-around">
              <div className=" flex flex-col ">
                <div className="text-[36px] text-[#00C069] font-semibold">
                  90%
                </div>
                <div className="text-[14px] font-medium">Annual savings</div>
              </div>
              <div className=" flex flex-col">
                <div className="text-[36px] text-[#00C069] font-semibold">
                  2024
                </div>
                <div className="text-[14px] font-medium">Monthly savings</div>
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
            className={`flex flex-col ${section.width} border-r ${index < sections.length - 1 ? "border-white" : ""} h-full bg-black/20 hover:bg-black/50 justify-end items-end p-4 transition-all duration-300 ease-in-out relative overflow-hidden`}
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div
              className={`flex flex-col text-white w-3/4 justify-center p-4 gap-2 transition-transform duration-500 ease-in-out ${hoveredSection === section.id ? "transform -translate-y-8" : ""}`}
            >
              <h1 className="text-[40px]">{section.title}</h1>
              <p
                className={`text-[16px] transition-opacity duration-300 ${hoveredSection === section.id ? "opacity-100" : "opacity-80"}`}
              >
                {section.description}
              </p>
              <a
                className={`flex flex-row items-start gap-2 text-[14px] text-[#00C069] transition-opacity duration-300 ${hoveredSection === section.id ? "opacity-100" : "opacity-70"}`}
                href={section.link}
              >
                Know More <ArrowUpRight width={24} height={24} />
              </a>
            </div>
          </div>
        ))}
        <div className="flex flex-col w-[5%] h-full bg-black/50"></div>
      </section>

      {/* <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-8 ">
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
      </section> */}

      <section className="w-full flex flex-col justify-start items-center bg-white font-[Akshar]">
        <h2 className="text-3xl font-bold text-blue-600 my-8 text-center">
          The Voltra Advantage
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 p-2 w-[584px]">
            <div className="md:w-1/2 flex flex-col justify-around">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                Modular BESS
              </h3>
              <p className="text-sm mb-2">
                Voltra's Modular Cabinet configurations enable seamless scaling
                from kWh to MWh systems.
              </p>
              <p className="text-sm">
                These solutions offer superior efficiency and reliability, easy
                maintenance, and longer battery life.
              </p>
            </div>
            <div className="md:w-1/2 h-[336px]">
              <img
                src={Adva1}
                alt="Modular BESS system"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Card 2: Thermal Management */}
          <div className="flex flex-col md:flex-row gap-4 p-2 w-[584px]  h-[336px]">
            <div className="md:w-1/2 flex flex-col justify-around">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                Thermal Management
              </h3>
              <p className="text-sm mb-2">
                Our Technology is designed for the Indian climate, both for air
                and liquid cooling systems.
              </p>
              <p className="text-sm">
                Our uniform heat dissipation Technology ensures efficient
                performance and prolonging battery life.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={Adva2}
                alt="Thermal management system"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Card 3: Intelligent Communication */}
          <div className="flex flex-col md:flex-row gap-4 p-2 w-[584px]  h-[336px]">
            <div className="md:w-1/2 flex flex-col justify-around">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                Intelligent Communication
              </h3>
              <p className="text-sm mb-2">
                We have implemented intelligent communication between the DC and
                AC using AI technology.
              </p>
              <p className="text-sm">
                This helps in enhancing system robustness and reliability and
                enables fault detection.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={Adva3}
                alt="Intelligent communication system"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Card 4: Long Service Life */}
          <div className="flex flex-col md:flex-row gap-4 p-2 w-[584px]  h-[336px]">
            <div className="md:w-1/2 flex flex-col justify-around">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                Long Service Life
              </h3>
              <p className="text-sm mb-2">
                We have benchmarked battery cells based on components like
                cathode, anodes, electrolytes.
              </p>
              <p className="text-sm">
                This help us in achieving lower degradation rates and extended
                battery life.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={Adva4}
                alt="Long service life battery"
                className="w-full h-auto object-cover"
              />
            </div>
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
              <div className="text-black text-[16px] mt-5">
                An advanced manufacturing facility focused on producing
                cutting-edge electric vehicle (EV) batteries and energy storage
                solutions. Located in a strategic area to support sustainable
                energy and transportation innovations, the factory aims to
                significantly reduce the cost of battery production while
                increasing efficiency and performance.
              </div>
              <div className="text-black text-[16px] mt-5">
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
                  <div className="text-[10px] font-medium text-center">
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
                  <div className="text-[10px] font-medium text-center">
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
                  <div className="text-[10px] font-medium text-center">
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
                  <div className="text-[10px] font-medium text-center">
                    IP55, thermal management, cell difference ≤6°C
                  </div>
                </div>
              </div>
            </div>
            <a
              className="flex flex-row items-center gap-2 text-[14px] text-[#00C069] "
              href={"/technology"}
            >
              Explore the GigaFactory <ArrowUpRight width={24} height={24} />
            </a>
          </div>
        </div>
      </section>

      <section className="w-full h-[462px] flex flex-col justify-start items-center bg-white font-[Akshar] p-8  ">
        <div className="flex flex-row w-full h-auto justify-center items-center ">
          <div className="flex flex-col p-4 gap-4 w-[584px] h-[362px] ">
            <div>
              <h1 className="text-[#0C33F2] text-[40px] font-medium">
                KNOW ABOUT BEES
              </h1>
              <p className="mb-6">Have any more queries?</p>
              <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal ">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 bg-gray-50 rounded-lg justfy-evenly shadow-md p-6 h-[362px]">
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
