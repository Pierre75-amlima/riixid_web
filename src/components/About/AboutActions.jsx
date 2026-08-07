import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContactModal } from "../../context/ContactModalContext";

const AboutActions = ({ actions }) => {
  const { openModal } = useContactModal();

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
      {actions.map((action) => {
        const isPrimary = action.variant === "primary";

        const baseClasses = `
          inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full font-medium
          px-6 py-3.5 text-sm transition-all
          sm:w-auto sm:px-8 sm:py-4 sm:text-base
          ${
            isPrimary
              ? "bg-white text-black hover:bg-white/90"
              : "bg-white/10 backdrop-blur-sm border border-white/40 text-white hover:bg-white/20"
          }
        `;

        if (isPrimary) {
          return (
            <button
              key={action.id}
              onClick={openModal}
              className={baseClasses}
            >
              {action.label}
              <FaArrowRight />
            </button>
          );
        }

        return (
          <Link key={action.id} to="/projets" className={baseClasses}>
            {action.label}
          </Link>
        );
      })}
    </div>
  );
};

export default AboutActions;