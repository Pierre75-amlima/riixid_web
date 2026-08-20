import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContactModal } from "../../context/ContactModalContext";

export default function HeroButtons({
  primaryLabel = "Démarrer un projet",
  secondaryLabel = "Découvrir nos réalisations",
  primaryLink = "#contact",
  secondaryLink = "/projets",
}) {
  const { openModal } = useContactModal();

  return (
    <div className="animate-fade-up-delay-2 mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
      {primaryLink.startsWith("#") ? (
        <button
          onClick={openModal}
          className="group flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-riix-orange px-6 py-3.5 text-sm font-medium text-white sm:w-auto sm:px-8 sm:py-4"
        >
          {primaryLabel}
          <FiArrowRight size={18} />
        </button>
      ) : (
        <Link
          to={primaryLink}
          className="group flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-riix-orange px-6 py-3.5 text-sm font-medium text-white sm:w-auto sm:px-8 sm:py-4"
        >
          {primaryLabel}
          <FiArrowRight size={18} />
        </Link>
      )}

      <Link
        to={secondaryLink}
        className="w-full max-w-sm rounded-full border border-white/70 bg-white/15 px-6 py-3.5 text-center text-sm font-medium text-white sm:w-auto sm:px-8 sm:py-4"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}