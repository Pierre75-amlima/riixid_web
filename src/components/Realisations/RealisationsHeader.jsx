export default function RealisationsHeader() {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      {/* Titre principal */}
      <h2 className="text-3xl font-extrabold uppercase text-black sm:text-4xl md:text-5xl">
        Nos Réalisations
      </h2>

      {/* Sous-titre */}
      <p className="mt-4 text-base font-bold leading-snug text-black sm:mt-5 sm:text-lg md:text-xl">
        Découvrez quelques initiatives que nous avons accompagnées, conçues et
        développées pour répondre aux enjeux de demain.
      </p>

      {/* Description */}
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 sm:mt-4">
        Chaque projet reflète notre engagement à créer des expériences
        innovantes, à explorer de nouvelles opportunités et à transformer des
        visions en réalisations concrètes.
      </p>
    </div>
  );
}