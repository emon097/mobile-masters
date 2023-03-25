import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Nav from "../component/Nav/Nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
