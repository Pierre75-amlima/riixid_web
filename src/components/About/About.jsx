import AboutTitle from "./AboutTitle";
import AboutDescription from "./AboutDescription";
import AboutActions from "./AboutActions";
import { aboutContent } from "./aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-start justify-center px-6 pt-56 pb-32"
      style={{
        background: `
          radial-gradient(ellipse 80% 100% at 50% 0%, #a01515 0%, transparent 60%),
          radial-gradient(ellipse 100% 100% at 50% 100%, #7a0f0f 0%, transparent 70%),
          linear-gradient(180deg, #8b1010 0%, #6a0a0a 50%, #4a0505 100%)
        `,
      }}
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