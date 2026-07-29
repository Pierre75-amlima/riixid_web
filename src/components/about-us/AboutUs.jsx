import AboutUsHeader from "./AboutUsHeader";
import AboutUsVisual from "./AboutUsVisual";

const AboutUs = () => {
  return (
    <section id="about-us" className="w-full bg-white py-20 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <AboutUsHeader />
        <AboutUsVisual />
      </div>
    </section>
  );
};

export default AboutUs;