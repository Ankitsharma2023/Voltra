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

import power from "../assets/power.png";
import light from "../assets/light.svg";
import cloud from "../assets/cloud.png";
import bar from "../assets/bar.svg";
import gaurd from "../assets/gaurd.svg";
import waveGraphic from "../assets/wave.png";
import VOLT_100 from "../assets/VOLT_100.png";
import VOLT_215 from "../assets/VOLT_215.png";
import VOLT_HVC from "../assets/VOLT_HVC.png";
import VOLT_HVD from "../assets/VOLT_HVD.png";
import VOLT_LVS from "../assets/VOLT_LVS.png";
import VOLT_LVW from "../assets/VOLT_LVW.png";

// Define product data by category
const productData = {
  all: [
    {
      id: 1,
      image: VOLT_100,
      title: "VOLT-100",
      description:
        "The all-in-one smart BESS solution integrates a long-life battery, efficient bi-directional PCS, and active safety features. It ensures stable and efficient energy storage solutions with high safety, reliability, and scalability.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
    {
      id: 2,
      image: VOLT_215,
      title: "VOLT-215",
      description:
        "Advanced energy storage solution for medium to large applications with integrated energy management system and remote monitoring capabilities.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
    {
      id: 3,
      image: VOLT_HVC,
      title: "VOLT-HVC",
      description:
        "High-capacity solution for grid-scale applications with advanced thermal management and extended lifecycle.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
    {
      id: 4,
      image: VOLT_HVD,
      title: "VOLT-HVD",
      description:
        "Compact residential energy storage solution designed for home use with seamless solar integration.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
    {
      id: 4,
      image: VOLT_LVS,
      title: "VOLT-LVS",
      description:
        "Compact residential energy storage solution designed for home use with seamless solar integration.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
    {
      id: 4,
      image: VOLT_LVW,
      title: "VOLT-LVW",
      description:
        "Compact residential energy storage solution designed for home use with seamless solar integration.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
  ],
  residential: [
    {
      id: 1,
      image: VOLT_LVW,
      title: "VOLT-MINI",
      description:
        "Compact residential energy storage solution designed for home use with seamless solar integration.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
    {
      id: 2,
      image: VOLT_HVC,
      title: "VOLT-HOME",
      description:
        "All-in-one home energy solution with backup power capability and intelligent energy management system.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
  ],
  ci: [
    {
      id: 1,
      image: VOLT_HVD,
      title: "VOLT-1000",
      description:
        "The all-in-one smart BESS solution integrates a long-life battery, efficient bi-directional PCS, and active safety features. It ensures stable and efficient energy storage solutions with high safety, reliability, and scalability.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
    {
      id: 2,
      image: VOLT_LVS,
      title: "VOLT-2000",
      description:
        "Advanced energy storage solution for medium to large applications with integrated energy management system and remote monitoring capabilities.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
  ],
  utility: [
    {
      id: 1,
      image: VOLT_HVC,
      title: "VOLT-3000",
      description:
        "High-capacity solution for grid-scale applications with advanced thermal management and extended lifecycle.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
    {
      id: 2,
      image: VOLT_LVW,
      title: "VOLT-GRID",
      description:
        "Large-scale utility solution for grid stabilization and peak shaving applications with modular design for easy scaling.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
          desc: "Conversion efficiency over 90%, DoD over 96%",
        },
        {
          icon: cloud,
          title: "Smart O&M",
          desc: "Diversified monitoring by HMI (local), app/web (remote)",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
          desc: "IP55, thermal management, cell difference ≤6°C",
        },
      ],
    },
  ],
};

export default function ProductsCatalog() {
  const categories = [
    { key: "all", label: "ALL" },
    { key: "residential", label: "RESIDENTIAL BESS" },
    { key: "ci", label: "C&I BESS" },
    { key: "utility", label: "UTILITY BESS" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  // Get the filtered products based on active category
  const filteredProducts = productData[activeCategory];

  const handleCategoryClick = (key: string) => {
    setActiveCategory(key);
  };

  return (
    <main className="flex flex-col w-full gap-4 font-[Akshar]">
      <section className="flex flex-col md:flex-row items-center justify-between p-16 bg-white gap-4">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-600">
            Products Catalogue{" "}
          </h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-20">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg w-[584px] shadow-md p-5 bg-gray-100"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[336px] object-contain rounded bg-gray-100 p-2"
              />

              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-600">
                  {product.title}
                </h3>
                <p className="text-gray-700 mt-2 text-sm">
                  {product.description}
                </p>

                <div className="flex flex-row justify-around w-full gap-3 mt-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-center items-center gap-3"
                    >
                      <img src={feature.icon} width={36} height={36} />
                      <div className="flex flex-col justify-center items-center w-full">
                        <h1 className="text-black font-bold text-[10px]">
                          {feature.title}
                        </h1>
                        <div className="text-[8px] font-medium text-center">
                          {feature.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="text-green-600 font-semibold mt-3 inline-block text-sm"
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
