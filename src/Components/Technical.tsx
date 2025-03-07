import React, { useState } from 'react';
import Technical from '../assets/Technical.png';

const TechnicalSpecification: React.FC = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState<'ac' | 'dc' | 'general'>('ac');

  // Table data with combined cell type and value
  const tableData = {
    ac: [
      {
        acSide: { label: "Cell Type", value: "LFP 280Ah" },
        dcSide: { label: "Cell Type", value: "LFP 280Ah" },
        general: { label: "Cell Type", value: "LFP 280Ah" }
      },
      {
        acSide: { label: "Cell Type", value: "LFP 280Ah" },
        dcSide: { label: "Cell Type", value: "LFP 280Ah" },
        general: { label: "Cell Type", value: "LFP 280Ah" }
      },
      {
        acSide: { label: "Cell Type", value: "LFP 280Ah" },
        dcSide: { label: "Cell Type", value: "LFP 280Ah" },
        general: { label: "Cell Type", value: "LFP 280Ah" }
      }
    ],
    dc: [
        {
          "acSide": { "label": "Cell Type", "value": "LFP 280Ah" },
          "dcSide": { "label": "Voltage", "value": 3.2 },
          "general": { "label": "Capacity", "value": 280 }
        },
        {
          "acSide": { "label": "Resistance", "value": 0.15 },
          "dcSide": { "label": "Cell Type", "value": "LFP 280Ah" },
          "general": { "label": "Energy", "value": 896 }
        },
        {
          "acSide": { "label": "Current", "value": 50 },
          "dcSide": { "label": "Power", "value": 160 },
          "general": { "label": "Efficiency", "value": 92.5 }
        }
      ],
      general: [
        {
          "acSide": { "label": "Voltage", "value": 3.7 },
          "dcSide": { "label": "Capacity", "value": 300 },
          "general": { "label": "Energy", "value": 1110 }
        },
        {
          "acSide": { "label": "Power", "value": 200 },
          "dcSide": { "label": "Resistance", "value": 0.12 },
          "general": { "label": "Current", "value": 55 }
        },
        {
          "acSide": { "label": "Efficiency", "value": 95 },
          "dcSide": { "label": "Voltage", "value": 3.3 },
          "general": { "label": "Capacity", "value": 275 }
        }
      ]
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Technical Specification</h1>
      
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
        <div className="w-full lg:w-5/12">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th 
                  className={`p-4 text-center cursor-pointer border border-gray-300 ${activeTab === 'ac' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                  onClick={() => setActiveTab('ac')}
                  style={{ width: '33.33%' }}
                >
                  AC SIDE
                </th>
                <th 
                  className={`p-4 text-center cursor-pointer border border-gray-300 ${activeTab === 'dc' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                  onClick={() => setActiveTab('dc')}
                  style={{ width: '33.33%' }}
                >
                  DC SIDE
                </th>
                <th 
                  className={`p-4 text-center cursor-pointer border border-gray-300 ${activeTab === 'general' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                  onClick={() => setActiveTab('general')}
                  style={{ width: '33.33%' }}
                >
                  General
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData[activeTab].map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-5">
                    <div className="text-gray-500 text-sm mb-1">{row.acSide.label}</div>
                    <div className="font-bold text-black">{row.acSide.value}</div>
                  </td>
                  <td className="border border-gray-300 p-5">
                    <div className="text-gray-500 text-sm mb-1">{row.dcSide.label}</div>
                    <div className="font-bold text-black">{row.dcSide.value}</div>
                  </td>
                  <td className="border border-gray-300 p-5">
                    <div className="text-gray-500 text-sm mb-1">{row.general.label}</div>
                    <div className="font-bold text-black">{row.general.value}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="w-full lg:w-6/12">
          <img src={Technical} alt="Technical specification" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecification;