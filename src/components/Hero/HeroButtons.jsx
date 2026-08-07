import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContactModal } from "../../context/ContactModalContext";

export default function HeroButtons() {
  const { openModal } = useContactModal();

  return (
    <div className="animate-fade-up-delay-2 mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
      <button
        onClick={openModal}
        className="group flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-riix-orange
                   px-6 py-3.5 text-sm font-medium text-white
                   sm:w-auto sm:px-8 sm:py-4"
      >
        Démarrer un projet
        <FiArrowRight size={18} />
      </button>

      <Link
        to="/projets"
        className="w-full max-w-sm rounded-full border border-white/70 bg-white/15
                   px-6 py-3.5 text-center text-sm font-medium text-white
                   sm:w-auto sm:px-8 sm:py-4"
      >
        Découvrir nos réalisations
      </Link>
    </div>
  );
}