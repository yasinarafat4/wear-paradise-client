import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/images/banner/banner-1.png";
import img2 from "../../../assets/images/banner/banner-2.png";
import img3 from "../../../assets/images/banner/banner-3.png";
import img4 from "../../../assets/images/banner/banner-4.png";

const Banner = () => {
  return (
    <Carousel className="text-center w-full lg:w-11/12 mx-auto">
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
    </Carousel>
  );
};

export default Banner;
