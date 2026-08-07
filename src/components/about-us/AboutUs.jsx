import AboutUsHeader from "./AboutUsHeader";
import AboutUsVisual from "./AboutUsVisual";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="w-full bg-gradient-to-b from-white via-gray-5 to-gray-100
                 px-4 py-14 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <AboutUsHeader />
        <AboutUsVisual />
      </div>
    </section>
  );
};

export default AboutUs;