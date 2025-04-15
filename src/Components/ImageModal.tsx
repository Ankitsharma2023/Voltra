import React from "react";

// Import your product images
import VOLT_HVC from "../assets/VOLT_HVC.png";
import VOLT_HVD from "../assets/VOLT_HVD.png";
import VOLT_LVS from "../assets/VOLT_LVS.png";
import VOLT_LVW from "../assets/VOLT_LVW.png";
import VOLT_HVC_Props from "../assets/VOLT_HVC_Props.png";
import VOLT_HVD_Props from "../assets/VOLT_HVD_Props.png";
import VOLT_LVS_Props from "../assets/VOLT_LVS_Props.png";
import VOLT_LVW_Props from "../assets/VOLT_LVW_Props.png";
type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productId: number;
  title: string;
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  productId,
  title
}) => {
  if (!isOpen) return null;

  // Map product IDs to their respective image assets
  const productImages = {
    2: VOLT_HVC_Props,
    3: VOLT_HVD_Props,
    4: VOLT_LVS_Props,
    5: VOLT_LVW_Props
  };

  // Get the correct image based on product ID
  const imageSource = productImages[productId as keyof typeof productImages];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center font-gilroy">
      <div className="relative bg-white w-full max-w-5xl rounded-xl shadow-lg p-8 overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
        <h2 className="text-3xl font-extrabold text-black tracking-wide">{title}</h2>
        <div className="flex justify-center items-center p-4">
          <img 
            src={imageSource} 
            alt={`${title} Detailed Specifications`}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;