import React, { useState, useEffect } from "react";
import Technical from "../assets/Technical.png";

interface CellData {
  label: string;
  value: string | number;
}

interface RowData {
  acSide: CellData;
  dcSide: CellData;
  general: CellData;
}

interface TableDataArrays {
  ac: RowData[];
  dc: RowData[];
  general: RowData[];
}

interface DynamicTableData {
  // Dynamic data may come as arrays...
  ac?: RowData[];
  dc?: RowData[];
  general?: RowData[];
  // ...or as objects (e.g. from Solutions)
  AC_Side?: { [key: string]: string | number };
  DC_Side?: { [key: string]: string | number };
  General?: { [key: string]: string | number };
}

const TechnicalSpecification: React.FC<{ tableData: DynamicTableData }> = ({
  tableData,
}) => {
  // State to track which tab is active; we assume "ac", "dc", or "general"
  const [activeTab, setActiveTab] = useState<"ac" | "dc" | "general">(
    "general",
  );
  const [normalizedData, setNormalizedData] = useState<TableDataArrays>({
    ac: [],
    dc: [],
    general: [],
  });

  // Normalization: if tableData has array values, use them.
  // Otherwise, if tableData has objects (from Solutions), transform them into arrays.
  useEffect(() => {
    const normalizeSection = (
      arrayKey: "ac" | "dc" | "general",
      objectKey: "AC_Side" | "DC_Side" | "General",
    ): RowData[] => {
      if (tableData[arrayKey]) {
        return tableData[arrayKey] as RowData[];
      }
      if (tableData[objectKey]) {
        return Object.entries(
          tableData[objectKey] as { [key: string]: string | number },
        ).map(([key, value]) => {
          if (arrayKey === "ac") {
            return {
              acSide: { label: key, value },
              dcSide: { label: "", value: "" },
              general: { label: "", value: "" },
            };
          }
          if (arrayKey === "dc") {
            return {
              acSide: { label: "", value: "" },
              dcSide: { label: key, value },
              general: { label: "", value: "" },
            };
          }
          // else "general"
          return {
            acSide: { label: "", value: "" },
            dcSide: { label: "", value: "" },
            general: { label: key, value },
          };
        });
      }
      return [];
    };

    setNormalizedData({
      ac: normalizeSection("ac", "AC_Side"),
      dc: normalizeSection("dc", "DC_Side"),
      general: normalizeSection("general", "General"),
    });
  }, [tableData]);

  const flatCells: CellData[] = normalizedData[activeTab].map((row) => {
    if (activeTab === "ac") return row.acSide;
    if (activeTab === "dc") return row.dcSide;
    return row.general;
  });

  // Group the flatCells into chunks of three
  const groupedCells: CellData[][] = [];
  for (let i = 0; i < flatCells.length; i += 3) {
    groupedCells.push(flatCells.slice(i, i + 3));
  }

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        Technical Specification
      </h1>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
        <div className="w-full lg:w-5/12">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th
                  className={`p-4 text-center cursor-pointer border border-gray-300 ${activeTab === "ac" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
                  onClick={() => setActiveTab("ac")}
                  style={{ width: "33.33%" }}
                >
                  AC SIDE
                </th>
                <th
                  className={`p-4 text-center cursor-pointer border border-gray-300 ${activeTab === "dc" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
                  onClick={() => setActiveTab("dc")}
                  style={{ width: "33.33%" }}
                >
                  DC SIDE
                </th>
                <th
                  className={`p-4 text-center cursor-pointer border border-gray-300 ${activeTab === "general" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
                  onClick={() => setActiveTab("general")}
                  style={{ width: "33.33%" }}
                >
                  General
                </th>
              </tr>
            </thead>
            <tbody>
              {groupedCells && groupedCells.length > 0 ? (
                groupedCells.map((group, rowIndex) => (
                  <tr key={rowIndex}>
                    {group.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-300 p-5"
                      >
                        <div className="text-gray-500 text-sm mb-1">
                          {cell.label}
                        </div>
                        <div className="font-bold text-black">{cell.value}</div>
                      </td>
                    ))}
                    {/* If group has less than 3 items, fill remaining cells */}
                    {group.length < 3 &&
                      Array.from({ length: 3 - group.length }).map((_, i) => (
                        <td
                          key={`empty-${i}`}
                          className="border border-gray-300 p-5"
                        />
                      ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-5 text-center text-gray-500">
                    No data available for this section.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="w-full lg:w-6/12">
          <img
            src={Technical}
            alt="Technical specification"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecification;
