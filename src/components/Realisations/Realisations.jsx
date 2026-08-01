import sino from "../../assets/sino.PNG";
import RealisationsHeader from "./RealisationsHeader";
import RealisationCard from "./RealisationCard";

const realisations = [
  {
    image: sino,
    title: "Sinofree",
    description:
      "Une approche innovante pour connecter les opportunités et simplifier les échanges.",
  },
  {
    image: sino,
    title: "Sinofree",
    description:
      "Une approche innovante pour connecter les opportunités et simplifier les échanges.",
  },
];

export default function Realisations() {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <RealisationsHeader />

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {realisations.map((real, i) => (
            <RealisationCard key={i} {...real} />
          ))}
        </div>
      </div>
    </section>
  );
}