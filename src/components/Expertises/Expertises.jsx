import ExpertisesHeader from "./ExpertisesHeader";
import ExpertiseCard from "./ExpertiseCard";
import strategieIcon from "../../assets/strategie.svg";
import uxUiIcon from "../../assets/ux-ui-design.svg";
import developpementIcon from "../../assets/developpement.svg";
import identiteIcon from "../../assets/identite-digitale.svg";
import innovationIcon from "../../assets/innovation.svg";
import formationIcon from "../../assets/formation.svg";

const expertises = [
  {
    icon: strategieIcon,
    title: "Stratégie & Transformation digitale",
    description:
      "Nous aidons les entreprises à définir leur vision numérique et à mettre en place des solutions adaptées à leurs objectifs.",
    variant: "light",
  },
  {
    icon: uxUiIcon,
    title: "UX/UI Design & Expérience utilisateur",
    description:
      "Nous concevons des interfaces intuitives et des expériences digitales engageantes centrées sur les besoins des utilisateurs.",
    variant: "orange",
  },
  {
    icon: developpementIcon,
    title: "Développement de solutions digitales",
    description:
      "Nous transformons vos idées en sites web, applications, plateformes SaaS et outils numériques performants.",
    variant: "light",
  },
  {
    icon: identiteIcon,
    title: "Identité digitale & Communication",
    description:
      "Nous construisons des identités visuelles fortes et des contenus digitaux qui renforcent votre présence en ligne.",
    variant: "light",
  },
  {
    icon: innovationIcon,
    title: "Innovation & Automatisation",
    description:
      "Nous intégrons des technologies intelligentes pour optimiser vos processus et améliorer votre performance opérationnelle.",
    variant: "dark",
  },
  {
    icon: formationIcon,
    title: "Formation & Accompagnement digital",
    description:
      "Nous transmettons notre expertise pour aider les équipes et entrepreneurs à mieux maîtriser les outils numériques.",
    variant: "light",
  },
];

export default function Expertises() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <ExpertisesHeader />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {expertises.map((exp, i) => (
            <ExpertiseCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}