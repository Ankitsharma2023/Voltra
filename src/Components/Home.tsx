import React from "react";
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
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function Home() {
  return (
    <main className="flex flex-col w-full gap-4">
      <section className="w-full h-screen flex flex-col justify-center items-center bg-[url(/home_cover.png)] bg-cover ">
        <div className="w-full h-full flex flex-col justify-center items-center bg-black/60 ">
          <img width={216} height={96} src={logo} />
          <h1 className="text-white text-[64px] font-[Akshar] font-medium gap-5">
            The Future of Energy
          </h1>
          <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal ">
            BOOK A CALL
          </button>
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
                <div className="font-regular text-[14px]">
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
                className="flex flex-row items-center gap-2 text-[14px] text-[#00C069]"
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
              className="flex flex-row items-center gap-2 text-[14px] text-[#00C069]"
              to={"/products"}
            >
              Know More <ArrowUpRight width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center gap-4">
          <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal ">
            VIEW ALL PRODUCTS
          </button>
          <button className="border-[#0C33F2] border-2 text-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal ">
            DOWNLOAD BROCHURE
          </button>
        </div>
      </section>
      <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-8">
        <div className="flex flex-row p-4 justify-around items-center gap-2">
          <div className="flex flex-col w-[540px] gap-2">
            <h1 className="text-[#0C33F2] font-medium text-[40px]">
              INVESTING IN VOLTRA BESS IS MONEY{" "}
              <span className="text-[#00C069]"> IN THE BANK</span>
            </h1>
            <p>Calculate your savings and battery life.</p>
            <img src={slidebar} width={584} height={62} />
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
          <img src={invesment} width={540} height={386} />
        </div>
        <Link
          className="flex flex-row items-start gap-2 text-[14px] text-[#00C069]"
          to={"/products"}
        >
          Know More <ArrowUpRight width={24} height={24} />
        </Link>
      </section>
      <section className="w-full h-screen flex flex-row font-[Akshar] bg-[url(/factory.png)] bg-cover">
        <div className="flex flex-col w-[35%] border-r border-white h-full bg-black/50 justify-end items-end p-4">
          <div className="flex flex-col text-white w-3/4 justify-center p-4 gap-2">
            <h1 className="text-[40px]">ISLAND</h1>
            <p className="text-[14px]">
              Voltra's Battery Energy Storage Systems are super efficient in
              island mode, which ensures a reliable stand-alone power solution
              that works even during disconnection from the grid. Discover how
              homes and businesses stay powered up when the grid goes down.
              unlock the secrets of Island Mode.
            </p>
            <Link
              className="flex flex-row items-start gap-2 text-[14px] text-[#00C069]"
              to={"/products"}
            >
              Know More <ArrowUpRight width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[30%] border-r border-white h-full bg-black/20 justify-end items-end p-4">
          <div className="flex flex-col text-white w-3/4 justify-center p-4 gap-2">
            <h1 className="text-[40px]">Hybrid</h1>

            <Link
              className="flex flex-row items-start gap-2 text-[14px] text-[#00C069]"
              to={"/products"}
            >
              Know More <ArrowUpRight width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[30%] border-white h-full bg-black/20 justify-end items-end p-4">
          <div className="flex flex-col text-white w-3/4 justify-center p-4 gap-2">
            <h1 className="text-[40px]">MICROGRID</h1>

            <Link
              className="flex flex-row items-start gap-2 text-[14px] text-[#00C069]"
              to={"/products"}
            >
              Know More <ArrowUpRight width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[5%] h-full bg-black/50"></div>
      </section>
    </main>
  );
}
