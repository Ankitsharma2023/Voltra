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


export default function ProductsCatalog() {
  const categories = [
    { key: "all", label: "ALL" },
    { key: "residential", label: "RESIDENTIAL BESS" },
    { key: "ci", label: "C&I BESS" },
    { key: "utility", label: "UTILITY BESS" },
  ];
  const numProducts = 8;
  const products = Array.from({ length: numProducts }, (_, index) =>
    index % 2 === 0 ? product1 : product2,
  );
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (key: string) => {
    setActiveCategory(key);
  };
  return (
    <main className="flex flex-col w-full gap-4">
      <section className="flex flex-col md:flex-row items-center justify-between p-16 bg-white gap-4">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-600">Products Catalogue </h2>
          <p className="text-gray-700">
            Voltra's Battery Energy Storage Systems (BESS) provide reliable,
            scalable solutions designed to optimize energy management for both
            commercial and residential applications. With advanced technology
            and high-performance batteries, Voltra's BESS helps improve grid
            stability, enhance energy efficiency, and support the integration of
            renewable energy sources. Our products are engineered for durability
            and long-term savings, making them an essential component in the
            transition to a cleaner, more sustainable energy future.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            DOWNLOAD BROCHURE
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="w-full h-64 flex items-center justify-center">
            <img src={product_main} alt="Product" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <nav className="w-full flex justify-center py-4 border-b mb-8">
          <ul className="flex space-x-6 text-gray-700 font-semibold">
            {categories.map(({ key, label }) => (
              <li key={key}>
                <button
                  onClick={() => handleCategoryClick(key)}
                  className={`flex items-center space-x-2 focus:outline-none ${
                    activeCategory === key
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "hover:text-blue-600"
                  }`}
                >
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-24">
          {products.map((product, index) => (
            <div key={index} className="rounded-lg shadow-md">
              <img
                src={product}
                alt="Volt-1000"
                className="w-full h-auto rounded"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mt-4">
                  VOLT-1000
                </h3>
                <p className="text-gray-700 mt-2">
                  The all-in-one smart BESS solution integrates a long-life
                  battery, efficient bi-directional PCS, and active safety
                  features. It ensures stable and efficient energy storage
                  solutions with high safety, reliability, and scalability.
                </p>

                <div className="flex flex-row justify-around w-full gap-4 mt-4">
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
                <a
                  href="#"
                  className="text-green-600 font-semibold mt-4 inline-block"
                >
                  Know more →
                </a>
              </div>
            </div>
          ))}
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
