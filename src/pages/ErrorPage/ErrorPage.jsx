import Lottie from "lottie-react";
import error from "../../assets/files/404.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <Lottie
        animationData={error}
        loop={true}
        className="w-7/12 mx-auto"
      ></Lottie>
      <Link
        to="/"
        className="bg-[#b000b9] hover:bg-[#e84766] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-500 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
