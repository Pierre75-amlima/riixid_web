import { FiX } from "react-icons/fi";
import { useContactModal } from "../../context/ContactModalContext";
import ContactInterests from "./ContactInterests";
import ContactForm from "./ContactForm";
import ContactSubmitBtn from "./ContactSubmitBtn";

const ContactModal = () => {
  const { isOpen, closeModal } = useContactModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl w-full max-w-2xl p-8 md:p-10 shadow-2xl">
        {/* Bouton fermeture */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <FiX size={20} className="text-black" />
        </button>

        {/* Contenu */}
        <div className="mt-6 space-y-8">
          <ContactInterests />
          <ContactForm />
          <ContactSubmitBtn />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;