import React from "react";
import { Helmet } from "react-helmet-async";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login&signup/login.png";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>WP | Login</title>
      </Helmet>
      <div className="hero-content overflow-auto">
        <div className="flex flex-col lg:flex-row card justify-center items-center lg:mt-40">
          <div className="lg:w-1/2">
            <img className="lg:w-full" src={loginImage} alt="" />
          </div>
          <form className="card-body w-full lg:w-1/2 border rounded-xl">
            <h2 className="text-3xl text-center font-bold">Login Now</h2>

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
                placeholder="Type here"
                className="input input-bordered"
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
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <div className="absolute top-[70px] right-2 transform -translate-y-1/2 h-8 flex items-center cursor-pointer">
                {/* <FiEyeOff className="text-gray-500" /> */}
                <FiEye className="text-gray-500" />
              </div>
            </div>

            {/* <p className="text-red-600 text-sm m-1 font-semibold">{error}</p> */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn text-lg bg-[#133795] hover:bg-violet-800 text-white  font-semibold border-none"
              />
            </div>
            <div className="text-center">
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">Or Sign In with</div>
              </div>
              <h2 className="font-semibold">
                Have not any account?{" "}
                <Link to="/signUp">
                  <span className="text-[#FF3811]">Sign Up</span>
                </Link>{" "}
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
