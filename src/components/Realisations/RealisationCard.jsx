import { FiArrowRight } from "react-icons/fi";

export default function RealisationCard({ image, title, description }) {
  return (
    <div className="group cursor-pointer rounded-3xl bg-gray-100 p-4 transition-all duration-500 hover:bg-gray-200">
      {/* Image du projet */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-70 w-full object-cover"
        />
      </div>

      {/* Contenu texte */}
      <div className="px-3 pb-3 pt-6">
        {/* Titre */}
        <h3 className="text-2xl font-bold text-black">{title}</h3>

        {/* Description */}
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        {/* Bouton "Voir le projet" - aligné à droite */}
        <div className="mt-6 flex justify-end">
          <button className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-500 group-hover:bg-riix-orange group-hover:text-white">
            Voir le projet
            <FiArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}