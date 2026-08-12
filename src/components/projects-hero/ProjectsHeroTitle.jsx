const ProjectsHeroTitle = () => {
  return (
    <h1
      className="text-center font-sans font-bold uppercase tracking-tight
                 text-3xl leading-[1.15]
                 sm:text-4xl sm:leading-[1.05]
                 md:text-5xl md:leading-[1]
                 lg:text-6xl lg:leading-[0.95]"
    >
      <span className="text-[#fce7d4]">Des projets qui </span>
      <span className="text-riix-orange">témoignent</span>

      <br className="hidden sm:block" />

      <span className="text-white">
        {" "}
        de notre vision et de notre
        <br className="hidden md:block" /> savoir-faire.
      </span>
    </h1>
  );
};

export default ProjectsHeroTitle;