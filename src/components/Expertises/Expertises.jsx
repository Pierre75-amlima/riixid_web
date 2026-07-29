import {
  FiCpu,
  FiEye,
  FiCode,
  FiVolume2,
  FiZap,
  FiMonitor,
} from "react-icons/fi";
import ExpertisesHeader from "./ExpertisesHeader";
import ExpertiseCard from "./ExpertiseCard";

const expertises = [
  // Rangée 1
  {
    icon: FiCpu,
    title: "Stratégie & Transformation digitale",
    description:
      "Nous aidons les entreprises à définir leur vision numérique et à mettre en place des solutions adaptées à leurs objectifs.",
    variant: "light",
  },
  {
    icon: FiEye,
    title: "UX/UI Design & Expérience utilisateur",
    description:
      "Nous concevons des interfaces intuitives et des expériences digitales engageantes centrées sur les besoins des utilisateurs.",
    variant: "orange",
  },
  {
    icon: FiCode,
    title: "Développement de solutions digitales",
    description:
      "Nous transformons vos idées en sites web, applications, plateformes SaaS et outils numériques performants.",
    variant: "light",
  },
  // Rangée 2
  {
    icon: FiVolume2,
    title: "Identité digitale & Communication",
    description:
      "Nous construisons des identités visuelles fortes et des contenus digitaux qui renforcent votre présence en ligne.",
    variant: "light",
  },
  {
    icon: FiZap,
    title: "Innovation & Automatisation",
    description:
      "Nous intégrons des technologies intelligentes pour optimiser vos processus et améliorer votre performance opérationnelle.",
    variant: "dark",
  },
  {
    icon: FiMonitor,
    title: "Formation & Accompagnement digital",
    description:
      "Nous transmettons notre expertise pour aider les équipes et entrepreneurs à mieux maîtriser les outils numériques.",
    variant: "light",
  },
];

export default function Expertises() {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ExpertisesHeader />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {expertises.map((exp, i) => (
            <ExpertiseCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}