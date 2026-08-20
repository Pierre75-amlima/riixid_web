import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useContactModal } from "../../context/ContactModalContext";
import { submitContactForm } from "../../lib/api";
import ContactInterests from "./ContactInterests";
import ContactForm from "./ContactForm";
import ContactSubmitBtn from "./ContactSubmitBtn";

const ContactModal = () => {
  const { isOpen, closeModal } = useContactModal();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [interests, setInterests] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (id) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const success = await submitContactForm({
      fullName: formData.fullName,
      email: formData.email,
      message: formData.message,
      interests: interests,
    });

    if (success) {
      setStatus("success");
      // Reset après 3 secondes
      setTimeout(() => {
        setStatus("idle");
        setFormData({ fullName: "", email: "", message: "" });
        setInterests([]);
        closeModal();
      }, 3000);
    } else {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={status !== "sending" ? closeModal : undefined}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl
                   p-5 sm:rounded-3xl sm:p-8 md:p-10
                   max-h-[92vh] overflow-y-auto"
      >
        {/* Fermer */}
        <button
          type="button"
          onClick={closeModal}
          disabled={status === "sending"}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300
                     sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          <FiX size={18} className="text-black" />
        </button>

        {/* Succès */}
        {status === "success" ? (
          <div className="py-12 text-center">
            <h3 className="text-xl font-bold text-black mb-2">
              Message envoyé !
            </h3>
            <p className="text-sm text-gray-500">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        ) : (
          /* Formulaire */
          <form onSubmit={handleSubmit} className="mt-5 space-y-6 sm:mt-6 sm:space-y-8">
            <ContactInterests
              selected={interests}
              onToggle={toggleInterest}
            />
            <ContactForm
              formData={formData}
              onChange={handleChange}
              disabled={status === "sending"}
            />
            
            {status === "error" && (
              <p className="text-center text-sm text-red-500">
                Erreur lors de l'envoi. Veuillez réessayer.
              </p>
            )}

            <ContactSubmitBtn status={status} />
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;