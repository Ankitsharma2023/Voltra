import React, { useEffect, useState } from "react";

import product_main from "../assets/product_main.png";

import light from "../assets/light.svg";
import cloud from "../assets/cloud.png";
import bar from "../assets/bar.svg";
import gaurd from "../assets/gaurd.svg";
import waveGraphic from "../assets/wave.png";
import Puzzle from "../assets/Puzzle.png";
import Battery from "../assets/Battery.png";
import Hand from "../assets/Hand.png";
import Cube from "../assets/Cube.png";
import Temp from "../assets/Temp.png";

import VOLT_100 from "../assets/VOLT_100.png";
import VOLT_MAX from "../assets/VOLT_MAX.png";
import VOLT_215 from "../assets/VOLT_215.png";
import VOLT_HVD from "../assets/VOLT_HVD.png";
import VOLT_LVS from "../assets/VOLT_LVS.png";
import VOLT_LVW from "../assets/VOLT_LVW.png";
import VOLT_LINK from "../assets/VOLT_LINK.png";
import VOLT_LINK_AIR from "../assets/VOLT_LINK_AIR.png";
import VOLT_MAX_AIR from "../assets/VOLT_MAX_AIR.png";
import VOLT_HVC from "../assets/VOLT_HVC.png";
import { useSearchParams } from "react-router-dom";
import VOLT_MAX_EDIT from "../assets/VOLT_MAX_EDIT.png";

// Define product data by category
const productData = {
  all: [
    {
      id: 7,
      image: VOLT_MAX_EDIT,
      title: "VOLT-MAX",
      description:
        "The ESS container product integrates PACK, EMS, BMS, HVAC, fire safety system into one container. It has the advantages of high energy density, easy transportation & installation, and high protection level. The DC output can combine with PCS-boost container to realize AC network connection at medium/high voltage . It can be applied to the generation and grid side.",
      features: [
        {
          icon: Temp,
          title: "Better Temperature Control",
        },
        {
          icon: bar,
          title: "Lower Local Power Consumption",
        },
        {
          icon: Cube,
          title: "Higher Energy Density",
          
        },
        {
          icon: gaurd,
          title: "High Protection",
        },
      ],
    },
    {
      id: 8,
      image: VOLT_MAX_AIR,
      title: "VOLT-MAX-AIR",
      description:
        "The ESS container product integrates PACK, EMS, BMS, HVAC, fire safety system into one container.It has the advantages of high energy density, easy transportation & installation, and high protection level. The DC output can combine with PCS-boost container to realize AC network connection at medium/high voltage . It can be applied to the generation and grid side.",
      features: [
        {
          icon: Temp,
          title: "Better Temperature Control",
        },
        {
          icon: bar,
          title: "Lower Local Power Consumption",
        },
        {
          icon: Cube,
          title: "Higher Energy Density",
        },
        {
          icon: gaurd,
          title: "Higher Protection",
        },
      ],
    },
    {
      id: 6,
      image: VOLT_LINK,
      title: "VOLT-LINK",
      description:
      "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. Through AC side parallel connection, it achieves flexible capacity expansion up to MWH.",
      features: [
        {
          icon: Hand,
          title: "High Integration",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: Temp,
          title: "Efficient Cooling",
        },
        {
          icon: Cube,
          title: "Compact and Modular",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
      ],
    },,
    {
      id: 9,
      image: VOLT_LINK_AIR,
      title: "VOLT-LINK-AIR",
      description:
        "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. Through AC side parallel connection, it achieves flexible capacity expansion up to MWH.",
      features: [
        {
          icon: Cube,
          title: "Compact and Modular",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
        },
        {
          icon: cloud,
          title: "Smart O&M",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
      ],
    },
    {
      id: 1,
      image: VOLT_100,
      title: "VOLT-100",
      description:
      "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. It’s suitable for various application scenarios such as Industry, Warehouses, Schools, Commercial Malls, Construction sites etc. ",
            features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
        },
        {
          icon: cloud,
          title: "Smart O&M",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
      ],
    },
    // 
    {
      id: 2,
      image: VOLT_HVC,
      title: "VOLT-HVC",
      description:
      "Voltra high voltage series uses a 3U standard modular design, with multi-module in series and support multi-cluster in parallel. It's suitable for various application scenarios such as villas, farms, and small C&I power supplies, and provides a complete set of green, low-carbon, and reliable energy solutions.",
      features: [
        {
          icon: Battery,
          title: "Ultra-Long Life",        },
        {
          icon: bar,
          title: "Economical and Efficient",
        },
        {
          icon: cloud,
          title: "Intelligent Management",
        },
        {
          icon: light,
          title: "Flexible Configuration",
        },
      ],
    },
    {
      id: 3,
      image: VOLT_HVD,
      title: "VOLT-HVD",
      description:
      "Through modular design and flexible configuration, it covers the DC voltage range of 204v ~ 512v and the standby power demand of 10 ~ 60 minutes. It can be used as a backup power supply in communication core machine room, UPS host room, Internet Data Center (IDC), edge data center, data information port, DC remote power supply, traffic dispatching center, intelligent manufacturing, and other fields.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
        },
        {
          icon: cloud,
          title: "Smart O&M",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
      ],
    },
    {
      id: 4,
      image: VOLT_LVS,
      title: "VOLT-LVS",
      description:
      "It adopts an industrial aesthetic and N+1 stackable design. The system is composed of 100Ah modules, supports a maximum of 20 parallel groups, and the capacity can be expanded to 102kWh. Matched with mainstream brands of inverters, the system can be applied to gridconnected, off-grid, photovoltaic, and all kinds of green and low-carbon applications of household ESS.",
      features: [
        {
          icon: Puzzle,
          title: "Wide Compatibility",
        },
        {
          icon: Battery,
          title: "Ultra-Long Life",

        },
        {
          icon: Cube,
          title: "High Scalability",
        },
        {
          icon: gaurd,
          title: "High Security",
        },
      ],
    },
    {
      id: 5,
      image: VOLT_LVW,
      title: "VOLT-LVW",
      description:
      "This wall-mounted system is a compact, efficient, and space-saving solution for storing electrical energy, typically used in residential or small commercial applications. These systems are installed on a wall, either inside or outside a building, and are designed to optimize energy usage, improve power reliability, and allow integration with renewable energy sources such as solar panels. Can support a maximum of up to 8 batteries in parallel and the capacity can be expanded to 41 kWh.",
      features: [
        {
          icon: Puzzle,
          title: "Flexible and Comaptible",
         
        },
        {
          icon: Hand,
          title: "Easy Installation",
          
        },
        {
          icon: Battery,
          title: "Long LifeSpan",
        
        },
        {
          icon: Temp ,
          title: "Environmental Adaptability",
         
        },
      ],
    },
  







  ],
  residential: [

    {
      id: 4,
      image: VOLT_LVS,
      title: "VOLT-LVS",
      description:
      "It adopts an industrial aesthetic and N+1 stackable design. The system is composed of 100Ah modules, supports a maximum of 20 parallel groups, and the capacity can be expanded to 102kWh. Matched with mainstream brands of inverters, the system can be applied to gridconnected, off-grid, photovoltaic, and all kinds of green and low-carbon applications of household ESS.",
      features: [
        {
          icon: Puzzle,
          title: "Wide Compatibility",
        },
        {
          icon: Battery,
          title: "Ultra-Long Life",

        },
        {
          icon: Cube,
          title: "High Scalability",
        },
        {
          icon: gaurd,
          title: "High Security",
        },
      ],
    },
    {
      id: 5,
      image: VOLT_LVW,
      title: "VOLT-LVW",
      description:
      "This wall-mounted system is a compact, efficient, and space-saving solution for storing electrical energy, typically used in residential or small commercial applications. These systems are installed on a wall, either inside or outside a building, and are designed to optimize energy usage, improve power reliability, and allow integration with renewable energy sources such as solar panels. Can support a maximum of up to 8 batteries in parallel and the capacity can be expanded to 41 kWh.",
      features: [
        {
          icon: Puzzle,
          title: "Flexible and Comaptible",
         
        },
        {
          icon: Hand,
          title: "Easy Installation",
          
        },
        {
          icon: Battery,
          title: "Long LifeSpan",
        
        },
        {
          icon: Temp ,
          title: "Environmental Adaptability",
         
        },
      ],
    },
    {
      id: 2,
      image: VOLT_HVC,
      title: "VOLT-HVC",
      description:
        "Voltra high voltage series uses a 3U standard modular design, with multi-module in series and support multi-cluster in parallel. It's suitable for various application scenarios such as villas, farms, and small C&I power supplies, and provides a complete set of green, low-carbon, and reliable energy solutions.",
      features: [
        {
          icon: Battery,
          title: "Ultra-Long Life",
        },
        {
          icon: cloud,
          title: "Intelligent Management",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
        {
          icon: light,
          title: "Flexible Configuration",
        },
      ],
    },
  ],
  ci: [
    {
      id: 9,
      image: VOLT_LINK_AIR,
      title: "VOLT-LINK-AIR",
      description:
        "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. Through AC side parallel connection, it achieves flexible capacity expansion up to MWH.",
      features: [
        {
          icon: Cube,
          title: "Compact and Modular",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
        },
        {
          icon: cloud,
          title: "Smart O&M",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
      ],
    },
    {
      id: 2,
      image: VOLT_HVC,
      title: "VOLT-HVC",
      description:
        "Voltra high voltage series uses a 3U standard modular design, with multi-module in series and support multi-cluster in parallel. It's suitable for various application scenarios such as villas, farms, and small C&I power supplies, and provides a complete set of green, low-carbon, and reliable energy solutions.",
      features: [
        {
          icon: Battery,
          title: "Ultra-Long Life",
        },
        {
          icon: cloud,
          title: "Intelligent Management",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
        {
          icon: light,
          title: "Flexible Configuration",
        },
      ],
    },
    {
      id: 3,
      image: VOLT_HVD,
      title: "VOLT-HVD",
      description:
      "Through modular design and flexible configuration, it covers the DC voltage range of 204v ~ 512v and the standby power demand of 10 ~ 60 minutes. It can be used as a backup power supply in communication core machine room, UPS host room, Internet Data Center (IDC), edge data center, data information port, DC remote power supply, traffic dispatching center, intelligent manufacturing, and other fields.",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
        },
        {
          icon: cloud,
          title: "Smart O&M",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
      ],
    },
    {
      id: 6,
      image: VOLT_LINK,
      title: "VOLT-LINK",
      description:
        "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. Through AC side parallel connection, it achieves flexible capacity expansion up to MWH.",
      features: [
        {
          icon: Hand,
          title: "High Integration",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: Temp,
          title: "Efficient Cooling",
        },
        {
          icon: Cube,
          title: "Compact and Modular",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
      ],
    },
    {
      id: 1,
      image: VOLT_100,
      title: "VOLT-100",
      description:
        "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. It’s suitable for various application scenarios such as Industry, Warehouses, Schools, Commercial Malls, Construction sites etc. ",
      features: [
        {
          icon: light,
          title: "Energy Saving and Fast",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
        },
        {
          icon: cloud,
          title: "Smart O&M",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
      ],
    },
    
  ],
  utility: [
    {
      id: 6,
      image: VOLT_LINK,
      title: "VOLT-LINK",
      description:
        "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. Through AC side parallel connection, it achieves flexible capacity expansion up to MWH.",
      features: [
        {
          icon: Hand,
          title: "High Integration",
          desc: "1P fast charge/discharge rate, energy storing & releasing",
        },
        {
          icon: Temp,
          title: "Efficient Cooling",
        },
        {
          icon: Cube,
          title: "Compact and Modular",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
        },
      ],
    },

    {
      id: 7,
      image: VOLT_MAX,
      title: "VOLT-MAX",
      description:
        "The ESS container product integrates PACK, EMS, BMS, HVAC, fire safety system into one container. It has the advantages of high energy density, easy transportation & installation, and high protection level. The DC output can combine with PCS-boost container to realize AC network connection at medium/high voltage . It can be applied to the generation and grid side.",
      features: [
        {
          icon: Temp,
          title: "Better Temperature Control",
        },
        {
          icon: bar,
          title: "Lower Local Power Consumption",
        },
        {
          icon: Cube,
          title: "Higher Energy Density",
          
        },
        {
          icon: gaurd,
          title: "High Protection",
        },
      ],
    },
 
    {
      id: 8,
      image: VOLT_MAX_AIR,
      title: "VOLT-MAX-AIR",
      description:
        "The ESS container product integrates PACK, EMS, BMS, HVAC, fire safety system into one container.It has the advantages of high energy density, easy transportation & installation, and high protection level. The DC output can combine with PCS-boost container to realize AC network connection at medium/high voltage . It can be applied to the generation and grid side.",
      features: [
        {
          icon: Temp,
          title: "Better Temperature Control",
        },
        {
          icon: bar,
          title: "Lower Local Power Consumption",
        },
        {
          icon: Cube,
          title: "Higher Energy Density",
        },
        {
          icon: gaurd,
          title: "Higher Protection",
        },
      ],
    },
    {
      id: 9,
      image: VOLT_LINK_AIR,
      title: "VOLT-LINK-AIR",
      description:
        "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. Through AC side parallel connection, it achieves flexible capacity expansion up to MWH.",
      features: [
        {
          icon: Cube,
          title: "Compact and Modular",
        },
        {
          icon: bar,
          title: "Economical and Efficient",
        },
        {
          icon: cloud,
          title: "Smart O&M",
        },
        {
          icon: gaurd,
          title: "Safe and Reliable",
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

  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveCategory(cat);
    }
  }, []);
  // Get the filtered products based on active category
  const filteredProducts = productData[activeCategory];

  const handleCategoryClick = (key: string) => {
    setActiveCategory(key);
  };

  return (
    <main className="flex flex-col w-full gap-4 font-[Akshar]">
      {/* Hero section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 px-6 md:px-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
              <span className="border-b-2 border-transparent transition-all duration-200">
                Product Catalogue
              </span>
            </h2>
            <p className="text-gray-700 font-gilroy text-[16px] mb-6">
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
          <div className="w-full md:w-1/2 mt-8 md:mt-0 px-6 md:px-12">
            <img src={product_main} alt="Product" className="w-full object-contain" />
          </div>
        </div>
      </section>

      {/* Category navigation */}
      <section className="px-8 py-8">
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

  {/* Product grid with exactly matching dimensions */}
  <div className="max-w-[1200px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          onClick={() => window.location.href = `/solutions?id=${product.id}`}
          className="flex flex-col w-[584px] bg-white shadow-sm hover:shadow-md rounded-md overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
        >
          {/* Product Image - matched height and padding */}
          <div className="h-[400px] bg-[#EDEDED] p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-contain"
            />
          </div>

          {/* Product Info - matched padding and background */}
          <div className="flex flex-col p-6 bg-[#FAFAFA]">
            <h1 className="text-[#0C33F2] text-3xl font-medium mb-2">
              {product.title}
            </h1>
            <p className="text-black text-sm mb-6">
              {product.description}
            </p>

            {/* Features - matched grid and spacing */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              {product.features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="mb-2" 
                    width={36} 
                    height={36} 
                  />
                  <p className="text-black text-xs font-medium text-center">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Know More Link - visual indicator only since entire card is clickable */}
            <div className="inline-flex items-center text-[#00C069] text-sm font-medium">
              <span className="border-b-2 border-transparent hover:border-[#00C069] hover:font-semibold transition-all duration-200">
                Know more
              </span>
              <svg className="ml-1" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA section */}
      <section className="flex flex-col justify-center items-center w-full h-full p-4 relative overflow-hidden mb-12">
        <div className="relative bg-[#0C33F2] rounded-lg p-8 text-white overflow-hidden flex flex-col md:flex-row items-center justify-between md:px-24 w-3/4 h-full">
          <div className="md:w-2/3 space-y-4 z-10">
            <h2 className="text-2xl md:text-3xl font-semibold whitespace-nowrap">
              We offer tailored customization to meet your needs.
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold">
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
