import React from "react";
import Navbar from "../components/Navbar";
import MainCard from "../components/MainCard";

const Layout = ({ children }) => {
  return (
    <div className="flex-col overflow-hidden">
      <Navbar />
      <div className="lg:flex lg:justify-center">
        <MainCard />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
