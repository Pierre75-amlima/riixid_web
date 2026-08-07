export default function ExpertisesHeader() {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 md:mb-16">
      <h2 className="mb-4 text-3xl font-black uppercase text-black sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
        Nos Expertises
      </h2>

      <h3 className="mb-3 text-lg font-bold leading-snug text-black sm:text-xl md:text-2xl">
        Des solutions digitales conçues pour accélérer{" "}
        <br className="hidden md:block" />
        votre croissance.
      </h3>

      <p className="text-sm leading-snug text-gray-500 sm:text-[15px] md:text-base">
        De l'idée au déploiement, nous combinons créativité, technologie et
        stratégie pour concevoir des solutions{" "}
        <br className="hidden lg:block" />
        numériques adaptées aux ambitions des entreprises, startups et
        organisations.
      </p>
    </div>
  );
}