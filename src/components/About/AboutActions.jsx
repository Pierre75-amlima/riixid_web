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
            transition-all duration-300 hover:-translate-y-1
            ${
              action.variant === "primary"
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
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