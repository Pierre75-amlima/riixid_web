import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useContactModal } from "../../context/ContactModalContext";

const ValuesCTA = () => {
  const { openModal } = useContactModal();

  return (
    <div className="mt-10 flex justify-center sm:mt-12">
      <button
        onClick={openModal}
        className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full
                   bg-riix-orange px-6 py-3 text-sm font-medium text-white
                   sm:w-auto sm:px-8 sm:py-4 sm:text-base"
      >
        Construire un projet avec nous
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ValuesCTA;