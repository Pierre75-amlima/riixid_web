import { FaPaperPlane } from "react-icons/fa";

const ContactSubmitBtn = () => {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="inline-flex items-center gap-3 bg-riix-orange text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        <FaPaperPlane size={16} />
        Envoyer la demande
      </button>
    </div>
  );
};

export default ContactSubmitBtn;