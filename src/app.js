import Home from "../src/componentsBasic/home/home";
import "./app.scss";
import Footer from "./componentsUniversal/footer/footer";
import Header from "./componentsUniversal/header/header";

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
