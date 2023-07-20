import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FiEye } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login&signup/login.png";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Great!!!",
          text: "You have logged in successfully!",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("User Not Found. Invalid email or password!");
        } else if (error.code === "auth/wrong-password") {
          setError("Wrong Password. Please try again!");
        } else {
          setError(error.message);
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <Helmet>
        <title>WP | Login</title>
      </Helmet>
      <div className="hero-content overflow-auto">
        <div className="flex flex-col lg:flex-row card justify-center items-center lg:mt-40">
          <div className="lg:w-1/2 pb-6 lg:pb-0">
            <img className="lg:w-full" src={loginImage} alt="" />
          </div>
          <div className="card-body w-full lg:w-1/2 border rounded-xl shadow-xl">
            <form onSubmit={handleLogin}>
              <h2 className="text-3xl text-center font-bold text-gray-600 dark:text-white">
                Login Now
              </h2>
              <div className="text-center">
                <h3 className="font-medium mb-6">
                  Have Not Any Account?{" "}
                  <Link to="/signUp">
                    <span className="text-[#e84766] font-semibold">
                      Sign Up
                    </span>
                  </Link>{" "}
                </h3>
                <div className="flex justify-center items-center gap-4">
                  <button className="flex justify-center items-center w-6/12 border border-gray-400 rounded-md py-2 text-base font-semibold text-gray-600 dark:text-white duration-500">
                    <FcGoogle className="mr-2 text-2xl" />
                    <span>Google</span>
                  </button>
                  <button className="flex justify-center items-center w-6/12 border border-gray-400 rounded-md py-2 text-base font-semibold text-gray-600 dark:text-white duration-500">
                    <BsGithub className="mr-2 text-xl text-gray-900" />
                    <span>GitHub</span>
                  </button>
                </div>
                <div className="flex flex-col w-full">
                  <div className="divider h-10 text-base">Or Sign In with</div>
                </div>
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
                  placeholder="Type here"
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
                  placeholder="Enter your password"
                  className="input border-2 border-gray-400 focus:border-[#e84766]"
                  required
                />
                <div onClick={togglePasswordVisibility} className="absolute top-[70px] right-2 transform -translate-y-1/2 h-8 flex items-center cursor-pointer">
                {showPassword ? (
                    <FiEyeOff className="text-gray-500" />
                  ) : (
                    <FiEye className="text-gray-500" />
                  )}
                </div>
              </div>

              <p className="text-red-600 text-sm m-1 font-semibold">{error}</p>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-[#b000b9] hover:bg-[#e84766] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-500 rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
