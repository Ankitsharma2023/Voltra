import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import cloud from "../assets/cloud.png";
import energyIcon from "../assets/energy.svg";
import effiecientIcon from "../assets/effiecient.svg";
import gaurd from "../assets/gaurd.svg";
import longLifeIcon from "../assets/longLife.svg";
import batteryIcon from "../assets/battery.svg";
import future from "../assets/future.png";
import TechnicalSpecification from "./Technical";
import VOLT_100 from "../assets/VOLT_100.png";
import VOLT_215 from "../assets/VOLT_215.png";
import VOLT_HVC from "../assets/VOLT_HVC.png";
import VOLT_HVD from "../assets/VOLT_HVD.png";
import VOLT_LVS from "../assets/VOLT_LVS.png";
import VOLT_LVW from "../assets/VOLT_LVW.png";
// Updated flip card component using the PDF text
const FlippedCard = ({ text }) => {
  return (
    <h2 className="text-[12px] font-medium text-white text-center [transform:rotateX(180deg)]">
      {text}
    </h2>
  );
};

// Example data organized from the PDF
const pdfProductData = [
  {
    id: 1,
    name: "VOLT-100",
    image: VOLT_100,
    description:
      "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS, high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet. Suitable for industrial, commercial and residential applications.",
    technical: {
      DC_Side: {
        "Cell Type": "LFP 280Ah",
        "Rated Energy": "100.3 kWh",
        "Voltage Range": "313.6V - 408.8V",
        "Rated Voltage": "358.4V",
        Capacities: "100 | 301 | 501 | 602 kWH",
      },
      AC_Side: {
        "Hybrid Inverter Power": "50 kW",
        THDi: "≤ 3%",
        "DC Ratio": "0.5%lpn",
        "Nominal Voltage": "400 Vac/3P+N+PE",
        "Power Factor": "-1 lagging 1 leading",
        "Nominal Frequency": "50 Hz/60 Hz",
      },
      General: {
        Efficiency: "≥ 88% (Conversion efficiency over 90%)",
        "Charge/Discharge Rate": "1P",
        DoD: "over 96%; 95% (25±2°C)",
        "Cycle Life": "≥ 8,000 cycles",
        "Ingress Rating": "IP55",
        Cooling: "Forced air cooling",
        "Operating Temperature": "-25°C to 55°C",
        Humidity: "0-95% RH, non-condensing",
        Altitude: "≤ 2,000m",
        Dimensions: "900 x 1,270 x 2,300 mm",
        Weight: "~1,600 kg",
        "Cell Temperature Diff": "≤ 6°C",
        "Fire Safety": "Aerosol",
        Connectivity: "Ethernet/RS485",
      },
    },
    features: [
      {
        icon: energyIcon,
        label: "Energy Saving & Fast",
        text: "1P fast charge/discharge rate,energy storing & releasing",
      },
      {
        icon: effiecientIcon,
        label: "Economical & Efficient",
        text: "Conversion efficiency over 90%,DoD over 96%",
      },
      {
        icon: cloud,
        label: "Smart O&M",
        text: "Diversified monitoring by HMI(local), app/web (remote)",
      },
      {
        icon: gaurd,
        label: "Safe and Reliable",
        text: "IP55, thermal management,cell difference ≤6°C",
      },
    ],
  },
  {
    id: 2,
    name: "VOLT‑215",
    image: VOLT_215,
    description:
      "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS, high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet, enabling long-term operation with safety, stability, and reliability. Through AC side parallel connection, it achieves flexible capacity expansion up to MWH. Capacities: 215 KWH | 430 KWH | 860 KWH | 1.3 MWH",
    technical: {
      AC_Side: {
        "Rated Power": "100 kW",
        "Max. Power": "110 kW",
        THDi: "≤ 3%",
        "DC Ratio": "0.5%lpn",
        "Nominal Voltage": "400 Vac/3P+N+PE",
        "Power Factor": "-1 lagging -1 leading",
        "Nominal Frequency": "50 Hz/60 Hz",
      },
      DC_Side: {
        "Cell Type": "LFP 280Ah",
        PACK: "14.33 kWh/1P16S",
        "Battery System": "215 kWh/1P240S",
        "Voltage Range": "672 - 876 Vdc",
        "Rated Voltage": "768 Vdc",
      },
      General: {
        Efficiency: "≥ 90%",
        "Charge/Discharge Rate": "0.5 P",
        DoD: "95% (25±2°C)",
        "Cycle Life": "≥ 8,000 times",
        "Switching Time": "100ms",
        Connectivity: "Ethernet/RS485",
        "Ingress Rating": "IP55",
        Cooling: "Forced air cooling",
        "Operating Temperature": "-25°C-55°C",
        Humidity: "0-95%RH. non-condensing",
        Noise: "80 dB",
        Altitude: "≤ 2,000m (derating above 2,000m)",
        "Fire Safety": "Aerosol",
        "Dimensions (W D H)": "1,430 1,270 2,300 (mm)",
        Weight: "2,600 kg",
      },
    },
    features: [
      {
        label: "Economical and Efficient",
        text: "Conversion efficiency over 90%, DoD over 96%",
        icon: effiecientIcon,
      },
      {
        label: "Safe and Reliable",
        text: "IP55 protection, optimized ventilation, cells temp. difference ≤6°C",
        icon: gaurd,
      },
      {
        label: "Compact and Modular",
        text: "1.6 m2 footprint, modular, simplified parallel expansion",
        icon: energyIcon,
      },
      {
        label: "Smart O&M",
        text: "Diversified O&M access, both on app and Cloud",
        icon: cloud,
      },
    ],
  },
  {
    id: 3,
    name: "VOLT-HVC",
    description:
      "Voltra high voltage series uses a 3U standard modular design with multi-module in series and supports multi-cluster in parallel. Suitable for villas, farms, and small C&I power supplies.",
    image: VOLT_HVC,
    technical: {
      Overview: {
        "Available Capacities": "30.72 | 40.96 | 51.2 | 61.44 kWH",
      },
      "Module Specifications": {
        "Battery Module": "HVC05 [5.12 kWh]",
        "Cell Type": "100Ah LFP Prismatic Cell",
        "Number of Modules": "5 (Minimum), 7 (Normal), 9 (Normal), 11 (Max)",
        "System Nominal Energy": "25.60, 35.84, 46.08, 56.32 kWh",
        "Available System Energy": "23.0, 32.2, 41.4, 50.6 kWh",
        "Nominal Voltage": "256.0V, 358.4V, 460.8V, 563.2V",
        "Max. Output Power": "23.0, 32.2, 41.4, 50.6 kW",
        "Operating Voltage Range":
          "224.0~288.0V, 313.6~403.2V, 403.2~518.4V, 492.8~633.6V",
        "Max. Charging Current": "50A",
        "Max. Discharge Current": "100A",
      },
      "Management & Mechanical": {
        Feature:
          "Ultra-Long Life – Design life of 15 years, up to 6,000 cycles",
        "Intelligent Management":
          "Three-level architecture to identify module numbers and addresses",
      },
      General: {
        "Dimensions (W*D*H)": "550x1492x590 mm / 550x2100x590 mm",
        Weight: "264kg to 524kg",
        Communication: "CAN",
        Installation: "Floor-mounted",
        "Enclosure Rating": "IP20",
        "Cycle Life": "≥6000 Cycles @80%DOD & 70%EOL (at 25°C)",
        "Operating Temperature":
          "Charge: -5~50°C; Discharge: -20~50°C; Recommended: 15~35°C",
        "Operating Humidity": "5%~95% (Non-Condensing)",
        "Cooling Mode": "Natural Cooling",
        "Operating Altitude": "≤ 4000m",
      },
    },
    features: [
      {
        label: "Ultra-Long Life",
        text: "Design life of 15 years, can reach up to 6,000 cycles",
        icon: longLifeIcon,
      },
      {
        label: "Intelligent Management",
        text: "Three-level architecture, identify the number and address of modules",
        icon: cloud,
      },
      {
        label: "Safe and Reliable",
        text: "Design of 15 years, can reach upto 6,000 cycles",
        icon: gaurd,
      },
      {
        label: "Flexible Configuration",
        text: "Multi-module series, to meet the requirements",
        icon: energyIcon,
      },
    ],
  },
  {
    id: 4,
    name: "VOLT-HVD",
    description:
      "Designed to cover a DC voltage range of 204V ~ 512V with standby power for 10–60 minutes, ideal for backup in data centers, UPS, and communication systems.",
    image: VOLT_HVD,
    technical: {
      Specifications: {
        Models: "HVD 51.2 and HVD 102.4",
        "Rated Voltage": "512Vdc",
        "Rated Capacity": "100Ah / 200Ah",
        "Available Capacities": "51.2 kWh, 102.4 kWh",
        "Rated Energy": "51.2 kWh, 102.4 kWh",
        "Available System Energy": "46.08 kWh, 92.16 kWh",
        "Operating Voltage Range": "400~576Vdc",
        "Rated Charging Voltage": "576Vdc",
        "Charging Current": "0.5C, maximum 1C",
      },
      "Additional Features": {
        "Communication Interface": "RS485, CAN, cry contact, Ethernet port",
        "Battery Module Type": "51.2V100Ah (1P16S) / 51.2V200Ah (2P16S)",
        "System Composition": "10 battery modules + 1 high voltage box",
        Size: "600x1000x2000 mm / 600x1100x2000 mm",
        "Module Weight": "51kg / 98kg",
        Weight: "About 720kg / About 1177.6kg",
        "Parallel Number": "Maximum 16 cabinets in parallel",
        "Working Temperature": "0~45°C",
        "Storage Temperature": "-20~55°C",
        Altitude: "0~4000m",
        Humidity: "5%~95% RH",
        Protection:
          "Over voltage, over temperature, under voltage, under temperature",
        "Communication Protocol": "Modbus TCP/RTU, CAN2.0B",
        "Fire Fighting System": "Perfluorohexanone (optional)",
      },
    },
    features: [
      {
        label: "Energy Saving and Fast",
        text: "Conversion efficiency over 90%, DoD over 96%",
        icon: energyIcon,
      },
      {
        label: "Economical and Efficient",
        text: "Conversion efficiency over 90%, DoD over 96%",
        icon: effiecientIcon,
      },
      {
        label: "Smart O&M",
        text: "Conversion efficiency over 90%, DoD over 96%",
        icon: cloud,
      },
      {
        label: "Safe and Reliable",
        text: "Conversion efficiency over 90%, DoD over 96%",
        icon: gaurd,
      },
    ],
  },
  {
    id: 5,
    name: "VOLT-LVS",
    description:
      "An industrial aesthetic, N+1 stackable design ESS composed of 100Ah modules. Expandable up to 102 kWh, ideal for grid-connected and off-grid applications.",
    image: VOLT_LVS,
    technical: {
      Specifications: {
        "Battery Module": "LVS05",
        "Cell Type": "100Ah LFP Prismatic Cell",
        "Available Capacities": "5.1, 10.2, 15.3, 20.4 kWh",
        "Number of Modules": "1, 2, 3, 4",
        "Nominal Voltage": "51.2V",
        "Operating Voltage Range": "45.0~56.4V",
        "System Nominal Energy": "5.12, 10.24, 15.36, 20.48 kWh",
        "Available System Energy": "4.86, 9.72, 14.6, 19.45 kWh",
        "Max. Output Power": "5kW, 10kW, 15kW, 20kW",
        "Peak Output Power":
          "5.4kW (10s), 10.5kW (10s), 15.5kW (10s), 20.0kW (10s)",
        "Max. Charging Current": "50A, 1000A, 150A, 200A",
        "Max. Discharge Current": "100A, 180A, 270A, 270A",
        "Charge/Discharge Efficiency": "≥97%",
      },
      "Additional Features": {
        "Dimensions (W*D*H)":
          "580x250x440 mm; 580x400x440 mm; 580x550x440 mm; 580x700x440 mm",
        Weight: "46kg, 105kg, 152kg, 200kg",
        Communication: "CAN/RS485",
        Installation: "Stack/Wall/Stand",
        "Enclosure Rating": "IP21",
        "Cycle Life": "≥6000 cycles @80%DOD & 70%EOL (at 25°C)",
        "Operating Temperature":
          "Charge: -5~50°C; Discharge: -20~50°C; Recommended: 15~35°C",
        "Operating Humidity": "5%~95% (Non-Condensing)",
        "Cooling Mode": "Natural Cooling",
        "Operating Altitude": "≤4000m",
        "Optional Features":
          "Expansion options for anti-theft, fire protection, etc.",
      },
    },
    features: [
      {
        label: "Wide Compatibility",
        text: "Matches 20+ brands of mainstream inverters",
        icon: energyIcon,
      },
      {
        label: "High Security",
        text: "Self-produced 100Ah LFP prismatic cell, highly safe",
        icon: gaurd,
      },
      {
        label: "Ultra-Long Life",
        text: "Design of 15 years, can reach upto 6,000 cycles",
        icon: longLifeIcon,
      },
      {
        label: "High Scalability",
        text: "Optional expansion functions like anti-theft, fire protection, etc.",
        icon: batteryIcon,
      },
    ],
  },
  {
    id: 6,
    name: "VOLT-LVW",
    description:
      "A wall-mounted, compact, and efficient solution for storing electrical energy in residential or small commercial applications. Supports up to 8 batteries in parallel and expandable up to 41 kWh.",
    image: VOLT_LVW,
    technical: {
      Specifications: {
        "Battery Module": "HP10-F5",
        "Cell Type": "LFP",
        "Nominal Voltage": "51.2V",
        "Operating Voltage Range": "45.0-56.4V",
        "Number of Modules": "1",
        "Available Energy": "5.12 kWh",
        "Max. Output Power": "5kW",
        "Peak Output Power": "5.4kW (10s)",
        "Max. Charging Current": "50A",
        "Max. Discharge Current": "100A",
        "Charge/Discharge Efficiency": "≥97%",
      },
      "Additional Features": {
        Installation:
          "Wall mounted or Floor mounted, saving installation time & cost",
        Dimensions: "590 x 510 x 177 mm",
        Weight: "50kg",
        Communication: "CAN/RS485",
        "Operating Temperature":
          "Charge: -5~50°C; Discharge: -20~50°C; Recommended: 15~35°C (-20°C~55°C)",
        "Operating Altitude": "≤4000m",
        Scalability: "1~20",
        Lifespan: "More than 15 years, >6000 cycles (0.5C, 25°C)",
      },
    },
    features: [
      {
        label: "Flexible and Compatible",
        text: "5.12kWh modular design, support 1-8 in parallel",
        icon: energyIcon,
      },
      {
        label: "Easy Installation",
        text: "Wall mounted/floor mounted, save installation time & cost",
        icon: effiecientIcon,
      },
      {
        label: "Environmental Adaptability",
        text: "Wider temperature range: -20°C~55°C",
        icon: cloud,
      },
      {
        label: "Long Lifespan",
        text: "More than 15 years designed lifespan, >6000 cycles (0.5C, 25°C)",
        icon: longLifeIcon,
      },
    ],
  },
];

export default function Solutions() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [searchParams] = useSearchParams();
  const [productId, setProductId] = useState(1);

  // Read id from URL search params and update state
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setProductId(parseInt(id));
    }
  }, [searchParams]);

  // Select product based on id (cycling through the pdf data)
  const selectedProduct =
    pdfProductData[(productId - 1) % pdfProductData.length];

  return (
    <main className="flex flex-col w-full gap-4 font-[Akshar] pt-12 overflow-clip">
      {/* Product Header */}
      <section className="flex flex-col md:flex-row items-center justify-between p-16 bg-white gap-4">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-600">
            {selectedProduct.name}
          </h2>
          <p className="text-gray-700">{selectedProduct.description}</p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            ORDER NOW
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="w-full h-64 flex items-center justify-center ml-20 p-10">
            <img
              src={selectedProduct.image}
              alt="Product"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Product Showcase with Icons */}
      <section className="w-full h-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-8">
        <div className="flex flex-row w-full justify-around gap-4 py-4 pr-4">
          <div className="flex flex-col w-[336px] justify-start">
            <img
              src={selectedProduct.image}
              alt="Product Showcase"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 p-4 w-[584px]">
            {selectedProduct.features.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col w-[173px] h-[137px] justify-center items-center ${
                  hoverIndex === index ? "bg-[#0C33F2]" : "bg-[#FAFAFA]"
                } gap-4 transition duration-1000 ${
                  hoverIndex === index && "hover:[transform:rotateX(180deg)]"
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(-1)}
              >
                {hoverIndex === index ? (
                  <FlippedCard text={item.text} />
                ) : (
                  <>
                    <img src={item.icon} alt={item.label} />
                    <h2 className="text-[14px] font-bold">{item.label}</h2>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section>
        <TechnicalSpecification tableData={selectedProduct.technical} />
      </section>

      {/* Brochure Section */}
      <section className="flex justify-center items-center w-full h-full p-4 relative overflow-hidden">
        <div className="relative bg-[#0C33F2] rounded-lg p-8 text-white flex flex-row items-center justify-between md:px-24 w-[1200px] h-[323px]">
          <div className="md:w-2/3 space-y-4 z-10">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Explore if the {selectedProduct.name} is the ideal solution for
              your needs.
            </h2>
            <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow-md hover:bg-gray-100 transition">
              DOWNLOAD BROCHURE
            </button>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <img
              src={future}
              alt="Brochure"
              className="w-[250px] md:w-[280px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
