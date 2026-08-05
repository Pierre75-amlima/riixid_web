import ApproachCard from "./ApproachCard";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const cards = [
  {
    image: img1,
    badge: "Stratégie digitale",
    title: "Comprendre avant de concevoir",
    description:
      "La BCE dévoile dix maquettes pour ses futurs billets en euros et laisse les Européens voter jusqu'au 21 septembre.",
  },
  {
    image: img2,
    badge: "Design & Expérience utilisateur",
    title: "Créer des expériences qui marquent",
    description:
      "Nous concevons des interfaces modernes et intuitives qui facilitent l'interaction entre vos clients et votre marque.",
  },
  {
    image: img3,
    badge: "Technologie & Innovation",
    title: "Transformer les idées en solutions concrètes.",
    description:
      "Nous développons des produits digitaux performants : sites web, applications, plateformes SaaS et solutions métiers.",
  },
];

export default function ApproachCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, i) => (
        <ApproachCard key={i} {...card} />
      ))}
    </div>
  );
}