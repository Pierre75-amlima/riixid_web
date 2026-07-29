import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import About from "../components/about/About";
import AboutUs from "../components/about-us/AboutUs";
import Values from "../components/values/Values";
import PartnerBanner from "../components/PartnerBanner/PartnerBanner";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a0505] via-[#5c1010] to-[#8b1a1a] text-white overflow-hidden">
      <Navbar />
      <main>
        <About />
        <AboutUs />
        <Values />
        <PartnerBanner />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;