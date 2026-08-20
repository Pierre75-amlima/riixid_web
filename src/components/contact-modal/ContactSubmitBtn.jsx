import { FaPaperPlane } from "react-icons/fa";

const ContactSubmitBtn = ({ status }) => {
  return (
    <div className="flex justify-center sm:justify-end">
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-riix-orange font-medium text-white
                   px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg
                   sm:w-auto sm:px-6 sm:py-3 sm:text-base
                   disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        <FaPaperPlane size={16} />
        {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
      </button>
    </div>
  );
};

export default ContactSubmitBtn;