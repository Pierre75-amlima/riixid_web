import { FiArrowRight } from "react-icons/fi";
import sino from "../../assets/sino.jfif";

export default function FeaturedProject() {
  return (
    <section className="w-full bg-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Grande carte */}
        <div className="rounded-3xl bg-gray-100 p-4">
          {/* Image du projet */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={sino}
              alt="Sinofree"
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* Contenu texte */}
          <div className="flex items-end justify-between px-4 pb-4 pt-6">
            <div className="flex-1">
              {/* Titre */}
              <h3 className="text-3xl font-bold text-black">Sinofree</h3>

              {/* Description */}
              <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">
                Une approche innovante pour connecter les opportunités et
                simplifier les échanges.
              </p>
            </div>

            {/* Bouton "Voir le projet" */}
            <button className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">
              Voir le projet
              <FiArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

