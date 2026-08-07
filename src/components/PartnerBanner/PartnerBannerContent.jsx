import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContactModal } from "../../context/ContactModalContext";

export default function PartnerBannerContent() {
  const { openModal } = useContactModal();

  return (
    <div className="relative z-10 mx-auto max-w-6xl text-center">
      {/* Titre principal */}
      <h1 className="font-extrabold uppercase leading-tight text-white
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Nous sommes le <span className="text-orange-100/90"> partenaire </span>
        <br /> qui donne vie aux ambitions
      </h1>

      {/* Sous-titre */}
      <p className="mt-2 text-base text-white/90 sm:text-lg md:text-xl">
        Créativité, innovation et technologie réunies pour faire évoluer les
        projets.
      </p>

      {/* Description */}
      <p className="mx-auto mt-2 max-w-2xl text-xs leading-snug text-white/80 sm:text-sm">
        Nous croyons aux idées qui transforment les marchés. Notre rôle est
        d'accompagner leur évolution avec une approche stratégique, créative et
        tournée vers l'avenir.
      </p>

      {/* Boutons — exactement comme ton original */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {/* Bouton principal */}
        <button
          onClick={openModal}
          className="group flex items-center gap-3 rounded-full bg-orange-50 px-6 py-3 font-medium text-riix-orange transition-all duration-300 hover:bg-white"
        >
          Démarrer un projet
          <span className="flex h-7 w-7 items-center justify-center ">
            <FiArrowRight className="h-4 w-4" />
          </span>
        </button>

        {/* Bouton secondaire */}
        <Link
          to="/projets"
          className="rounded-full border border-white/70 px-6 py-3 font-medium text-white"
        >
          Découvrir nos réalisations
        </Link>
      </div>
    </div>
  );
}