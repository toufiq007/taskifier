import FooterSection from "./Footer/Footer";
import Header from "./header/Header";
import Hero from "./HeroSection/Hero";
import Taskboard from "./taskboard/Taskboard";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Taskboard />
      <FooterSection />
    </>
  );
};

export default Home;
