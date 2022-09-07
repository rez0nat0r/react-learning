import Home from "./pages/home/Home";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "./app.scss";

const App = () => {
  return (
    <>
      <Header/>
      <Home />
      <Footer/>
    </>
  );
};

export default App;
