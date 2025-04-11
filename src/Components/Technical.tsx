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
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-5xl rounded-xl shadow-lg p-8 overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="flex flex-row gap-8 text-sm text-gray-800 ">
          <div className="flex flex-col w-1/2">
            <div className="px-4">
              <div className="text-blue-600 font-semibold text-lg mb-2">
                {data[0].title}
              </div>
              <div className="space-y-1 w-full">
                {data[0].items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-center gap-2 w-full"
                  >
                    <span className="w-1/2 underline underline-offset-4">
                      {item.label}
                    </span>
                    <span className="w-1/2 underline underline-offset-4">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4">
              <div className="text-blue-600 font-semibold text-lg mb-2">
                {data[1].title}
              </div>
              <div className="space-y-1">
                {data[1].items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-4 w-1/2">
            <div className="text-blue-600 font-semibold text-lg mb-2">
              {data[2].title}
            </div>
            <div className="space-y-1">
              {data[2].items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-between">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
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
