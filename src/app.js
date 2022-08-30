import Home from "./componentsBasic/home/Home";
import "./App.scss";
import Footer from "./componentsUniversal/footer/Footer";
import Header from "./componentsUniversal/header/Header";

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
