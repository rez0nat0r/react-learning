import Footer from "../../componentsUniversal/footer/footer";
import Header from "../../componentsUniversal/header/header";
import Info from "./home-sections/home-Info/home-info";
import Subscribe from "./home-sections/home-subscribe/home-subscribe";

const Home = () => {
  return (
    <>
      <Header/>
      <Info />
      <Subscribe />
      <Footer/>
    </>
  );
};

export default Home;
