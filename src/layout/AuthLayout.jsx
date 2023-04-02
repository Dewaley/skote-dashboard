import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
