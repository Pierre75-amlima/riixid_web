import { FiArrowRight } from "react-icons/fi";
import nora from "../../assets/nora.jpg";

export default function FeaturedProject() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Grande carte */}
        <div className="group rounded-3xl bg-gray-100 p-3 transition-all duration-500 hover:bg-gray-200 sm:p-4">
          {/* Image du projet */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={nora}
              alt="Sinofree"
              className="w-full object-cover
                         h-56 sm:h-72 md:h-96 lg:h-[500px]"
            />
          </div>

          <div className="px-2 pb-2 pt-5 sm:px-4 sm:pb-4 sm:pt-6">
            {/* Titre */}
            <h3 className="text-2xl font-bold text-black sm:text-3xl">
              Sinofree
            </h3>

            {/* Description */}
            <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">
              Une approche innovante pour connecter les opportunités et
              simplifier les échanges.
            </p>

            {/* Bouton */}
            <div className="mt-5 flex justify-end sm:mt-6">
              <button
                className="flex items-center gap-2 rounded-full bg-white
                           px-4 py-2.5 text-xs font-medium text-black
                           transition-all duration-500
                           group-hover:bg-riix-orange group-hover:text-white
                           sm:px-5 sm:py-3 sm:text-sm"
              >
                Voir le projet
                <FiArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}