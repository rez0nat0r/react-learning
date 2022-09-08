import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Apply from "./pages/Apply";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./app.scss";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/apply" element={<Apply />} />
    </Routes>
    <Footer />
  </>
);

export default App;
