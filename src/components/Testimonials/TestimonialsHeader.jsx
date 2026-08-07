export default function TestimonialsHeader() {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 md:mb-14">
      {/* Titre principal */}
      <h2 className="text-2xl font-extrabold uppercase text-black sm:text-3xl md:text-5xl lg:text-6xl">
        Retours de nos partenaires
      </h2>

      {/* Sous-titre */}
      <p className="mt-4 text-base font-bold text-black sm:mt-5 sm:text-lg md:text-xl">
        Ils nous font confiance pour donner vie à leurs ambitions.
      </p>

      {/* Description */}
      <p className="mx-auto mt-2 text-sm leading-relaxed text-gray-500 md:whitespace-nowrap">
        Découvrez les expériences de ceux qui collaborent avec Riixid pour
        transformer leurs idées en projets à impact.
      </p>
    </div>
  );
}