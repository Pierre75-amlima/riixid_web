import { FiArrowRight } from "react-icons/fi";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
      {/* Bouton primaire */}
      <button
        className="group flex items-center gap-3 bg-riix-orange text-white 
                   px-8 py-4 rounded-full font-medium text-sm"
      >
        Démarrer un projet
        <FiArrowRight
          size={18}  />
      </button>

      {/* Bouton secondaire */}
      <button
        className="border border-white/70 text-white 
                   px-8 py-4 rounded-full bg-white/15 font-medium text-sm"
      >
        Découvrir nos réalisations
      </button>
    </div>
  );
}