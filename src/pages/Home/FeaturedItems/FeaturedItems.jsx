import React from "react";
// Import Swiper React components
import { FaShoppingBasket } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./FeaturedItems.css";

// import required modules
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const FeaturedItems = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="md:grid grid-cols-2 justify-center items-center bg-gradient-to-r from-red-400 to-purple-700 py-8">
            <img src="https://i.ibb.co/Mgwtmvh/img1-2.png" alt="" />
            <div className="ps-4 space-y-6">
              <h2 className="text-2xl md:text-4xl text-white font-bold w-10/12 text-start">
                Join Now & Earn 5% Rewads on Every Order.
              </h2>
              <p className="md:text-xl text-white w-10/12 text-start">
                $280.00
              </p>
              <div className="flex justify-start items-center gap-3 pb-4">
                <button className="flex items-center px-4 py-3 md:px-6 md:py-[14px] text-white bg-[#df2c50] hover:bg-[#268ccc] border-0 duration-500">
                  <FaShoppingBasket className="mr-2" />
                  <span>Buy Now</span>
                </button>
                <Link to='/products'>
                <button className="px-4 py-[10px] md:px-6 md:py-3 border-2 text-white bg-black hover:bg-transparent duration-500">
                  View Products
                </button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="md:grid grid-cols-2 justify-center items-center bg-gradient-to-r from-blue-300 to-purple-700 pb-14">
            <img src="https://i.ibb.co/ZYHP12x/img2.png" alt="" />
            <div className="ps-4 space-y-6">
              <h2 className="text-2xl md:text-4xl text-white font-bold w-10/12 text-start">
                Join Now & Earn 5% Rewads on Every Order.
              </h2>
              <p className="md:text-xl text-white w-10/12 text-start">
                $320.00
              </p>
              <div className="flex justify-start items-center gap-3 pb-4">
                <button className="flex items-center px-4 py-3 md:px-6 md:py-[14px] text-white bg-[#df2c50] hover:bg-[#b000b9] border-0 duration-500">
                  <FaShoppingBasket className="mr-2" />
                  <span>Buy Now</span>
                </button>
                <Link to='/products'>
                <button className="px-4 py-[10px] md:px-6 md:py-3 border-2 text-white bg-black hover:bg-transparent duration-500">
                  View Products
                </button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FeaturedItems;
