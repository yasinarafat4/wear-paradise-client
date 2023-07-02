import { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { BsMoonStars, BsSun } from "react-icons/bs";

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
    <div className="shadow-lg flex justify-between items-center px-3 py-2 md:px-8 md:py-4">
      <div>
        <img src={logo} className="w-28 lg:w-36" alt="Logo" />
      </div>
      <div
        className={`absolute lg:static bg-white dark:bg-slate-700 dark:text-white min-h-[60vh] lg:min-h-fit left-0 ${
          isMenuOpen ? "top-[20%] md:top-[22%]" : "top-[-100%]"
        } w-full lg:w-auto flex items-center px-5 duration-700`}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center gap-[3vw] lg:gap-[2vw] xl:gap-[3vw]">
          <li>
            <a className="hover:text-gray-500 font-medium" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-medium" href="#">
              Products
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-medium" href="#">
              Dashboard
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-medium" href="#">
              Cart Icon
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-medium" href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-medium" href="#">
              About Us
            </a>
          </li>
        </ul>
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
  );
};

export default Navbar;
