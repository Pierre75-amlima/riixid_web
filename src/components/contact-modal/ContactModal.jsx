import { FiX } from "react-icons/fi";
import { useContactModal } from "../../context/ContactModalContext";
import ContactInterests from "./ContactInterests";
import ContactForm from "./ContactForm";
import ContactSubmitBtn from "./ContactSubmitBtn";

const ContactModal = () => {
  const { isOpen, closeModal } = useContactModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-4">
      {/* Overlay sombre */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl
                   p-5 sm:rounded-3xl sm:p-8 md:p-10
                   max-h-[92vh] overflow-y-auto"
      >
        {/* Bouton fermeture */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300
                     sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          <FiX size={18} className="text-black" />
        </button>

        {/* Contenu */}
        <div className="mt-5 space-y-6 sm:mt-6 sm:space-y-8">
          <ContactInterests />
          <ContactForm />
          <ContactSubmitBtn />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;