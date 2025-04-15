import { useState } from 'react';

export default function VoltHvcTable() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = ["Model", "Model - 1", "Model - 2", "Model - 3", "Model - 4"];
  
  const modelImages = [
    null, // Base model (no image)
    "/api/placeholder/120/220", // Model 1
    "/api/placeholder/120/220", // Model 2
    "/api/placeholder/120/220", // Model 3
    "/api/placeholder/120/220", // Model 4
  ];
  
  const specifications = [
    { 
      label: "Battery Module", 
      values: ["", "HVC05 [5.12 kWh]", "HVC05 [5.12 kWh]", "HVC05 [5.12 kWh]", "HVC05 [5.12 kWh]"] 
    },
    { 
      label: "Cell Type", 
      values: ["", "100Ah LFP Prismatic Cell", "100Ah LFP Prismatic Cell", "100Ah LFP Prismatic Cell", "100Ah LFP Prismatic Cell"] 
    },
    { 
      label: "Number of Modules", 
      values: ["", "5 [Minimum]", "7 [Normal]", "9 [Normal]", "11 [Max]"] 
    },
    { 
      label: "System Nominal Energy", 
      values: ["", "25.60kWh", "35.84kWh", "46.08kWh", "56.32kWh"] 
    },
    { 
      label: "Available System Nominal Energy", 
      values: ["", "23.0kWh", "32.2kWh", "41.4kWh", "50.6kWh"] 
    },
    { 
      label: "Nominal Voltage", 
      values: ["", "256.0V", "358.4V", "460.8V", "563.2V"] 
    },
    { 
      label: "Max. Output Power", 
      values: ["", "23.0kW", "32.2kW", "41.4kW", "50.6kW"] 
    },
    { 
      label: "Operating Voltage Range", 
      values: ["", "224.0~288.0V", "313.6~403.2V", "403.2~518.4V", "492.8~633.6V"] 
    },
    { 
      label: "Max. Charging Current", 
      values: ["", "50A", "50A", "50A", "50A"] 
    },
    { 
      label: "Max. Discharge Current", 
      values: ["", "100A", "100A", "100A", "100A"] 
    },
    { 
      label: "Dimensions (W*D*H)", 
      values: ["", "550*1492*590mm", "550*1492*590mm", "550*2100*590mm", "550*2100*590mm"] 
    },
    { 
      label: "Weight", 
      values: ["", "264kg", "346kg", "442kg", "524kg"] 
    },
    { 
      label: "Communication", 
      values: ["", "CAN", "CAN", "CAN", "CAN"] 
    },
    { 
      label: "Installation", 
      values: ["", "Floor", "Floor", "Floor", "Floor"] 
    },
    { 
      label: "Enclosure Rating", 
      values: ["", "IP20", "IP20", "IP20", "IP20"] 
    },
    { 
      label: "25°C Cycle Life", 
      values: ["", "≥6000Cycles@80%DOD&70%EOL", "≥6000Cycles@80%DOD&70%EOL", "≥6000Cycles@80%DOD&70%EOL", "≥6000Cycles@80%DOD&70%EOL"] 
    },
    { 
      label: "Operating Temperature", 
      values: ["", "Charge: -5~50°C; Discharge: -20~50°C; Recommended: 15~35°C", "Charge: -5~50°C; Discharge: -20~50°C; Recommended: 15~35°C", "Charge: -5~50°C; Discharge: -20~50°C; Recommended: 15~35°C", "Charge: -5~50°C; Discharge: -20~50°C; Recommended: 15~35°C"] 
    },
    { 
      label: "Operating Humidity", 
      values: ["", "5%~95% [Non-Condensing]", "5%~95% [Non-Condensing]", "5%~95% [Non-Condensing]", "5%~95% [Non-Condensing]"] 
    },
    { 
      label: "Cooling Mode", 
      values: ["", "Natural Cooling", "Natural Cooling", "Natural Cooling", "Natural Cooling"] 
    },
    { 
      label: "Operating Altitude", 
      values: ["", "≤4000m", "≤4000m", "≤4000m", "≤4000m"] 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-black">
        <h1 className="text-3xl font-bold text-white">VOLT-HVC</h1>
      </div>
      
      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === index 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Model Images */}
      {activeTab !== 0 && (
        <div className="flex justify-center p-4 bg-gray-50">
          <div className="w-24 h-40">
            <img 
              src={modelImages[activeTab]} 
              alt={`Model ${activeTab} Battery`}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
      
      {/* Specifications Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {specifications.map((spec, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-3 text-sm font-medium text-gray-900 w-1/5">
                  {spec.label}
                </td>
                {activeTab === 0 ? (
                  <td className="px-6 py-3 text-sm text-gray-500" colSpan="4">
                    {spec.values[1] || '-'}
                  </td>
                ) : (
                  <td className="px-6 py-3 text-sm text-gray-500">
                    {spec.values[activeTab] || '-'}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}