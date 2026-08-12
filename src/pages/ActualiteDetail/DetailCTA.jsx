import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function DetailCTA() {
  return (
    <div
      className="relative mx-auto my-8 max-w-6xl overflow-hidden rounded-3xl text-center
                 px-5 py-9 sm:px-8 sm:py-11 md:my-12 md:px-12 md:py-14"
      style={{
        background:
          "linear-gradient(135deg, #4a0806 0%, #a01515 40%, #d42020 70%, #ff5533 100%)",
      }}
    >
      <h3
        className="mx-auto max-w-3xl font-bold text-white
                   text-xl sm:text-2xl md:text-3xl lg:text-[38px]"
      >
        Explorez l'univers innovant de l'agence RIIXID.
      </h3>

      <p className="mx-auto mt-3 max-w-2xl text-[13px] text-white/85 sm:text-sm md:text-[15px]">
        Conseil, design, réalisation : nous guidons les entreprises vers
        l'innovation. Des marques comme Sinofree, Noracash, Baya CAUX et bien
        d'autres nous font confiance.
      </p>

      <Link
        to="/projets"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-white
                   px-5 py-2.5 text-sm font-semibold text-riix-orange
                   transition hover:bg-gray-100
                   sm:mt-7 sm:px-6 sm:py-3 sm:text-[15px]"
      >
        Découvrez nos réalisations
        <FiChevronRight />
      </Link>
    </div>
  );
}