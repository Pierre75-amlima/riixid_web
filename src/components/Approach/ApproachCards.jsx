import { useEffect, useState } from "react";
import ApproachCard from "./ApproachCard";
import { getApproachCards, normalizeStrapiImage } from "../../lib/api";

const defaultCards = [
  {
    image: "/src/assets/img1.jpg",
    badge: "Stratégie digitale",
    title: "Comprendre avant de concevoir",
    description:
      "La BCE dévoile dix maquettes pour ses futurs billets en euros et laisse les Européens voter jusqu'au 21 septembre.",
  },
  {
    image: "/src/assets/img2.jpg",
    badge: "Design & Expérience utilisateur",
    title: "Créer des expériences qui marquent",
    description:
      "Nous concevons des interfaces modernes et intuitives qui facilitent l'interaction entre vos clients et votre marque.",
  },
  {
    image: "/src/assets/img3.jpg",
    badge: "Technologie & Innovation",
    title: "Transformer les idées en solutions concrètes.",
    description:
      "Nous développons des produits digitaux performants : sites web, applications, plateformes SaaS et solutions métiers.",
  },
];

export default function ApproachCards() {
  const [cards, setCards] = useState(defaultCards);

  useEffect(() => {
    let active = true;

    async function loadCards() {
      const data = await getApproachCards();
      if (!active || !Array.isArray(data)) return;

      const normalized = data.map((item) => ({
        image: normalizeStrapiImage(item.image),
        badge: item.badge || item.title || "",
        title: item.title || "",
        description: item.description || "",
      }));

      if (normalized.length) setCards(normalized);
    }

    loadCards();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
      {cards.map((card, i) => (
        <ApproachCard key={card.title || i} {...card} />
      ))}
    </div>
  );
}