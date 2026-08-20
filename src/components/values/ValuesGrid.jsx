import { useEffect, useState } from "react";
import ValueCard from "./ValueCard";
import { getValues, normalizeStrapiImage } from "../../lib/api";

const defaultValues = [
  {
    id: 1,
    icon: "/strategie.svg",
    title: "Parcours",
    subtitle: "Née d'une vision : rendre l'innovation accessible à tous.",
    description:
      "Créée avec l'ambition de contribuer à l'évolution numérique des entreprises, Riixid accompagne les organisations dans la conception de projets modernes et adaptés aux nouveaux usages.\n\nAu fil des collaborations et des expériences, nous avons développé une approche basée sur la compréhension des besoins, la créativité et la recherche constante d'excellence.",
    variant: "orange",
  },
  {
    id: 2,
    icon: "/strategie.svg",
    title: "Mission",
    subtitle: "Transformer les idées en opportunités.",
    description:
      "Notre mission est d'accompagner les entrepreneurs, entreprises et organisations dans leurs projets d'évolution en apportant une expertise multidisciplinaire combinant innovation, design et technologie.",
    variant: "white",
  },
  {
    id: 3,
    icon: "/strategie.svg",
    title: "Vision",
    subtitle: "Construire un avenir où chaque idée ambitieuse peut prendre forme.",
    description:
      "Nous croyons que les grandes transformations commencent par une idée. Notre rôle est de créer l'environnement, les compétences et les outils nécessaires pour permettre à ces idées de devenir des projets à fort impact.",
    variant: "white",
  },
  {
    id: 4,
    icon: "/strategie.svg",
    title: "Engagement",
    subtitle: "Plus qu'une agence, un partenaire pour construire demain.",
    description:
      "Chez Riixid, nous ne nous contentons pas de réaliser des projets. Nous accompagnons des visions, développons des opportunités et contribuons à créer les innovations qui façonneront les marchés de demain.",
    variant: "black",
  },
];

const ValuesGrid = () => {
  const [valuesCards, setValuesCards] = useState(defaultValues);

  useEffect(() => {
    let active = true;

    async function loadValues() {
      const data = await getValues();
      if (!active || !Array.isArray(data)) return;

      const normalized = data.map((item) => ({
        id: item.id || item.title,
        icon: normalizeStrapiImage(item.icon),
        title: item.title || "",
        subtitle: item.subtitle || "",
        description: item.description || "",
        variant: item.variant || "white",
      }));

      if (normalized.length) setValuesCards(normalized);
    }

    loadValues();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
      {valuesCards.map((card) => (
        <ValueCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          variant={card.variant}
        />
      ))}
    </div>
  );
};

export default ValuesGrid;