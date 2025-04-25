import React from "react";

export type SpecGroup = {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
};

export type SpecModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: SpecGroup[];
  title: string;
};

const SpecModal: React.FC<SpecModalProps> = ({
  isOpen,
  onClose,
  data,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center font-gilroy p-4">
      <div className="relative bg-white w-full max-w-5xl rounded-xl shadow-lg p-6 md:p-8 overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          ✕
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm text-gray-800">
          <div className="flex flex-col md:w-1/2 gap-6">
            <div className="px-2 md:px-4">
              <div className="text-blue-600 font-semibold text-lg mb-2">
                {data[0].title}
              </div>
              <div className="space-y-1">
                {data[0].items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between">
                    <span className="break-words max-w-[50%]">{item.label}</span>
                    <span className="break-words max-w-[50%] text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-2 md:px-4">
              <div className="text-blue-600 font-semibold text-lg mb-2">
                {data[1].title}
              </div>
              <div className="space-y-1">
                {data[1].items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between">
                    <span className="break-words max-w-[50%]">{item.label}</span>
                    <span className="break-words max-w-[50%] text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-2 md:px-4 md:w-1/2">
            <div className="text-blue-600 font-semibold text-lg mb-2">
              {data[2].title}
            </div>
            <div className="space-y-1">
              {data[2].items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-between">
                  <span className="break-words max-w-[50%]">{item.label}</span>
                  <span className="break-words max-w-[50%] text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecModal;