import React from "react";

function Graph({ runningCost }: { runningCost: number }) {
  const data = [
    {
      name: "DG Set",
      initialCost: 34,
      maintenanceCost: 5,
      runningCost: runningCost + 20,
      savings: 0,
    },
    {
      name: "Voltra BESS",
      initialCost: 37,
      maintenanceCost: 0,
      runningCost: runningCost - 30,
      savings: 52,
    },
  ];

  return (
    <div className="bg-white p-4 flex flex-col items-center">
      {/* Chart Container */}
      <div className="w-full max-w-2xl">
        {/* Y-axis labels and grid lines */}
        <div className="flex">
          <div className="w-20 flex flex-col justify-between h-64 text-sm text-gray-600 pr-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex items-center justify-end h-12">
                {6 - i}k
              </div>
            ))}
          </div>

          {/* Bars */}
          <div className="flex-1 flex justify-around h-64 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-t border-gray-200 w-full h-12" />
              ))}
            </div>

            {/* Bar columns */}
            {data.map((item, index) => (
              <div key={index} className="relative h-full w-24">
                {/* Initial Cost (Black) */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-black"
                  style={{ height: `${item.initialCost}%` }}
                />
                {/* Maintenance Cost (Light Blue) */}
                <div
                  className="absolute left-0 right-0 bg-blue-200"
                  style={{
                    height: `${item.maintenanceCost}%`,
                    bottom: `${item.initialCost}%`,
                  }}
                />
                {/* Running Cost (Blue) */}
                <div
                  className="absolute left-0 right-0 bg-blue-600"
                  style={{
                    height: `${item.runningCost}%`,
                    bottom: `${item.initialCost + item.maintenanceCost}%`,
                  }}
                />
                {/* Savings (Green) */}
                {item.savings > 0 && (
                  <div
                    className="absolute left-0 right-0 bg-green-500"
                    style={{
                      height: `${item.savings}%`,
                      bottom: `${item.initialCost + item.maintenanceCost + item.runningCost}%`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* X-axis labels */}
        <div className="flex mt-4">
          <div className="w-20" />
          <div className="flex-1 flex justify-around">
            {data.map((item, index) => (
              <div key={index} className="w-24 text-center font-medium">
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-black" />
            <span className="text-sm">Initial Cost</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-200" />
            <span className="text-sm">Maintenance Cost</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600" />
            <span className="text-sm">Running Cost</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500" />
            <span className="text-sm">Savings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
