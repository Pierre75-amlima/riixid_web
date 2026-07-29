import { FiArrowRight } from "react-icons/fi";

export default function PartnerBannerContent() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl text-center">
      {/* Titre principal */}
      <h1 className="text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl">
        Nous sommes le{" "} <span className="text-orange-100/90"> partenaire </span>
        <br /> qui donne vie aux ambitions
      </h1>

      {/* Sous-titre */}
      <p className="mt-5 text-2xl text-white/90">
        Créativité, innovation et technologie réunies pour faire évoluer les projets.
      </p>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80">
        Nous croyons aux idées qui transforment les marchés. Notre rôle est
        d'accompagner leur évolution avec une approche stratégique, créative et
        tournée vers l'avenir.
      </p>

      {/* Boutons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {/* Bouton principal */}
        <button className="group flex items-center gap-3 rounded-full bg-orange-50 px-6 py-3 font-medium text-riix-orange transition-all duration-300 hover:bg-white">
          Démarrer un projet
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-riix-orange text-white transition-transform duration-300 group-hover:translate-x-1">
            <FiArrowRight className="h-4 w-4" />
          </span>
        </button>

        {/* Bouton secondaire */}
        <button className="rounded-full border border-white/70 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white hover:text-riix-orange">
          Découvrir nos réalisations
        </button>
      </div>
    </div>
  );
}