import { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");

  // Menu toggle functionality
  const onToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen ? "Closed" : "Opened");
  };

  // Dark Or Light Mood effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Dark Or Light Mood handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="flex justify-between items-center px-3 py-2 md:px-8 md:py-4 bg-[#90cdf4] dark:bg-slate-700">
        <div>
          <img src={logo} className="w-28 lg:w-36" alt="Logo" />
        </div>
        <div
          className={`absolute lg:static bg-[#90cdf4] dark:bg-slate-700 dark:text-white min-h-[60vh] lg:min-h-fit left-0 ${
            isMenuOpen ? "top-[20%] md:top-[22%]" : "top-[-100%]"
          } w-full lg:w-auto flex items-center px-5 duration-700`}
        >
          <div className="flex lg:flex-row flex-col lg:items-center gap-[3vw] lg:gap-[2vw] xl:gap-[3vw]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
              }
            >
              <p className="hover:text-[#e84766] font-medium hover:duration-500">
                Home
              </p>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
              }
            >
              <p className="hover:text-[#e84766] font-medium hover:duration-500">
                Products
              </p>
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
              }
            >
              <p className="hover:text-[#e84766] font-medium hover:duration-500">
                Dashboard
              </p>
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
              }
            >
              <p className="hover:text-[#e84766] font-medium hover:duration-500">
                Cart Icon
              </p>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
              }
            >
              <p className="hover:text-[#e84766] font-medium hover:duration-500">
                Contact Us
              </p>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
              }
            >
              <p className="hover:text-[#e84766] font-medium hover:duration-500">
                About Us
              </p>
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-[1vw]">
          <div>
            {isDarkMode ? (
              <div className="text-xl" onClick={handleThemeSwitch}>
                <BsSun
                  title="Make Light"
                  className="text-xl md:text-2xl cursor-pointer"
                />
              </div>
            ) : (
              <div className="text-xl" onClick={handleThemeSwitch}>
                <BsMoonStars
                  title="Make Dark"
                  className="text-xl md:text-2xl cursor-pointer"
                />
              </div>
            )}
          </div>
          <button className="bg-[#b000b9] hover:bg-[#e84766] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-500 rounded-full">
            Login
          </button>
          {isMenuOpen ? (
            <IoMdClose
              onClick={onToggleMenu}
              className="text-xl md:text-2xl cursor-pointer lg:hidden"
            />
          ) : (
            <FiMenu
              onClick={onToggleMenu}
              className="text-xl md:text-2xl cursor-pointer lg:hidden"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
