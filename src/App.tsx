import Banner from "./components/Banner";
import Compliance from "./components/Compliance";
import Features from "./components/Features";
import KeyAspects from "./components/KeyAspects";
import Header from "./components/layout/Header";
import Teams from "./components/Teams";
import Vison from "./components/Vison";
import WhyFinconex from "./components/WhyFinconex";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/App.css";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="bg-dark">
        <Banner />
        <Features />
        <KeyAspects />
        <WhyFinconex />
        <Compliance />
        <Vison />
        <Teams />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
