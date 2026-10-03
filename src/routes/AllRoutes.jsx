import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Repositories from "../pages/Repositories";
import MainLayout from "../layouts/MainLayout";
import RepositoryDetails from "../pages/RepositoryDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/repositories/:owner/:repo" element={<RepositoryDetails />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
