import Footer from "../app-footer/app-footer";
import Header from "../app-header/app-header";
import Info from "../app-sections/app-info/app-info";
import Subscribe from "../app-sections/app-subscribe/app-subscribe";
import "./app.scss";

const App = () => {
  return (
    <>
      <Header />
      <Info />
      <Subscribe/>
      <Footer/>
    </>
  );
};

export default App;
