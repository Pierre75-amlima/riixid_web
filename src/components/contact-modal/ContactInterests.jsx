import { useState } from "react";
import { interestsList } from "./contactData";

const ContactInterests = () => {
  const [selected, setSelected] = useState([1]); // Motion Design sélectionné par défaut

  const toggleInterest = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h3 className="text-black font-bold text-base mb-4">
        Je suis intéressé par
      </h3>
      <div className="flex flex-wrap gap-3">
        {interestsList.map((interest) => {
          const isActive = selected.includes(interest.id);
          return (
            <button
              key={interest.id}
              type="button"
              onClick={() => toggleInterest(interest.id)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300
                ${
                  isActive
                    ? "bg-riix-orange text-white border-riix-orange"
                    : "bg-white text-black border-gray-300 hover:border-riix-orange"
                }
              `}
            >
              {interest.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInterests;