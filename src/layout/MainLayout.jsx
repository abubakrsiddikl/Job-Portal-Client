import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Toaster></Toaster>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
