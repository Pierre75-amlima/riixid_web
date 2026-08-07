import { useState } from "react";
import { interestsList } from "./contactData";

const ContactInterests = () => {
  const [selected, setSelected] = useState([1]);

  const toggleInterest = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-black sm:mb-4 sm:text-base">
        Je suis intéressé par
      </h3>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {interestsList.map((interest) => {
          const isActive = selected.includes(interest.id);
          return (
            <button
              key={interest.id}
              type="button"
              onClick={() => toggleInterest(interest.id)}
              className={`
                rounded-full border font-medium transition-all duration-300
                px-3.5 py-2 text-xs
                sm:px-5 sm:py-2.5 sm:text-sm
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