import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function ProjectNext({ category, title, image, slug }) {
  return (
    <div className="mx-auto my-10 grid w-full max-w-6xl grid-cols-1 gap-6 overflow-hidden rounded-3xl bg-black
                    px-5 py-10 sm:px-8 sm:py-14 md:my-14 md:grid-cols-2 md:gap-10 md:px-12 md:py-20">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-sm font-semibold text-white sm:text-[15px]">
            Projet suivant
          </p>
          <div className="my-4 h-px w-full bg-white/20" />
          <p className="text-sm text-white sm:text-base">{category}</p>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {title}
          </h3>
        </div>

        <Link
          to={`/projets/${slug}`}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white
                     px-5 py-2.5 text-sm font-semibold text-riix-orange transition hover:bg-gray-100
                     sm:mt-8 sm:px-6 sm:py-3 sm:text-[15px]"
        >
          Découvrir le projet <FiChevronRight />
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover sm:h-80 md:h-full"
        />
      </div>
    </div>
  );
}