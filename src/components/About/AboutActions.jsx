import { FaArrowRight } from "react-icons/fa";

const AboutActions = ({ actions }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
      {actions.map((action) => (
        <a
          key={action.id}
          href={action.href}
          className={`
            inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium
            ${
              action.variant === "primary"
                ? "bg-white text-black"
                : "bg-white/10 backdrop-blur-sm border border-white/40 text-white"
            }
          `}
        >
          {action.label}
          {action.variant === "primary" && <FaArrowRight />}
        </a>
      ))}
    </div>
  );
};

export default AboutActions;