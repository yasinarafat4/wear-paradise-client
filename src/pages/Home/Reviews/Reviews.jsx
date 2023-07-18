import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// Import for Ratings
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alisa Johnson",
      image: "https://i.ibb.co/RTwrv9r/consumer1.png",
      description:
        "Wear Paradice is an amazing e-commerce website! They offer a wide range of trendy and high-quality clothing, shoes, and accessories. The user-friendly interface makes it easy to browse and find exactly what you're looking for. Their fast shipping and excellent customer service make shopping a breeze. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://i.ibb.co/xjY8W77/consumer2.png",
      description:
        "I'm absolutely in love with Wear Paradice! They have an incredible selection of fashionable apparel for all occasions. From casual wear to formal attire, they have it all. The website is beautifully designed and provides a seamless shopping experience. The prices are competitive, and the delivery is always prompt. I can't recommend Wear Paradice enough!",
      rating: 4,
    },
    {
      id: 3,
      name: "Mark Johnson",
      image: "https://i.ibb.co/GPqT8gC/consumer3.png",
      description:
        "Wear Paradice is my go-to online store for all things fashion. They offer a vast collection of stylish and on-trend clothing items that suit every taste and budget. The website is easy to navigate, and their product descriptions are accurate. The customer support team is friendly and responsive. I've had nothing but positive experiences with Wear Paradice!",
      rating: 4.5,
    },
  ];

  return (
    <div>
      <SectionTitle heading={"What Our Consumers Say"}></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]}>
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="text-center flex flex-col items-center space-y-3 md:space-y-6 dark:bg-slate-700">
              <div className="w-3/12 md:w-2/12 xl:w-1/12 h-[90px] md:h-[125px] lg:h-[165px] xl:h-[117px] 2xl:h-[213px] rounded-full overflow-hidden">
                <img
                  className="object-cover"
                  src={review.image}
                  alt=""
                />
              </div>
              <h3 className="text-[#b000b9] uppercase text-base md:text-2xl font-semibold">
                {review.name}
              </h3>
              <Rating
                style={{ maxWidth: 150 }}
                value={review.rating}
                readOnly
              />
              <p className="text-sm md:text-md lg:text-lg w-8/12 md:w-9/12 lg:w-8/12">{review.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
