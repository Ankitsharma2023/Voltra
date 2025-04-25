import React, { useState } from "react";
import SpecModal from "./Technical";
import VOLT_HVC_Props from "../assets/VOLT_HVC_Props.png";
import VOLT_HVD_Props from "../assets/VOLT_HVD_Props.png";
import VOLT_LVS_Props from "../assets/VOLT_LVS_Props.png";
import VOLT_LVW_Props from "../assets/VOLT_LVW_Props.png";

type SpecItem = {
  title: string;
  value: string;
  icon: string | undefined;
};

type TechnicalSpecsProps = {
  specs: SpecItem[];
  data: SpecGroup[];
  title: string;
  productId: number;
};

type SpecGroup = {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
};

const productImages = {
  2: VOLT_HVC_Props,
  3: VOLT_HVD_Props,
  4: VOLT_LVS_Props,
  5: VOLT_LVW_Props, 
};

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({
  specs,
  data,
  title,
  productId,
}) => {
  const [openModal, setModalOpen] = useState(false);
  const [openImagePopup, setImagePopupOpen] = useState(false);
  
  const shouldShowImagePopup = [2, 3, 4, 5].includes(productId);
  
  const handleReadMoreClick = () => {
    if (shouldShowImagePopup) {
      setImagePopupOpen(true);
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-[#0C33F2] mb-6">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {specs.map((spec, index) =>
            index !== specs.length - 1 ? (
              <div
                key={index}
                className="bg-[#FAFAFA] rounded-sm p-4 sm:p-6 flex items-center h-20 sm:h-24"
              >
                <div className="flex items-center gap-3 sm:gap-4 w-full">
                  <div className="flex-shrink-0 w-8 sm:w-12 flex justify-center">
                    <img src={spec.icon} alt={spec.title} className="w-full max-w-[24px] sm:max-w-[32px]" />
                  </div>
                  <div className="text-[#000000] font-gilroy font-bold flex flex-col">
                    <span className="text-sm sm:text-base">{spec.title}</span>
                    <div className="text-xs sm:text-sm md:text-[16px] font-gilroy font-medium text-[#808080]">
                      {spec.value}
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
          <div
            className="bg-[#FAFAFA] rounded-sm p-4 sm:p-6 flex items-center h-20 sm:h-24 cursor-pointer hover:bg-gray-100"
            onClick={handleReadMoreClick}
          >
            <div className="flex items-center justify-between w-full">
              <div className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
                {specs[specs.length - 1].title}
              </div>
              <div className="flex-shrink-0 w-8 sm:w-12">
                <img
                  src={specs[specs.length - 1].icon}
                  alt={specs[specs.length - 1].title}
                  className="w-full max-w-[24px] sm:max-w-[32px]"
                />
              </div>
            </div>
          </div>
        </div>
        
        <SpecModal 
          isOpen={openModal}
          onClose={() => setModalOpen(false)}
          data={data}
          title={title}
        />
        
        {shouldShowImagePopup && (
          <ImageSpecModal 
            isOpen={openImagePopup}
            onClose={() => setImagePopupOpen(false)}
            imageUrl={productImages[productId as keyof typeof productImages]}
            title={title}
          />
        )}
        
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-sm text-sm sm:text-base">
          <a href="/contact">
            GET {title}
          </a>
          </button>
          <a
              href="https://drive.google.com/file/d/15n9o4lLDUk-KtmwMyIQeSbhqbAulmTsX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 sm:px-6 rounded-sm text-sm sm:text-base">
            DOWNLOAD BROCHURE
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

interface ImageSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

const ImageSpecModal: React.FC<ImageSpecModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center font-gilroy p-4">
      <div className="relative bg-white w-full max-w-5xl rounded-xl shadow-lg p-4 sm:p-6 overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-600 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-blue-700"
        >
          ✕
        </button>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-gilroy">
          {title}
        </h2>
        <div className="flex justify-center items-center">
          <img 
            src={imageUrl} 
            alt={`${title} Technical Specifications`} 
            className="max-w-full max-h-[70vh] object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;