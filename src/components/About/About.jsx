import { useEffect, useState } from "react";
import AboutTitle from "./AboutTitle";
import AboutDescription from "./AboutDescription";
import AboutActions from "./AboutActions";
import { getAboutPage } from "../../lib/api";

const defaultAbout = {
  title: {
    line1: "NOUS SOMMES LE PARTENAIRE QUI",
    line2: "DONNE VIE AUX AMBITIONS",
  },
  description:
    "Une agence d'innovation digitale qui accompagne les entreprises et les porteurs de projets dans leur transformation et leur évolution.",
  actions: [
    { id: 1, label: "Démarrer un projet", href: "#contact", variant: "primary" },
    { id: 2, label: "Découvrir nos réalisations", href: "/projets", variant: "secondary" },
  ],
};

const About = () => {
  const [aboutContent, setAboutContent] = useState(defaultAbout);

  useEffect(() => {
    let active = true;

    async function loadAbout() {
      const data = await getAboutPage();
      if (!active || !data) return;

      setAboutContent({
        ...defaultAbout,
        ...data,
        title: data.title || defaultAbout.title,
        actions: Array.isArray(data.actions) && data.actions.length ? data.actions : defaultAbout.actions,
      });
    }

    loadAbout();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="about"
      className="relative flex w-full items-start justify-center px-4 pb-16 pt-44 sm:px-6 sm:pb-20 sm:pt-52 md:px-8 md:pb-24 md:pt-60 lg:px-6 lg:pb-28 lg:pt-64"
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