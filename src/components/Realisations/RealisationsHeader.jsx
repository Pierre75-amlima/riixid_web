export default function RealisationsHeader() {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {/* Titre principal */}
      <h2 className="text-4xl font-extrabold uppercase text-black md:text-5xl">
        Nos Réalisations
      </h2>

      {/* Sous-titre */}
      <p className="mt-5 text-lg font-bold text-black md:text-xl">
        Découvrez quelques initiatives que nous avons accompagnées, conçues et
        développées pour répondre aux enjeux de demain.
      </p>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
        Chaque projet reflète notre engagement à créer des expériences
        innovantes, à explorer de nouvelles opportunités et à transformer des
        visions en réalisations concrètes.
      </p>
    </div>
  );
}