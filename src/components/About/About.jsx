import AboutTitle from "./AboutTitle";
import AboutDescription from "./AboutDescription";
import AboutActions from "./AboutActions";
import { aboutContent } from "./aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex w-full items-start justify-center
                 px-4 pb-16 pt-44
                 sm:px-6 sm:pb-20 sm:pt-52
                 md:px-8 md:pb-24 md:pt-60
                 lg:px-6 lg:pb-28 lg:pt-64"
      style={{
        background: `
          radial-gradient(ellipse 80% 100% at 50% 0%, #a01515 0%, transparent 60%),
          radial-gradient(ellipse 100% 100% at 50% 100%, #7a0f0f 0%, transparent 70%),
          linear-gradient(180deg, #8b1010 0%, #6a0a0a 50%, #4a0505 100%)
        `,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <AboutTitle title={aboutContent.title} />
        <AboutDescription text={aboutContent.description} />
        <AboutActions actions={aboutContent.actions} />
      </div>
    </section>
  );
};

export default About;