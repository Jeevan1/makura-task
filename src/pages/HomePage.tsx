import Banner from "../components/Banner";
import Compliance from "../components/Compliance";
import ContactUs from "../components/ContactUs";
import Features from "../components/Features";
import KeyAspects from "../components/KeyAspects";
import Teams from "../components/Teams";
import Vison from "../components/Vison";
import WhyFinconex from "../components/WhyFinconex";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
