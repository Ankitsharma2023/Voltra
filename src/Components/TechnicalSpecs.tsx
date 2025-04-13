import React, { useState } from "react";
import SpecModal from "./Technical";

type SpecItem = {
  title: string;
  value: string;
  icon: string | undefined;
};

type TechnicalSpecsProps = {
  specs: SpecItem[];
  data: SpecGroup[];
  title: string;
};
type SpecGroup = {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
};
const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({
  specs,
  data,
  title,
}) => {
  const [openModal, setModalOpen] = useState(false);
  console.log(data);
  return (
    <div className="px-24">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Technical Specifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {specs.map((spec, index) =>
          index != specs.length - 1 ? (
            <div
              key={index}
              className="bg-[#FAFAFA] rounded-sm p-2 py-4 flex flex-col space-y-2 max-w-[280px]"
            >
              <div className="flex flex-row w-full justify-start items-center gap-4 text-blue-600 w-full h-full">
                <img src={spec.icon} alt={spec.title} className="" />
                <div className="text-lg font-medium text-gray-700 flex flex-col items-start justify-center">
                  {spec.title}
                  <div className="text-sm text-gray-500 ">{spec.value}</div>
                </div>
              </div>
            </div>
          ) : null,
        )}
        <div
          className="bg-[#FAFAFA] rounded-sm p-4 flex flex-col space-y-2 max-w-[280px]"
          onClick={() => setModalOpen(true)}
        >
          <div className="flex flex-row w-full justify-start items-center gap-4 text-blue-600 w-full h-full">
            <div className="text-lg font-medium text-gray-700 flex flex-col items-start justify-center">
              {specs[specs.length - 1].title}
            </div>
            <img
              src={specs[specs.length - 1].icon}
              alt={specs[specs.length - 1].title}
              className=""
            />
          </div>
        </div>
      </div>
      <SpecModal
        isOpen={openModal}
        onClose={() => setModalOpen(false)}
        data={data}
        title={title}
      />
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-sm">
          GET VOLT-MAX
        </button>
        <button className="border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold py-2 px-6 rounded-sm">
          DOWNLOAD BROCHURE
        </button>
      </div>
    </div>
  );
};

export default TechnicalSpecs;
