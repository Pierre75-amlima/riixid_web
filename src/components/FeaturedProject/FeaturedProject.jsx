import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const nora = "/nora.jpg";

export default function FeaturedProject({
  variant = "featured",
  slug = "noracash",
  title = "Sinofree",
  description = "Une approche innovante pour connecter les opportunités et simplifier les échanges.",
  image = nora,
}) {
  const isFeatured = variant === "featured";

  const imageHeight = isFeatured
    ? "h-52 sm:h-60 md:h-96 lg:h-[500px]"
    : "h-52 sm:h-60 md:h-96 lg:h-[500px]"; 

  const Card = (
    <Link
      to={`/projets/${slug}`}
      className="group block rounded-3xl bg-gray-100 p-3 transition-all duration-500 hover:bg-gray-200 sm:p-4"
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover ${imageHeight}`}
        />
      </div>

      <div className="px-2 pb-2 pt-5 sm:px-4 sm:pb-4 sm:pt-6">
        <h3 className="text-2xl font-bold text-black sm:text-3xl">{title}</h3>

        <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        <div className="mt-5 flex justify-end sm:mt-6">
          <span
            className="flex items-center gap-2 rounded-full bg-white
                       px-4 py-2.5 text-xs font-medium text-black
                       transition-all duration-500
                       group-hover:bg-riix-orange group-hover:text-white
                       sm:px-5 sm:py-3 sm:text-sm"
          >
            Voir le projet
            <FiArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );

  if (isFeatured) {
    return (
      <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <div className="mx-auto max-w-6xl">{Card}</div>
      </section>
    );
  }

  return Card;
}