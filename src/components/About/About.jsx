import AboutTitle from "./AboutTitle";
import AboutDescription from "./AboutDescription";
import AboutActions from "./AboutActions";
import { aboutContent } from "./aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-32"
    >
      <div className="w-full max-w-7xl mx-auto">
        <AboutTitle title={aboutContent.title} />
        <AboutDescription text={aboutContent.description} />
        <AboutActions actions={aboutContent.actions} />
      </div>
    </section>
  );
};

export default About;