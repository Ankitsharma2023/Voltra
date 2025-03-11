import React, { useState } from "react";
import logo from "../assets/logo.png";
import power from "../assets/power.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
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
          <a href ="/contact">
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
      <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-8 ">
        <h1 className="flex flex-row w-full justify-center text-[40px] font-medium text-[#0C33F2]">
          Our Products
        </h1>

        <div className="flex flex-row w-full justify-around p-4 gap-4">
          <div className="flex flex-col gap-4 w-[584px]">
            <img src={product1} width={584} height={336} />
            <div className="flex flex-col p-4 gap-4 w-[584px]">
              <div>
                <h1 className="text-[#0C33F2] text-[40px] font-medium">
                  VOLT-1000
                </h1>
                <div className="text-black text-[14px]">
                  The all-in-one air-cooled ESS cabinet integrates a long-life
                  battery, efficient balancing BMS, high-performance PCS, active
                  safety system, smart distribution, and HVAC into one cabinet,
                  enabling long-term operation with safety, stability, and
                  reliability.
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
                reloadDocument
                className="flex flex-row items-center gap-2 text-[14px] text-[#00C069]"
                to={"/products"}
              >
                Know More <ArrowUpRight width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4 w-[584px]">
            <img src={product2} height={336} />
            <div className="flex flex-col p-4">
              <h1 className="text-[#0C33F2] text-[40px] font-medium">
                VOLT-1000
              </h1>
              <div className="text-black text-[14px]">
                The all-in-one air-cooled ESS cabinet integrates a long-life
                battery, efficient balancing BMS, high-performance PCS, active
                safety system, smart distribution, and HVAC into one cabinet,
                enabling long-term operation with safety, stability, and
                reliability.
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
              reloadDocument
              className="flex flex-row items-center gap-2 text-[14px] text-[#00C069]"
              to={"/products"}
            >
              Know More <ArrowUpRight width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center gap-4">
          <a href="/products">
          <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal ">
            VIEW ALL PRODUCTS
          </button>
          </a>
          <button className="border-[#0C33F2] border-2 text-[#0C33F2] p-2 px-4 text-#0C33F2 font-[Akshar] font-normal ">
            DOWNLOAD BROCHURE
          </button>
        </div>
      </section>
      <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-8">
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
                max="12"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value) - 1)}
                className="w-full bg-gray-200 rounded-lg h-2 [&::-moz-range-track]:h-[24px] [&::-webkit-slider-runnable-track]:h-[24px] [&::-ms-track]:h-[24px] cursor-pointer accent-[#0C33F2]"
              />
              <div className="flex flex-row w-full justify-between items-center">
                <p>1 month</p>
                <p>8-10 years</p>
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
        <a
          reloadDocument
          className="flex flex-row items-start gap-2 text-[14px] text-[#00C069]"
          href={"/products"}
        >
          Know More <ArrowUpRight width={24} height={24} />
        </a>
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
            <Link
              className="flex flex-row items-center gap-2 text-[14px] text-[#00C069] "
              to={"/products"}
            >
              Explore the GigaFactory <ArrowUpRight width={24} height={24} />
            </Link>
          </div>
        </div>
      </section>

      <section className="w-[1440px] h-[629px] flex flex-col justify-start items-center bg-white font-[Akshar]  ">
        <div className="flex flex-row w-full h-auto justify-around items-center ">
          <div className="flex flex-col p-4 gap-4 w-[584px] ">
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
          <div className="md:col-span-3 bg-gray-50 rounded-lg shadow-md p-6 h-auto">
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
