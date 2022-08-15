import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className="lg:px-56 md:px-32 sm:px-10 bg-background">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Container;
