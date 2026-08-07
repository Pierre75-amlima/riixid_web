const AboutUsHeader = () => {
  return (
    <div className="mx-auto max-w-6xl text-center">
      <h2
        className="font-sans font-bold uppercase tracking-tight text-black leading-tight
                   text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
      >
        À propos de nous
      </h2>

      <p className="mt-3 text-xs leading-relaxed text-gray-500 sm:mt-2 sm:text-sm">
        Riixid est une entreprise spécialisée dans la création, l'innovation et
        l'accompagnement digital. Nous réunissons{" "}
        <br className="hidden lg:block" />
        stratégie, créativité et technologie pour aider les organisations à
        imaginer, construire et développer des projets qui{" "}
        <br className="hidden lg:block" />
        ont un impact durable.
      </p>
    </div>
  );
};

export default AboutUsHeader;