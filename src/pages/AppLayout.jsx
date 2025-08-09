import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const AppLayout = () => {
  return (
    <div className="min-h-screen max-w-7xl lg:max-w-8xl xl:max-w-9xl 3xl:max-w-10xl container mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
