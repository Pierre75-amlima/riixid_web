import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ValuesCTA = () => {
  return (
    <div className="flex justify-center mt-12">
      <Link
        to="/contact"
        className="inline-flex items-center gap-3 bg-riix-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        Construire un projet avec nous
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default ValuesCTA;