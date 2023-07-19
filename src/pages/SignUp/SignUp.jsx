import React from "react";
import { Helmet } from "react-helmet-async";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import signUpImage from "../../assets/images/login&signup/signup.png";

const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>WP | Sign Up</title>
      </Helmet>
      <div className="hero-content overflow-auto">
        <div className="flex flex-col lg:flex-row card justify-center items-center lg:mt-40">
          <div className="lg:w-1/2 pb-6 lg:pb-0">
            <img className="lg:w-full" src={signUpImage} alt="" />
          </div>
          <div className="card-body w-full lg:w-1/2 border rounded-xl shadow-xl">
            <form>
              <h2 className="text-3xl text-center font-bold text-gray-600 dark:text-white">
                Sign Up Now
              </h2>
             
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold dark:text-white">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input border-2 border-gray-400 focus:border-[#e84766]"
                  required
                />
              </div>

               {/* Email Field */}
               <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold dark:text-white">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your Email"
                  className="input border-2 border-gray-400 focus:border-[#e84766]"
                  required
                />
              </div>

               {/* Photo URL Field */}
               <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold dark:text-white">
                    Photo URL
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Photo URL"
                  className="input border-2 border-gray-400 focus:border-[#e84766]"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg font-semibold dark:text-white">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="input border-2 border-gray-400 focus:border-[#e84766]"
                  required
                />
                <div className="absolute top-[70px] right-2 transform -translate-y-1/2 h-8 flex items-center cursor-pointer">
                  {/* <FiEyeOff className="text-gray-500" /> */}
                  <FiEye className="text-gray-600 text-lg" />
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg font-semibold dark:text-white">
                    Confirm Password
                  </span>
                </label>
                <input
                  name="Confirm"
                  type="password"
                  placeholder="Confirm Your Password"
                  className="input border-2 border-gray-400 focus:border-[#e84766]"
                  required
                />
                <div className="absolute top-[70px] right-2 transform -translate-y-1/2 h-8 flex items-center cursor-pointer">
                  {/* <FiEyeOff className="text-gray-500" /> */}
                  <FiEye className="text-gray-600 text-lg" />
                </div>
              </div>

              {/* <p className="text-red-600 text-sm m-1 font-semibold">{error}</p> */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn bg-[#b000b9] hover:bg-[#e84766] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-500 rounded-lg"
                />
              </div>
              <h3 className="font-medium my-2">
                  Already Have An Account ?{" "}
                  <Link to="/login">
                    <span className="text-[#e84766] font-semibold">Login</span>
                  </Link>{" "}
                </h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
