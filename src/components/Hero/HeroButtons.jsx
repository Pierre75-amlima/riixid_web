import { FiArrowRight } from "react-icons/fi";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
      {/* Bouton primaire */}
      <button
        className="group flex items-center gap-3 bg-riix-orange text-white 
                   px-8 py-4 rounded-full font-medium text-sm
                   hover:bg-white hover:text-black
                   transition-all duration-300"
      >
        Démarrer un projet
        <FiArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Bouton secondaire */}
      <button
        className="border border-white/70 text-white 
                   px-8 py-4 rounded-full font-medium text-sm
                   hover:bg-white hover:text-black hover:border-white
                   transition-all duration-300"
      >
        Découvrir nos réalisations
      </button>
    </div>
  );
}