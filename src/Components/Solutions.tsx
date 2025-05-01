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
import readme from "../assets/readMe.svg";
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
import VOLT_LINK from "../assets/VOLT_LINK.png";
import VOLT_MAX_EDIT from "../assets/VOLT_MAX_EDIT.png";
import VOLT_MAX_AIR from "../assets/VOLT_MAX_AIR.png";
import VOLT_LINK_AIR from "../assets/VOLT_LINK_AIR.png";
import VOLT_LINK_EDIT from "../assets/VOLT_LINK_EDIT.png";

import TechnicalSpecs from "./TechnicalSpecs";
import VOLT_MAX_REAL from "../assets/VOLT_MAX_REAL.jpg";
import VOLT_100_REAL from "../assets/VOLT_100_REAL.png";
import VOLT_HVC_REAL from "../assets/VOLT_HVC_REAL.png";
import VOLT_HVD_REAL from "../assets/VOLT_HVD_REAL.png";
import VOLT_LVS_REAL from "../assets/VOLT_LVS_REAL.png";
import VOLT_LVW_REAL from "../assets/VOLT_LVW_REAL.png";
import VOLT_LINK_REAL from "../assets/VOLT_LINK_REAL.png";
import VOLT_MAX_AIR_REAL from "../assets/VOLT_MAX_AIR_REAL.png";
import VOLT_LINK_AIR_REAL from "../assets/VOLT_LINK_AIR_REAL.png";


import Puzzle from "../assets/Puzzle.png";
import Battery from "../assets/Battery.png";
import Hand from "../assets/Hand.png";
import Cube from "../assets/Cube.png";
import Temp from "../assets/Temp.png";
import Clock from "../assets/Clock.png";
import spark from "../assets/spark.png";
import small_spark from "../assets/small_spark.png";
import leaf from "../assets/leaf.png";
import hand1 from "../assets/hand1.png";
import hand2 from "../assets/hand2.png";
import home  from "../assets/home.png";
import leaf1 from "../assets/leaf1.png";
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
    real:VOLT_100_REAL,
    title: "VOLT-100",
    description:
     "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. It’s suitable for various application scenarios such as Industry, Warehouses, Schools, Commercial Malls, Construction sites etc.",
    features: [
      {
        icon: light,
        title: " Fast Charging",
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
      {
        icon: Battery,
        title: "Ultra-Long Life",
        desc: "Cell Life Cycle > 12000"
      },
      {
        icon: spark,
        title: "High-Performance PCS", 
        desc: "Inbuilt high effiiciency AC-DC inside the cabinet ",
      },
    ],
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 280Ah" },
          { label: "Battery System", value: "1P112S" },
          { label: "Rated Energy", value: "100.3 kWh" },
          { label: "Voltage Range", value: "313.6V - 408.8V" },
          { label: "Rated Voltage", value: "358.4V" },
        ],
      },
      {
        title: "AC Side",
        items: [
          { label: "Rated Power", value: "50 kW" },
          { label: "THDi", value: "≤ 3%" },
          { label: "DC Ratio", value: "0.5%Ipn" },
          { label: "Nominal Voltage", value: "400 Vac/3P+N+PE" },
          { label: "Power Factor", value: "-1 lagging -1 leading" },
          { label: "Nominal Frequency", value: "50 Hz/60 Hz" },
        ],
      },
      {
        title: "General",
        items: [
          { label: "Efficiency", value: "≥ 88%" },
          { label: "Charge/Discharge Rate", value: "1P" },
          { label: "DoD", value: "95% (25±2°C)" },
          { label: "Cycle Life", value: "≥ 8,000 times" },
          { label: "Connectivity", value: "Ethernet/RS485" },
          { label: "Ingress Rating", value: "IP55" },
          { label: "Cooling", value: "Forced air cooling" },
          { label: "Operating Temperature", value: "-25°C-55°C" },
          { label: "Humidity", value: "0-95%RH, non-condensing" },
          { label: "Altitude", value: "≤ 2,000m (derating above 2,000m)" },
          { label: "Fire Safety", value: "Aerosol" },
          { label: "Dimensions (W*D*H)", value: "900*1,270*2,300 (mm)" },
          { label: "Weight", value: "~1,600 kg" },
        ],
      },
    ],
    specs: [
      { title: "Cell Type", value: " LFP 280Ah", icon: cellType },
      { title: "Battery System", value: "1P112S", icon: batterySystem },
      { title: "Rated Voltage", value: "358.4 V", icon: ratedVoltage },
      { title: "Rated Power", value: "50 KW", icon: ratedPower },
      { title: "Efficiency", value: "≥ 88%", icon: effieciency },
      { title: "DoD", value: "95% (25±2°C)", icon: Clock },
      { title: "Cycle Life", value: "≥ 8,000 times", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
    ],
  },
  {
    id: 2,
    image: VOLT_HVC,
    real :VOLT_HVC_REAL,
    title: "VOLT-HVC",
    description:
    "Voltra high voltage series uses a 3U standard modular design, with multi-module in series and support multi-cluster in parallel. It's suitable for various application scenarios such as villas, farms, and small C&I power supplies, and provides a complete set of green, low-carbon, and reliable energy solutions.",
    features: [
    {
             icon: Battery,
             title: "Ultra-Long Life",      
             desc:"Cell Life Cycle > 6000 cycles "

            
            },
           {
             icon: bar,
             title: "Economical and Efficient",
             desc:"Conversion efficiency over 90%, DoD over 96%",
           },
           {
             icon: cloud,
             title: "Intelligent Management",
             desc:"Diversified monitoring by app/web (remote)",
           },
           {
             icon: light,
             title: "Flexible Configuration",
             desc:"Can scale from 10 kwh  to 100 kwh "
           },
           {
            icon: small_spark,
            title: "High Voltage",
            desc:"Can achieve upto 1000V"
          },
          {
            icon: leaf,
            title: "Low-Carbon Use",
            desc:"Minimising Carbon Footprint "

          },
    ],
    specs: [
      { title: "Cell Type", value: "100Ah LFP Prismatic ", icon: cellType },
      { title: "System Nominal Energy ", value: "35.84KWh", icon: batterySystem }, //changes here 
      { title: "Nominal Voltage", value: "358.4V", icon: ratedVoltage }, //2nd changes here
      { title: "Max OutPut Power", value: "32.3 KW", icon: ratedPower }, //3rd changes here
      { title: "Cooling Mode", value: "Natural Cooling", icon: effieciency }, //4th changes here
      { title: "Communications", value: "CAN", icon: dod }, //5th changes here
      { title: "25°C Cycle Life", value: "≥6000 Cycles", icon: cycleLife }, //6th changes hereCycle Life"
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
    image: VOLT_HVD,
    real:VOLT_HVD_REAL,

    title: "VOLT-HVD",
    description:
    "Through modular design and flexible configuration, it covers the DC voltage range of 204v ~ 512v and the standby power demand of 10 ~ 60 minutes. It can be used as a backup power supply in communication core machine room, UPS host room, Internet Data Center (IDC), edge data center, data information port, DC remote power supply, traffic dispatching center, intelligent manufacturing, and other fields.",
    features: [
      {
        icon: light,
        title: "Fast Charging",
        desc:"3P/4P  fast charge/discharge rate"
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
        desc: "10 yrs+ life ",
      },
      {
        icon: hand1,
        title: "Backup Power Supply",
        desc: "Uninterrupted backup power with UPS",
      },
      {
        icon: hand2,
        title: "Multiple-Use Cases",
        desc: "Data Centres, UPS, Servers, Critical Loads etc",
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
      { title: "Cell Type", value: "1000Ah LFP Prismatic", icon: cellType },
      { title: "Rated Energy", value: "51.2 kWh", icon: batterySystem },
      { title: "Rated Voltage", value: "512 Vdc", icon: ratedVoltage },
      { title: "Charging Current", value: "0.5 C", icon: ratedPower },
      { title: "Parallel Number", value: "16 cabinets", icon: effieciency },
      { title: "Communication ", value: "Modbus TCP/RTU", icon: dod },
      { title: "Compatible Device", value: "HVDC ,UPS, etc", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
    ],
  },
  {
    id: 4,
    image: VOLT_LVS,
    real:VOLT_LVS_REAL,
    title: "VOLT-LVS",
    description:
    "It adopts an industrial aesthetic and N+1 stackable design. The system is composed of 100Ah modules, supports a maximum of 20 parallel groups, and the capacity can be expanded to 102kWh. Matched with mainstream brands of inverters, the system can be applied to gridconnected, off-grid, photovoltaic, and all kinds of green and low-carbon applications of household ESS.",
    features: [
       {
                icon: Puzzle,
                title: "Wide Compatibility",
                desc:"Can be configured with 30+ inverters "
              },
              {
                icon: Battery,
                title: "Ultra-Long Life",
                desc:"Cell Life Cycle > 6000 cycles "
      
              },
              {
                icon: Cube,
                title: "High Scalability",
                desc:"Can easily scale from 5 Kwh to 100 Kwh"
              },
              {
                icon: gaurd,
                title: "High Security",
                desc:"Smart BMS control, highly secure"

              },
              {
                icon: home,
                title: "Various HouseHold Uses",
                desc:"Smart BMS control, highly secure"
              },
              {
                icon: leaf1,
                title: "light Weight",
              desc :"Compact and light weight to move around "
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
      { title: "Cell Type", value: "100Ah LFP  Prismatic", icon: cellType },
      { title: "Nominal Energy", value: "10.24 kWh", icon: batterySystem },
      { title: "Nominal Voltage", value: "51.2 V", icon: ratedVoltage },
      { title: "Efficiency", value: "≥ 97%", icon: effieciency },
      { title: "Installation", value: "Stack/Wall/Stand", icon: effieciency },
      { title: "Communication", value: "CAN/RS485", icon: dod },
      { title: " 25°C Cycle Life", value: "≥ 6,000 Cycles", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
    ],
  },
  {
    id: 5,
    image: VOLT_LVW,
    real:VOLT_LVW_REAL,
    title: "VOLT-LVW",
    description:
    "This wall-mounted system is a compact, efficient, and space-saving solution for storing electrical energy, typically used in residential or small commercial applications. These systems are installed on a wall, either inside or outside a building, and are designed to optimize energy usage, improve power reliability, and allow integration with renewable energy sources such as solar panels. Can support a maximum of up to 8 batteries in parallel and the capacity can be expanded to 41 kWh.",
    features: [
       {
                icon: Puzzle,
                title: "Flexible and Comaptible",
                desc:"Can be configured with 30+ inverters "
               
              },
              {
                icon: Hand,
                title: "Easy Installation",
                desc:"Wall mounted, 2 step installation "
                
              },
              {
                icon: Battery,
                title: "Long LifeSpan",
                desc:"Cell Life Cycle > 6000 cycles "
              
              },
              {
                icon: Temp ,
                title: "Environmental Adaptability",
                desc:"No pollution reduces carbon footprint "
               
              },
              {
                icon: bar ,
                title: "Economical and Efficient",
                desc:"Conversion efficiency over 90%, DoD over 96%",
               
              },
              {
                icon: gaurd ,
                title: "Safe and Reliable",
              desc:"IP55 and 10 yr+ life "
               
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
      { title: "Cell Type", value: " LFP  ", icon: cellType },
      { title: "Available Energy", value: "51.2 kWh", icon: batterySystem },
      { title: "Nominal Voltage", value: "51.2 V", icon: ratedVoltage },
      { title: "Efficiency", value: "≥ 97%", icon: effieciency },
      { title: "Installation", value: "Floor/Wall/Hanging", icon: effieciency },
      { title: "Communication", value: "CAN/RS485", icon: dod },
      { title: " Scalablity", value: "1-20", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
    ],
  },
  {
    id: 6,
    image: VOLT_LINK_EDIT,
    real:VOLT_LINK_REAL,
    title: "VOLT-LINK",
    description:
    "The all-in-one air-cooled ESS cabinet integrates a long-life battery, efficient balancing BMS,high-performance PCS, active safety system, smart distribution, and HVAC into one cabinet,enabling long-term operation with safety, stability, and reliability. Through AC side parallel connection, it achieves flexible capacity expansion up to MWH.",
    features: [
       {
                icon: Hand,
                title: "High Integration",
                desc:"Can integrate with solar, wind, DG, etc. "    
                      },
              {
                icon: Temp,
                title: "Better Cooling",
                desc:"Advanced Liquid Cooling Technology"

              
              },
              {
                icon: Cube,
                title: "Compact and Modular",
                desc:"Flexible & Scalable with parallel systems"
              },
              {
                icon: gaurd,
                title: "Safe and Reliable",
                desc:"15 yrs+ life "
              },
              {
                icon:light ,
                title: "Fast Charging",
              desc:"1P fast charge/discharge rate, energy storing & releasing"
              },
              {
                icon: bar,
                title: "Economical and Efficient ",
                desc:"Conversion efficiency over 90%, DoD over 96%",
              },
    ],
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 314Ah Prismatic" },
          { label: "PACK", value: "52.24 kWh/1P52S" },
          { label: "Battery System", value: "418 kWh" },
          { label: "Voltage Range", value: "1165 - 1498 Vdc" },
          { label: "Rated Voltage", value: "1331.2 Vdc" },
        ],
      },
      {
        title: "AC Side",
        items: [
          { label: "Rated Power", value: "200 kW" },
          { label: "Max. Power", value: "220 kW" },
          { label: "THDi", value: "≤ 3%" },
          { label: "DC Ratio", value: "0.5%Ipn" },
          { label: "Nominal Voltage", value: "690 Vac" },
          { label: "Power Factor", value: "-1 lagging -1 leading" },
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
          { label: "Cooling", value: "Liquid cooling" },
          { label: "Operating Temperature", value: "-25°C-55°C" },
          { label: "Humidity", value: "0-95%RH, non-condensing" },
          { label: "Noise", value: "80 dB" },
          { label: "Altitude", value: "≤ 2,000m (derating above 2,000m)" },
          { label: "Fire Safety", value: "NOVEC1230/Aerosol" },
          { label: "Dimensions (W*D*H)", value: "1,300*1,300*2,400 (mm)" },
          { label: "Weight", value: "~4,000 kg" },
        ],
      },
    ],
    specs: [
      { title: "Cell Type", value: "LFP 314Ah Prismatic", icon: cellType },
      { title: "Battery System", value: "418 kWh", icon: batterySystem },
      { title: "Rated Voltage", value: "1331.2 Vdc", icon: ratedVoltage },
      { title: "Rated Power", value: "200 KW", icon: ratedPower },
      { title: "Efficiency", value: "≥ 94%", icon: effieciency },
      { title: "DoD", value: "95% (25±2°C)", icon: dod },
      { title: "Cycle Life", value: "≥ 8,000 times", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
    ],
  },
  {
    id: 7,
    image: VOLT_MAX_EDIT,
    real: VOLT_MAX_REAL,
    title: "VOLT-MAX",
    description:
    "The ESS container product integrates PACK, EMS, BMS, HVAC, fire safety system into one container. It has the advantages of high energy density, easy transportation & installation, and high protection level. The DC output can combine with PCS-boost container to realize AC network connection at medium/high voltage . It can be applied to the generation and grid side.",
    features: [
      {
               icon: Temp,
               title: "Better Cooling",
               desc: "Advanced Liquid Cooling Technology "

             },
             {
               icon: bar,
               title: "Economical and Efficient ",
               desc:"Conversion efficiency over 90%, DoD over 96%"
             },
             {
               icon: Cube,
               title: "Higher Energy Density",
               desc:"20 ft container can carry upto 5 MWH Energy",
               
             },
             {
               icon: gaurd,
               title: "High Protection",
               desc:"IP55, thermal management, cell difference ≤4°C",
             },
             {
              icon: cloud,
              title: "Smart O&M",
              desc:"Diversified monitoring by HMI (local), app/web (remote)",
            },
            {
              icon:light ,
              title: "Fast Charging",
              desc:"1P fast charge/discharge rate, energy storing & releasing",
            },
    ],
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 314Ah Prismatic" },
          { label: "PACK", value: "52.24 kWh/1P52S" },
          { label: "Battery System", value: "5015 kWh" },
          { label: "Voltage Range", value: "1165 - 1498 Vdc" },
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
          { label: "Power Factor", value: "-1 lagging -1 leading" },
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
          { label: "Operating Temperature", value: "-25°C-55°C" },
          { label: "Humidity", value: "0-95%RH, non-condensing" },
          { label: "Noise", value: "80 dB" },
          { label: "Altitude", value: "≤ 2,000m (derating above 2,000m)" },
          { label: "Fire Safety", value: "NOVEC1230/Aerosol + water" },
          { label: "Dimensions (W*D*H)", value: "6,058*2,550*2,896 (mm)" },
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
      { title: "DoD", value: "95% (25±2°C)", icon: Clock },
      { title: "Cycle Life", value: "≥ 8,000 times", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
    ],
  },

  {
    id: 8,
    image: VOLT_MAX_AIR,
    real: VOLT_MAX_AIR_REAL,
    title: "VOLT-MAX AIR",
    description:
    "The ESS container product integrates PACK, EMS, BMS, HVAC, fire safety system into one container. It has the advantages of high energy density, easy transportation & installation, and high protection level. The DC output can combine with PCS-boost container to realize AC network connection at medium/high voltage . It can be applied to the generation and grid side.",
    features: [
      {
               icon: Temp,
               title: "Faster Cooling",
               desc:"HVAC Built inside, smart air Cooling Technology "
             },
             {
               icon: bar,
               title: "Economical and Efficient ",
               desc:"Conversion efficiency over 90%, DoD over 96%"             },
             {
               icon: Cube,
               title: "Higher Energy Density",
               desc:"20 ft container can carry upto 3 MWH Energy",
             },
             {
               icon: gaurd,
               title: "High Protection",
               desc:"IP55, thermal management, cell difference ≤6°C",
             },
             {
              icon: cloud,
              title: "Smart O&M",
              desc:"IP55, thermal management, cell difference ≤6°C",
            },
            {
              icon:light ,
              title: "Fast Charging",
              desc:"1P fast charge/discharge rate, energy storing & releasing",
            },
    ],
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 314Ah" },
          { label: "PACK", value: "16.32 kWh/1P16S" },
          { label: "Battery System", value: "964 kWh/4P240S" },
          { label: "Voltage Range", value: "672 - 876 Vdc" },
          { label: "Rated Voltage", value: "768 Vdc" },
        ],
      },
      {
        title: "AC Side",
        items: [
          { label: "Rated Power", value: "400 kW" },
          { label: "Max. Power", value: "440 kW" },
          { label: "THDi", value: "≤ 3%" },
          { label: "DC Ratio", value: "0.5%Ipn" },
          { label: "Nominal Voltage", value: "400 Vac/3P+N+PE" },
          { label: "Power Factor", value: "-1 lagging -1 leading" },
          { label: "Nominal Frequency", value: "50 Hz/60 Hz" },
        ],
      },
      {
        title: "General",
        items: [
          { label: "Efficiency", value: "≥ 90%" },
          { label: "Charge/Discharge Rate", value: "0.5 P" },
          { label: "DoD", value: "95% (25±2°C)" },
          { label: "Cycle Life", value: "≥ 8,000 times" },
          { label: "Switching Time", value: "100ms" },
          { label: "Connectivity", value: "Ethernet/RS485" },
          { label: "Ingress Rating", value: "IP55" },
          { label: "Cooling", value: "Forced air cooling" },
          { label: "Operating Temperature", value: "-25°C-55°C" },
          { label: "Humidity", value: "0-95%RH, non-condensing" },
          { label: "Noise", value: "80 dB" },
          { label: "Altitude", value: "≤ 2,000m (derating above 2,000m)" },
          { label: "Fire Safety", value: "Aerosol" },
          { label: "Dimensions (W*D*H)", value: "3,000*2,400*2,700 (mm)" },
          { label: "Weight", value: "~10,000 kg" },
        ],
      },
    ],
    specs: [
      { title: "Cell Type", value: "LFP 314Ah ", icon: cellType },
      { title: "Battery System", value: "964 kWh/4P24OS", icon: batterySystem },
      { title: "Rated Voltage", value: "768 Vdc", icon: ratedVoltage },
      { title: "Rated Power", value: "400 KW", icon: ratedPower },
      { title: "Efficiency", value: "≥ 90%", icon: effieciency },
      { title: "DoD", value: "95% (25±2°C)", icon: dod },
      { title: "Cycle Life", value: "≥ 8,000 times", icon: cycleLife },
      { title: "Read More", value: "", icon: readme },
    ],
  },

  {
    id: 9,
    image: VOLT_LINK_AIR,
    real: VOLT_LINK_AIR_REAL,
    title: "VOLT-LINK AIR",
    description:
    "The ESS container product integrates PACK, EMS, BMS, HVAC, fire safety system into one container. It has the advantages of high energy density, easy transportation & installation, and high protection level. The DC output can combine with PCS-boost container to realize AC network connection at medium/high voltage . It can be applied to the generation and grid side.",
    features: [
      {
               icon: Hand,
               title: "High Integration",
               desc: "Can integrate with solar, wind, DG, etc. ",
             },
             {
               icon: Temp,
               title: "Efficient Cooling",
               desc :"HVAC Built inside, smart air Cooling Technology "
             },
             {
               icon: Cube,
               title: "Compact and Modular",
                desc:"Flexible & Scalable with parallel systems"
             },
             {
               icon: gaurd,
               title: "Safe and Reliable",
                desc:"15 yrs+ life "
             },
             {
               icon:light ,
               title: "Fast Charging",
                desc:"1P fast charge/discharge rate, energy storing & releasing",
             },
             {
               icon: bar,
               title: "Economical and Efficient ",
                desc:"Conversion efficiency over 90%, DoD over 96%",
             },
   ],
    data: [
      {
        title: "DC Side",
        items: [
          { label: "Cell Type", value: "LFP 280Ah" },
          { label: "PACK", value: "14.33 kWh/1P16S" },
          { label: "Battery System", value: "215 kWh/1P240S" },
          { label: "Voltage Range", value: "672 - 876 Vdc" },
          { label: "Rated Voltage", value: "768 Vdc" },
        ],
      },
      {
        title: "AC Side",
        items: [
          { label: "Rated Power", value: "100 kW" },
          { label: "Max. Power", value: "110 kW" },
          { label: "THDi", value: "≤ 3%" },
          { label: "DC Ratio", value: "0.5%Ipn" },
          { label: "Nominal Voltage", value: "400 Vac/3P+N+PE" },
          { label: "Power Factor", value: "-1 lagging ~1 leading" },
          { label: "Nominal Frequency", value: "50 Hz/60 Hz" },
        ],
      },
      {
        title: "General",
        items: [
          { label: "Efficiency", value: "≥ 90%" },
          { label: "Charge/Discharge Rate", value: "0.5 P" },
          { label: "DoD", value: "95% (25±2°C)" },
          { label: "Cycle Life", value: "≥ 8,000 times" },
          { label: "Switching Time", value: "100ms" },
          { label: "Connectivity", value: "Ethernet/RS485" },
          { label: "Ingress Rating", value: "IP55" },
          { label: "Cooling", value: "Forced air cooling" },
          { label: "Operating Temperature", value: "-25°C-55°C" },
          { label: "Humidity", value: "0-95%RH, non-condensing" },
          { label: "Noise", value: "80 dB" },
          { label: "Altitude", value: "≤ 2,000m (derating above 2,000m)" },
          { label: "Fire Safety", value: "Aerosol" },
          { label: "Dimensions (W*D*H)", value: "1,430*1,270*2,300 (mm)" },
          { label: "Weight", value: "~2,600 kg" },
        ],
      },
    ],
    specs: [
      { title: "Cell Type", value: "LFP 280Ah ", icon: cellType },
      { title: "Battery System", value: "215 kWh/1P24OS", icon: batterySystem },
      { title: "Rated Voltage", value: "768 Vdc", icon: ratedVoltage },
      { title: "Rated Power", value: "100 KW", icon: ratedPower },
      { title: "Efficiency", value: "≥ 90%", icon: effieciency },
      { title: "DoD", value: "95% (25±2°C)", icon: Clock },
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
      <main className="flex flex-col w-full gap-4 font-[Akshar] pt-12 overflow-hidden">
      {/* Product Header */}
      <section className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-16 bg-white gap-6">
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0C33F2]">
            {selectedProduct.title}
          </h2>
          <p className="font-gilroy text-sm md:text-base text-justify">
            {selectedProduct.description}
          </p>
          <button className="px-4 md:px-6 py-2 md:py-3 bg-[#0C33F2] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            <a href="/contact">ORDER NOW</a>
          </button>
        </div>
        
        <div className="w-full md:w-1/2 hidden md:flex justify-center items-center mt-4 md:mt-0">
          <div className="w-full max-w-md h-48 md:h-64 flex items-center justify-center p-2">
            <img
              src={selectedProduct.image}
              alt="Product"
              className={`${
                selectedProduct.id === 6 || selectedProduct.id === 9 
                  ? "w-1/2 h-auto" 
                  : "w-full h-auto"
              } object-contain`}
            />
          </div>
        </div>
      </section>
  
      {/* Product Showcase with Icons */}
      <section className="w-full flex flex-col justify-start items-center bg-white font-[Akshar] gap-4 md:gap-8 px-4">
        <div className="flex flex-col lg:flex-row w-full justify-around gap-4 py-4">
          <div className="flex flex-col h-auto md:h-[300px] lg:h-[400px] w-full lg:w-[600px] justify-start">
            <img
              src={selectedProduct.real}
              alt="Product Showcase"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 w-full lg:w-[584px]">
            {selectedProduct.features.map((item, index) => (
              <div
                key={index}
                className="relative w-full max-w-[176px] h-[100px] md:h-[124px] overflow-hidden mx-auto"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(-1)}
              >
                {/* Default card (white) */}
                <div 
                  className="absolute inset-0 flex flex-col justify-center items-center bg-[#FAFAFA] gap-2 transition-transform duration-300"
                  style={{
                    transform: hoverIndex === index ? 'translateY(-100%)' : 'translateY(0)'
                  }}
                >
                  <div className="flex justify-center items-center w-10 h-10 md:w-[54px] md:h-[54px]">
                    <img 
                      src={item.icon} 
                      alt={item.title}
                      className="w-8 h-8 md:w-[54px] md:h-[54px] object-contain" 
                    />
                  </div>
                  <div className="w-full overflow-hidden">
                    <h2 className="text-xs md:text-sm font-gilroy font-bold text-center break-words px-2">
                      {item.title}
                    </h2>
                  </div>
                </div>
                
                {/* Description card (blue) */}
                <div 
                  className="absolute inset-0 flex justify-center font-gilroy items-center bg-[#0C33F2] text-white p-2 md:p-3 transition-transform duration-300"
                  style={{
                    transform: hoverIndex === index ? 'translateY(0)' : 'translateY(100%)'
                  }}
                >
                  <p className="text-xs md:text-sm text-center">
                    {item.desc || ''}
                  </p>
                </div>
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
        productId={productId}
      />
      
      {/* Brochure Section */}
      <section className="flex justify-center items-center w-full p-4 relative overflow-hidden">
  <div className="relative bg-[#0C33F2] rounded-lg p-4 md:p-8 text-white flex flex-col md:flex-row items-center justify-between md:px-12 lg:px-24 w-full max-w-[1200px] h-auto md:h-[323px] gap-6 md:gap-0">
    <div className="w-full md:w-2/3 space-y-4 z-10 text-center md:text-left">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
        Explore if the {selectedProduct.title} is the ideal solution for
        your needs.
      </h2>

      <a
        href="https://drive.google.com/file/d/15n9o4lLDUk-KtmwMyIQeSbhqbAulmTsX/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-block"
      >
        <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow-md hover:bg-gray-100 transition">
          DOWNLOAD BROCHURE
        </button>
      </a>
    </div>
    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
      <img
        src={future}
        alt="Brochure"
        className="w-[200px] md:w-[250px] lg:w-[280px] rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

    </main>
    );
}
