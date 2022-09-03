import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Footer from "./componentsUniversal/footer/Footer";
import Header from "./componentsUniversal/header/Header";
import Home from "./componentsBasic/home/Home";
import About from "./componentsBasic/about/About";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
