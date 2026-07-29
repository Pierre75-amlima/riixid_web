import Navbar from "../components/Navbar/Navbar";
import NavMenu from "../components/Navbar/NavMenu";
import Hero from "../components/Hero/Hero";
import Approach from "../components/Approach/Approach";
import Expertises from "../components/Expertises/Expertises";
import PartnerBanner from "../components/PartnerBanner/PartnerBanner";
import Realisations from "../components/Realisations/Realisations";
import FeaturedProject from "../components/FeaturedProject/FeaturedProject";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2F2F2F] via-[#181818] to-[#050505]">
      <Navbar />
      <Hero />
      <Approach />
      <Expertises />
      <PartnerBanner />
      <Realisations />
      <FeaturedProject />
      <Testimonials />
      <Footer />
    </div>
  );
}
