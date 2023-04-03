import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='mainLayout'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
