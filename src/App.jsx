import React from "react";
import { Route, Routes } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./store/reducers";

import Home from "./pages/Home";
import About from "./pages/About";
import Apply from "./pages/Apply";
import Confirmation from "./pages/Confirmation";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import Course from "./pages/Course";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./app.scss";

const App = () => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;
