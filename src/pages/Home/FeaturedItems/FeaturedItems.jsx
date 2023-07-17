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
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="md:grid grid-cols-2 justify-center items-center bg-gradient-to-r from-red-400 to-purple-700 py-8 md:py-12 lg:py-9">
            <div className="relative">
              <div className="absolute top-3 md:top-1 left-16 lg:left-20 xl:left-40 badge bg-red-600 border-0 text-white rounded-full py-7 px-3 lg:py-10 lg:px-5 flex flex-col animate-sway" data-aos="fade-left"
                data-aos-duration="1000">
                <p className="text-base lg:text-xl font-semibold tracking-[.4px]">57%</p>
                <p className="tracking-[.4px]">Offer</p>
              </div>
              <img
                src="https://i.ibb.co/Mgwtmvh/img1-2.png"
                alt=""
                data-aos="fade-right"
                data-aos-duration="1000"
              />
            </div>
            <div className="ps-4 space-y-6">
              <h2
                className="text-2xl md:text-4xl text-white font-bold w-10/12 text-start"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Join Now & Earn 5% Rewads on Every Order.
              </h2>
              <p
                className="md:text-xl text-white w-10/12 text-start"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                $280.00
              </p>
              <div
                className="flex justify-start items-center gap-3 pb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <button className="flex items-center px-4 py-3 md:px-6 md:py-[14px] text-white bg-[#df2c50] hover:bg-[#268ccc] border-0 duration-500">
                  <FaShoppingBasket className="mr-2" />
                  <span>Buy Now</span>
                </button>
                <Link to="/products">
                  <button className="px-4 py-[10px] md:px-6 md:py-3 border-2 text-white bg-black hover:bg-transparent duration-500">
                    View Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:grid grid-cols-2 justify-center items-center bg-gradient-to-r from-blue-300 to-purple-700 pb-20">
            <img src="https://i.ibb.co/ZYHP12x/img2.png" alt="" />
            <div className="ps-4 space-y-6 pt-4">
              <h2
                className="text-2xl md:text-4xl text-white font-bold w-11/12 lg:w-10/12 text-start"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Preferable Designed New Nike Tech Pack for Men.
              </h2>
              <p
                className="md:text-xl text-white w-10/12 text-start"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                $320.00
              </p>
              <div
                className="flex justify-start items-center gap-3 pb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <button className="flex items-center px-4 py-3 md:px-6 md:py-[14px] text-white bg-[#df2c50] hover:bg-[#b000b9] border-0 duration-500">
                  <FaShoppingBasket className="mr-2" />
                  <span>Buy Now</span>
                </button>
                <Link to="/products">
                  <button className="px-4 py-[10px] md:px-6 md:py-3 border-2 text-white bg-black hover:bg-transparent duration-500">
                    View Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FeaturedItems;
