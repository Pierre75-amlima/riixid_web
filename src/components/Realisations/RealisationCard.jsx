import { FiArrowRight } from "react-icons/fi";

export default function RealisationCard({ image, title, description }) {
  return (
    <div className="group rounded-3xl bg-gray-100 p-4  transition-all duration-500 hover:shadow-xl">
      {/* Image du projet */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-70 w-full object-cover "
        />
      </div>

      {/* Contenu texte */}
      <div className="flex items-end justify-between px-3 pb-3 pt-6">
        <div className="flex-1">
          {/* Titre */}
          <h3 className="text-2xl font-bold text-black">{title}</h3>

          {/* Description */}
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>

        {/* Bouton "Voir le projet" */}
        <button className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-riix-orange hover:text-white">
          Voir le projet
          <FiArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}