import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/home";
import News from "../components/News/news";
import LiveCameras from "../components/LiveCameras/liveCameras";
import Contact from "../components/Contact/contact";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/live-cameras" element={<LiveCameras />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
