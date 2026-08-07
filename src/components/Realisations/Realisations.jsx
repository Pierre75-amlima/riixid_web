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
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <RealisationsHeader />

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">
          {realisations.map((real, i) => (
            <RealisationCard key={i} {...real} />
          ))}
        </div>
      </div>
    </section>
  );
}