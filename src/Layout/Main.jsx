import {} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div className="bg-white dark:bg-slate-700 dark:text-white">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Main;
