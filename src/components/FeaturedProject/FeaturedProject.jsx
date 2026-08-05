import { FiArrowRight } from "react-icons/fi";
import nora from "../../assets/nora.jpg";

export default function FeaturedProject() {
  return (
    <section className="w-full bg-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Grande carte */}
        <div className="group rounded-3xl bg-gray-100 p-4 transition-all duration-500 hover:bg-gray-200 ">
          {/* Image du projet */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={nora}
              alt="Sinofree"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="px-4 pb-4 pt-6">
            {/* Titre */}
            <h3 className="text-3xl font-bold text-black">
              Sinofree
            </h3>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">
              Une approche innovante pour connecter les opportunités et
              simplifier les échanges.
            </p>

            {/* Bouton  */}
            <div className="mt-6 flex justify-end">
              <button
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3
                           text-sm font-medium text-black
                           transition-all duration-500
                           group-hover:bg-riix-orange group-hover:text-white"
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