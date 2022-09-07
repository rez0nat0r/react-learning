import Home from "./pages/Home/Home";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
