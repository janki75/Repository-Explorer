import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navbar />
     <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
