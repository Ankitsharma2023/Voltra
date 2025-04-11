import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import future from "../assets/future.png";
import power from "../assets/power.png";
import cellType from "../assets/cellType.svg";
import batterySystem from "../assets/batterySystem.svg";
import cycleLife from "../assets/cycleLife.svg";
import dod from "../assets/dod.svg";
import ratedPower from "../assets/ratedPower.svg";
import ratedVoltage from "../assets/ratedVoltage.svg";
import readme from "../assets/readme.svg";
import effieciency from "../assets/effieciency.svg";
import light from "../assets/light.svg";
import cloud from "../assets/cloud.png";
import bar from "../assets/bar.svg";
import gaurd from "../assets/gaurd.svg";
import waveGraphic from "../assets/wave.png";
import TechnicalSpecification from "./Technical";
import VOLT_100 from "../assets/VOLT_100.png";
import VOLT_215 from "../assets/VOLT_215.png";
import VOLT_HVC from "../assets/VOLT_HVC.png";
import VOLT_HVD from "../assets/VOLT_HVD.png";
import VOLT_LVS from "../assets/VOLT_LVS.png";
import VOLT_LVW from "../assets/VOLT_LVW.png";
import TechnicalSpecs from "./TechnicalSpecs";
// Updated flip card component using the PDF text
const FlippedCard = ({ text }) => {
  return (
    <h2 className="text-[12px] font-medium text-white text-center [transform:rotateX(180deg)]">
      {text}
    </h2>
  );
};
type SpecItem = {
  title: string;
  value: string;
  icon: string | undefined;
};
type fetureItem = {
  icon: string | undefined;
  title: string;
  desc: string;
};
type SpecGroup = {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
};
type ProductData = {
  id: number;
  image: string | undefined;
  title: string;
  description: string;
  features: fetureItem[];
  specs: SpecItem[];
  data: SpecGroup[];
};
// Example data organized from the PDF
const pdfProductData: ProductData[] = [
  {
    id: 1,
    image: VOLT_100,
    title: "VOLT-100",
    description:
      "The ESS container product integrates PACK, EMS, BMS, HVAC, fire safety system into one container. It has the advantages of high energy density, easy transportation & installation, and high protection level. The DC output can combine with PCS-boost container to realize AC network connection at medium/high voltage . It can be applied to the generation and grid side.",
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
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 314Ah Prismatic" },
          { label: "PACK", value: "52.24 kWh/1P52S" },
          { label: "Battery System", value: "5015 kWh" },
          { label: "Voltage Range", value: "1165 – 1498 Vdc" },
          { label: "Rated Voltage", value: "1331.2 Vdc" },
        ],
      },
      {
        title: "AC Side",
        items: [
          { label: "Rated Power", value: "2.5 MW" },
          { label: "Max. Power", value: "2.5 MVA" },
          { label: "THDi", value: "≤ 3%" },
          { label: "DC Ratio", value: "0.5%Ipn" },
          { label: "Nominal Voltage", value: "690 VaC" },
          { label: "Power Factor", value: "-1 lagging ~ +1 leading" },
          { label: "Nominal Frequency", value: "50 Hz/60 Hz" },
        ],
      },
      {
        title: "General",
        items: [
          { label: "Efficiency", value: "≥ 94%" },
          { label: "Charge/Discharge Rate", value: "0.5 P" },
          { label: "DoD", value: "95% (25±2°C)" },
          { label: "Cycle Life", value: "≥ 8,000 times" },
          { label: "Switching Time", value: "100ms" },
          { label: "Connectivity", value: "Ethernet/RS485" },
          { label: "Ingress Rating", value: "IP55" },
          { label: "Cooling", value: "Chiller + liquid cooling" },
          { label: "Operating Temp.", value: "-25°C to 55°C" },
          { label: "Humidity", value: "0–95% RH, non-condensing" },
          { label: "Noise", value: "80 dB" },
          { label: "Altitude", value: "≤ 2,000m (derating above)" },
          { label: "Fire Safety", value: "NOVEC1230 / Aerosol + water" },
          { label: "Dimensions (W*D*H)", value: "6,058*2,550*2,896 mm" },
          { label: "Weight", value: "~40,000 kg" },
        ],
      },
    ],
    specs: [
      { title: "Cell Type", value: "LFP 314Ah Prismatic", icon: cellType },
      { title: "Battery System", value: "5015 kWh", icon: batterySystem },
      { title: "Rated Voltage", value: "1331.2 Vdc", icon: ratedVoltage },
      { title: "Rated Power", value: "2.5 MW", icon: ratedPower },
      { title: "Efficiency", value: "≥ 94%", icon: effieciency },
      { title: "DoD", value: "95% (25±2°C)", icon: dod },
      { title: "Cycle Life", value: "≥ 8,000 times", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
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
    specs: [
      { title: "Cell Type", value: "LFP 314Ah Prismatic", icon: cellType },
      { title: "Battery System", value: "5015 kWh", icon: batterySystem },
      { title: "Rated Voltage", value: "1331.2 Vdc", icon: ratedVoltage },
      { title: "Rated Power", value: "2.5 MW", icon: ratedPower },
      { title: "Efficiency", value: "≥ 94%", icon: effieciency },
      { title: "DoD", value: "95% (25±2°C)", icon: dod },
      { title: "Cycle Life", value: "≥ 8,000 times", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
    ],
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 314Ah Prismatic" },
          { label: "PACK", value: "52.24 kWh/1P52S" },
          { label: "Battery System", value: "5015 kWh" },
          { label: "Voltage Range", value: "1165 – 1498 Vdc" },
          { label: "Rated Voltage", value: "1331.2 Vdc" },
        ],
      },
      {
        title: "AC Side",
        items: [
          { label: "Rated Power", value: "2.5 MW" },
          { label: "Max. Power", value: "2.5 MVA" },
          { label: "THDi", value: "≤ 3%" },
          { label: "DC Ratio", value: "0.5%Ipn" },
          { label: "Nominal Voltage", value: "690 VaC" },
          { label: "Power Factor", value: "-1 lagging ~ +1 leading" },
          { label: "Nominal Frequency", value: "50 Hz/60 Hz" },
        ],
      },
      {
        title: "General",
        items: [
          { label: "Efficiency", value: "≥ 94%" },
          { label: "Charge/Discharge Rate", value: "0.5 P" },
          { label: "DoD", value: "95% (25±2°C)" },
          { label: "Cycle Life", value: "≥ 8,000 times" },
          { label: "Switching Time", value: "100ms" },
          { label: "Connectivity", value: "Ethernet/RS485" },
          { label: "Ingress Rating", value: "IP55" },
          { label: "Cooling", value: "Chiller + liquid cooling" },
          { label: "Operating Temp.", value: "-25°C to 55°C" },
          { label: "Humidity", value: "0–95% RH, non-condensing" },
          { label: "Noise", value: "80 dB" },
          { label: "Altitude", value: "≤ 2,000m (derating above)" },
          { label: "Fire Safety", value: "NOVEC1230 / Aerosol + water" },
          { label: "Dimensions (W*D*H)", value: "6,058*2,550*2,896 mm" },
          { label: "Weight", value: "~40,000 kg" },
        ],
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
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 314Ah Prismatic" },
          { label: "PACK", value: "52.24 kWh/1P52S" },
          { label: "Battery System", value: "5015 kWh" },
          { label: "Voltage Range", value: "1165 – 1498 Vdc" },
          { label: "Rated Voltage", value: "1331.2 Vdc" },
        ],
      },
      {
        title: "AC Side",
        items: [
          { label: "Rated Power", value: "2.5 MW" },
          { label: "Max. Power", value: "2.5 MVA" },
          { label: "THDi", value: "≤ 3%" },
          { label: "DC Ratio", value: "0.5%Ipn" },
          { label: "Nominal Voltage", value: "690 VaC" },
          { label: "Power Factor", value: "-1 lagging ~ +1 leading" },
          { label: "Nominal Frequency", value: "50 Hz/60 Hz" },
        ],
      },
      {
        title: "General",
        items: [
          { label: "Efficiency", value: "≥ 94%" },
          { label: "Charge/Discharge Rate", value: "0.5 P" },
          { label: "DoD", value: "95% (25±2°C)" },
          { label: "Cycle Life", value: "≥ 8,000 times" },
          { label: "Switching Time", value: "100ms" },
          { label: "Connectivity", value: "Ethernet/RS485" },
          { label: "Ingress Rating", value: "IP55" },
          { label: "Cooling", value: "Chiller + liquid cooling" },
          { label: "Operating Temp.", value: "-25°C to 55°C" },
          { label: "Humidity", value: "0–95% RH, non-condensing" },
          { label: "Noise", value: "80 dB" },
          { label: "Altitude", value: "≤ 2,000m (derating above)" },
          { label: "Fire Safety", value: "NOVEC1230 / Aerosol + water" },
          { label: "Dimensions (W*D*H)", value: "6,058*2,550*2,896 mm" },
          { label: "Weight", value: "~40,000 kg" },
        ],
      },
    ],
    specs: [
      { title: "Cell Type", value: "LFP 314Ah Prismatic", icon: cellType },
      { title: "Battery System", value: "5015 kWh", icon: batterySystem },
      { title: "Rated Voltage", value: "1331.2 Vdc", icon: ratedVoltage },
      { title: "Rated Power", value: "2.5 MW", icon: ratedPower },
      { title: "Efficiency", value: "≥ 94%", icon: effieciency },
      { title: "DoD", value: "95% (25±2°C)", icon: dod },
      { title: "Cycle Life", value: "≥ 8,000 times", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
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
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 314Ah Prismatic" },
          { label: "PACK", value: "52.24 kWh/1P52S" },
          { label: "Battery System", value: "5015 kWh" },
          { label: "Voltage Range", value: "1165 – 1498 Vdc" },
          { label: "Rated Voltage", value: "1331.2 Vdc" },
        ],
      },
      {
        title: "AC Side",
        items: [
          { label: "Rated Power", value: "2.5 MW" },
          { label: "Max. Power", value: "2.5 MVA" },
          { label: "THDi", value: "≤ 3%" },
          { label: "DC Ratio", value: "0.5%Ipn" },
          { label: "Nominal Voltage", value: "690 VaC" },
          { label: "Power Factor", value: "-1 lagging ~ +1 leading" },
          { label: "Nominal Frequency", value: "50 Hz/60 Hz" },
        ],
      },
      {
        title: "General",
        items: [
          { label: "Efficiency", value: "≥ 94%" },
          { label: "Charge/Discharge Rate", value: "0.5 P" },
          { label: "DoD", value: "95% (25±2°C)" },
          { label: "Cycle Life", value: "≥ 8,000 times" },
          { label: "Switching Time", value: "100ms" },
          { label: "Connectivity", value: "Ethernet/RS485" },
          { label: "Ingress Rating", value: "IP55" },
          { label: "Cooling", value: "Chiller + liquid cooling" },
          { label: "Operating Temp.", value: "-25°C to 55°C" },
          { label: "Humidity", value: "0–95% RH, non-condensing" },
          { label: "Noise", value: "80 dB" },
          { label: "Altitude", value: "≤ 2,000m (derating above)" },
          { label: "Fire Safety", value: "NOVEC1230 / Aerosol + water" },
          { label: "Dimensions (W*D*H)", value: "6,058*2,550*2,896 mm" },
          { label: "Weight", value: "~40,000 kg" },
        ],
      },
    ],
    specs: [
      { title: "Cell Type", value: "LFP 314Ah Prismatic", icon: cellType },
      { title: "Battery System", value: "5015 kWh", icon: batterySystem },
      { title: "Rated Voltage", value: "1331.2 Vdc", icon: ratedVoltage },
      { title: "Rated Power", value: "2.5 MW", icon: ratedPower },
      { title: "Efficiency", value: "≥ 94%", icon: effieciency },
      { title: "DoD", value: "95% (25±2°C)", icon: dod },
      { title: "Cycle Life", value: "≥ 8,000 times", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
    ],
  },
  {
    id: 5,
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
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 314Ah Prismatic" },
          { label: "PACK", value: "52.24 kWh/1P52S" },
          { label: "Battery System", value: "5015 kWh" },
          { label: "Voltage Range", value: "1165 – 1498 Vdc" },
          { label: "Rated Voltage", value: "1331.2 Vdc" },
        ],
      },
      {
        title: "AC Side",
        items: [
          { label: "Rated Power", value: "2.5 MW" },
          { label: "Max. Power", value: "2.5 MVA" },
          { label: "THDi", value: "≤ 3%" },
          { label: "DC Ratio", value: "0.5%Ipn" },
          { label: "Nominal Voltage", value: "690 VaC" },
          { label: "Power Factor", value: "-1 lagging ~ +1 leading" },
          { label: "Nominal Frequency", value: "50 Hz/60 Hz" },
        ],
      },
      {
        title: "General",
        items: [
          { label: "Efficiency", value: "≥ 94%" },
          { label: "Charge/Discharge Rate", value: "0.5 P" },
          { label: "DoD", value: "95% (25±2°C)" },
          { label: "Cycle Life", value: "≥ 8,000 times" },
          { label: "Switching Time", value: "100ms" },
          { label: "Connectivity", value: "Ethernet/RS485" },
          { label: "Ingress Rating", value: "IP55" },
          { label: "Cooling", value: "Chiller + liquid cooling" },
          { label: "Operating Temp.", value: "-25°C to 55°C" },
          { label: "Humidity", value: "0–95% RH, non-condensing" },
          { label: "Noise", value: "80 dB" },
          { label: "Altitude", value: "≤ 2,000m (derating above)" },
          { label: "Fire Safety", value: "NOVEC1230 / Aerosol + water" },
          { label: "Dimensions (W*D*H)", value: "6,058*2,550*2,896 mm" },
          { label: "Weight", value: "~40,000 kg" },
        ],
      },
    ],
    specs: [
      { title: "Cell Type", value: "LFP 314Ah Prismatic", icon: cellType },
      { title: "Battery System", value: "5015 kWh", icon: batterySystem },
      { title: "Rated Voltage", value: "1331.2 Vdc", icon: ratedVoltage },
      { title: "Rated Power", value: "2.5 MW", icon: ratedPower },
      { title: "Efficiency", value: "≥ 94%", icon: effieciency },
      { title: "DoD", value: "95% (25±2°C)", icon: dod },
      { title: "Cycle Life", value: "≥ 8,000 times", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
    ],
  },
  {
    id: 6,
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
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 314Ah Prismatic" },
          { label: "PACK", value: "52.24 kWh/1P52S" },
          { label: "Battery System", value: "5015 kWh" },
          { label: "Voltage Range", value: "1165 – 1498 Vdc" },
          { label: "Rated Voltage", value: "1331.2 Vdc" },
        ],
      },
      {
        title: "AC Side",
        items: [
          { label: "Rated Power", value: "2.5 MW" },
          { label: "Max. Power", value: "2.5 MVA" },
          { label: "THDi", value: "≤ 3%" },
          { label: "DC Ratio", value: "0.5%Ipn" },
          { label: "Nominal Voltage", value: "690 VaC" },
          { label: "Power Factor", value: "-1 lagging ~ +1 leading" },
          { label: "Nominal Frequency", value: "50 Hz/60 Hz" },
        ],
      },
      {
        title: "General",
        items: [
          { label: "Efficiency", value: "≥ 94%" },
          { label: "Charge/Discharge Rate", value: "0.5 P" },
          { label: "DoD", value: "95% (25±2°C)" },
          { label: "Cycle Life", value: "≥ 8,000 times" },
          { label: "Switching Time", value: "100ms" },
          { label: "Connectivity", value: "Ethernet/RS485" },
          { label: "Ingress Rating", value: "IP55" },
          { label: "Cooling", value: "Chiller + liquid cooling" },
          { label: "Operating Temp.", value: "-25°C to 55°C" },
          { label: "Humidity", value: "0–95% RH, non-condensing" },
          { label: "Noise", value: "80 dB" },
          { label: "Altitude", value: "≤ 2,000m (derating above)" },
          { label: "Fire Safety", value: "NOVEC1230 / Aerosol + water" },
          { label: "Dimensions (W*D*H)", value: "6,058*2,550*2,896 mm" },
          { label: "Weight", value: "~40,000 kg" },
        ],
      },
    ],
    specs: [
      { title: "Cell Type", value: "LFP 314Ah Prismatic", icon: cellType },
      { title: "Battery System", value: "5015 kWh", icon: batterySystem },
      { title: "Rated Voltage", value: "1331.2 Vdc", icon: ratedVoltage },
      { title: "Rated Power", value: "2.5 MW", icon: ratedPower },
      { title: "Efficiency", value: "≥ 94%", icon: effieciency },
      { title: "DoD", value: "95% (25±2°C)", icon: dod },
      { title: "Cycle Life", value: "≥ 8,000 times", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
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
            {selectedProduct.title}
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
                  <FlippedCard text={item.desc} />
                ) : (
                  <>
                    <img src={item.icon} alt={item.icon} />
                    <h2 className="text-[14px] font-bold">{item.title}</h2>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <TechnicalSpecs
        specs={selectedProduct.specs}
        data={selectedProduct.data}
        title={selectedProduct.title}
      />
      {/* Brochure Section */}
      <section className="flex justify-center items-center w-full h-full p-4 relative overflow-hidden">
        <div className="relative bg-[#0C33F2] rounded-lg p-8 text-white flex flex-row items-center justify-between md:px-24 w-[1200px] h-[323px]">
          <div className="md:w-2/3 space-y-4 z-10">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Explore if the {selectedProduct.title} is the ideal solution for
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
