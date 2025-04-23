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
  productId: number; // Add productId prop
};

type SpecGroup = {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
};

// Sample image URLs for specific product IDs
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
  
  // Check if this product should show an image popup
  const shouldShowImagePopup = [2, 3, 4, 5].includes(productId);
  
  // Handle the click on the "Read More" button
  const handleReadMoreClick = () => {
    if (shouldShowImagePopup) {
      setImagePopupOpen(true);
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="px-24">
      <br/>
      <br/>
      <br/>

      <h2 className="text-[40px] font-medium text-center text-[#0C33F2] mb-6">
        Technical Specifications
      </h2>
      <br/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {specs.map((spec, index) =>
          index !== specs.length - 1 ? (
            <div
              key={index}
              className="bg-[#FAFAFA] rounded-sm p-6 flex items-center h-24"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0 w-12 flex justify-center">
                  <img src={spec.icon} alt={spec.title} />
                </div>
                <div className="text-[#000000] font-gilroy font-bold flex flex-col">
                  {spec.title}
                  <div className="text-[16px] font-gilroy  font-medium text-[#808080]">{spec.value}</div>
                </div>
              </div>
            </div>
          ) : null
        )}
        <div
          className="bg-[#FAFAFA] rounded-sm p-6 flex items-center h-24 cursor-pointer hover:bg-gray-100"
          onClick={handleReadMoreClick}
        >
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-medium text-gray-700">
              {specs[specs.length - 1].title}
            </div>
            <div className="flex-shrink-0">
              <img
                src={specs[specs.length - 1].icon}
                alt={specs[specs.length - 1].title}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Regular specs modal for non-image products */}
      <SpecModal 
        isOpen={openModal}
        onClose={() => setModalOpen(false)}
        data={data}
        title={title}
      />
      
      {/* Image popup for specific products */}
      {shouldShowImagePopup && (
        <ImageSpecModal 
          isOpen={openImagePopup}
          onClose={() => setImagePopupOpen(false)}
          imageUrl={productImages[productId as keyof typeof productImages]}
          title={title}
        />
      )}
      
      <div className="mt-12 flex justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-sm">
          GET {title}
        </button>
        <button className="border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold py-2 px-6 rounded-sm">
          DOWNLOAD BROCHURE
        </button>
      </div>
    </div>
  );
};

// New component for image-based spec popups
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
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center font-gilroy">
      <div className="relative bg-white w-full max-w-5xl rounded-xl shadow-lg p-4 overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-gilroy">{title} </h2>
        <div className="flex justify-center items-center">
          <img 
            src={imageUrl} 
            alt={`${title} Technical Specifications`} 
            className="max-w-full max-h-[70vh]" 
          />
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;