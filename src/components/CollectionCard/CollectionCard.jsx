import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";



const CollectionCard = ({ product }) => {
  const { product_image, product_name, price } = product;
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="m-4 p-4 shadow-xl rounded-lg" data-aos="fade-down"
    data-aos-duration="1000">
      <img
        className="w-8/12 h-4/6 mx-auto object-contain"
        src={product_image}
        alt={product_name}
      />
      <div className="p-4">
        <h3 className="md:text-xs lg:text-sm xl:text-xl font-medium mb-2">{product_name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 mb-2 dark:text-white">${price}</p>

          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-[#e84766] hover:bg-[#b000b9] duration-500 text-white py-2 px-4 rounded tooltip tooltip-open tooltip-bottom tooltip-info"
            data-tip={showTooltip ? "View Details" : ""}
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
