import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function RealisationCard({
  image,
  title,
  description,
  slug = "noracash", // valeur par défaut si aucun slug n'est passé
}) {
  return (
    <Link
      to={`/projets/${slug}`}
      className="group block cursor-pointer rounded-3xl bg-gray-100 p-3 transition-all duration-500 hover:bg-gray-200 sm:p-4"
    >
      {/* Image du projet */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover sm:h-60 md:h-64 lg:h-[17.5rem]"
        />
      </div>

      {/* Contenu texte */}
      <div className="px-2 pb-2 pt-5 sm:px-3 sm:pb-3 sm:pt-6">
        <h3 className="text-xl font-bold text-black sm:text-2xl">{title}</h3>

        <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        <div className="mt-5 flex justify-end sm:mt-6">
          <span
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black
                       transition-all duration-500 group-hover:bg-riix-orange group-hover:text-white
                       sm:px-5 sm:py-3 sm:text-sm"
          >
            Voir le projet
            <FiArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}