import React from "react";

function Graph({ year }: { year: number }) {
  const scale = [10, 10, 20, 20, 30, 30, 30, 40, 40, 50, 50, 50];
  const chartData = [
    {
      year: 1,
      dgSet: { initialCost: 15, maintenanceCost: 1, runningCost: 16.2 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 0.1,
        runningCost: 3.24,
        savings: 0,
      },
    },
    {
      year: 2,
      dgSet: { initialCost: 15, maintenanceCost: 2, runningCost: 32.4 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 0.2,
        runningCost: 6.48,
        savings: 12.72,
      },
    },
    {
      year: 3,
      dgSet: { initialCost: 15, maintenanceCost: 3, runningCost: 48.6 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 0.3,
        runningCost: 9.72,
        savings: 26.58,
      },
    },
    {
      year: 4,
      dgSet: { initialCost: 15, maintenanceCost: 4.4, runningCost: 64.8 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 0.4,
        runningCost: 12.96,
        savings: 40.84,
      },
    },
    {
      year: 5,
      dgSet: { initialCost: 15, maintenanceCost: 6, runningCost: 85.05 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 0.5,
        runningCost: 16.2,
        savings: 59.35,
      },
    },
    {
      year: 6,
      dgSet: { initialCost: 15, maintenanceCost: 7.2, runningCost: 102.06 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 0.6,
        runningCost: 19.44,
        savings: 74.22,
      },
    },
    {
      year: 7,
      dgSet: { initialCost: 15, maintenanceCost: 8.4, runningCost: 119.07 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 0.7,
        runningCost: 22.68,
        savings: 89.09,
      },
    },
    {
      year: 8,
      dgSet: { initialCost: 15, maintenanceCost: 9.6, runningCost: 142.56 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 0.8,
        runningCost: 25.92,
        savings: 110.44,
      },
    },
    {
      year: 9,
      dgSet: { initialCost: 15, maintenanceCost: 10.8, runningCost: 160.38 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 0.9,
        runningCost: 29.16,
        savings: 126.12,
      },
    },
    {
      year: 10,
      dgSet: { initialCost: 15, maintenanceCost: 12, runningCost: 186.3 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 1,
        runningCost: 32.4,
        savings: 149.9,
      },
    },
    {
      year: 11,
      dgSet: { initialCost: 15, maintenanceCost: 13.2, runningCost: 204.93 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 1,
        runningCost: 35.64,
        savings: 166.49,
      },
    },
    {
      year: 12,
      dgSet: { initialCost: 15, maintenanceCost: 14.4, runningCost: 221 },
      voltraBESS: {
        initialCost: 30,
        maintenanceCost: 1,
        runningCost: 38.88,
        savings: 183.08,
      },
    },
  ];

  return (
    <div className="bg-white p-2 sm:p-4 flex flex-col items-center">
    {/* Chart Container */}
    <div className="w-full max-w-2xl">
      {/* Y-axis labels and grid lines */}
      <div className="flex">
        <div className="w-12 sm:w-20 flex flex-col justify-between h-48 sm:h-64 text-xs sm:text-sm text-gray-600 pr-1 sm:pr-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-end h-8 sm:h-12">
              {(5 - i) * scale[year]}
            </div>
          ))}
        </div>
  
        {/* Bars */}
        <div className="flex-1 flex justify-around h-48 sm:h-64 relative">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-t border-gray-500 w-full h-8 sm:h-12" />
            ))}
          </div>
  
          {/* Bar columns with transitions */}
          <div key={year} className="relative h-full w-16 sm:w-24">
            {/* Initial Cost (Black) */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-black transition-all duration-300 ease-in-out"
              style={{
                height: `${(chartData[year].dgSet.initialCost / (scale[year] * 5)) * 100}%`,
              }}
            />
            {/* Maintenance Cost (Light Blue) */}
            <div
              className="absolute left-0 right-0 bg-blue-200 transition-all duration-300 ease-in-out"
              style={{
                height: `${(chartData[year].dgSet.maintenanceCost / (scale[year] * 5)) * 100}%`,
                bottom: `${(chartData[year].dgSet.initialCost / (scale[year] * 5)) * 100}%`,
              }}
            />
            {/* Running Cost (Blue) */}
            <div
              className="absolute left-0 right-0 bg-blue-600 transition-all duration-300 ease-in-out"
              style={{
                height: `${(chartData[year].dgSet.runningCost / (scale[year] * 5)) * 100}%`,
                bottom: `${((chartData[year].dgSet.initialCost + chartData[year].dgSet.maintenanceCost) / (scale[year] * 5)) * 100}%`,
              }}
            />
            {/* Savings (Green) */}
          </div>
          <div className="relative h-full w-16 sm:w-24">
            {/* Initial Cost (Black) */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-black transition-all duration-300 ease-in-out"
              style={{
                height: `${(chartData[year].voltraBESS.initialCost / (scale[year] * 5)) * 100}%`,
              }}
            />
            {/* Maintenance Cost (Light Blue) */}
            <div
              className="absolute left-0 right-0 bg-blue-200 transition-all duration-300 ease-in-out"
              style={{
                height: `${(chartData[year].voltraBESS.maintenanceCost / (scale[year] * 5)) * 100}%`,
                bottom: `${(chartData[year].voltraBESS.initialCost / (scale[year] * 5)) * 100}%`,
              }}
            />
            {/* Running Cost (Blue) */}
            <div
              className="absolute left-0 right-0 bg-blue-600 transition-all duration-300 ease-in-out"
              style={{
                height: `${(chartData[year].voltraBESS.runningCost / (scale[year] * 5)) * 100}%`,
                bottom: `${((chartData[year].voltraBESS.initialCost + chartData[year].voltraBESS.maintenanceCost) / (scale[year] * 5)) * 100}%`,
              }}
            />
            {/* Savings (Green) */}
            {chartData[year].voltraBESS.savings > 0 && (
              <div
                className="absolute left-0 right-0 bg-green-500 transition-all duration-300 ease-in-out"
                style={{
                  height: `${(chartData[year].voltraBESS.savings / (scale[year] * 5)) * 100}%`,
                  bottom: `${((chartData[year].voltraBESS.initialCost + chartData[year].voltraBESS.maintenanceCost + chartData[year].voltraBESS.runningCost) / (scale[year] * 5)) * 100}%`,
                }}
              />
            )}
          </div>
        </div>
      </div>
  
      {/* X-axis labels */}
      <div className="flex mt-2 sm:mt-4">
        <div className="w-12 sm:w-20" />
        <div className="flex-1 flex justify-around">
          <div className="w-16 sm:w-24 text-center text-xs sm:text-base font-gilroy">DG Set</div>
          <div className="w-16 sm:w-24 text-center text-xs sm:text-base font-gilroy">Voltra BESS</div>
        </div>
      </div>
  
      {/* Legend */}
      <div className="mt-4 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-6 font-gilroy">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black" />
          <span className="text-xs sm:text-sm">Initial Cost</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-200" />
          <span className="text-xs sm:text-sm">Maintenance Cost</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600" />
          <span className="text-xs sm:text-sm">Running Cost</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500" />
          <span className="text-xs sm:text-sm">Savings</span>
        </div>
      </div>
      <div className="text-center text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">*values in INR Lakhs</div>
      <div className="text-center text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">*estimate for a 120 KV Load</div>
    </div>
  </div>
  );
}

export default Graph;