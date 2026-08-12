import ProjectsHeroTitle from "./ProjectsHeroTitle";
import ProjectsHeroDescription from "./ProjectsHeroDescription";

const ProjectsHero = () => {
  return (
    <section
      id="projects-hero"
      className="relative flex w-full items-start justify-center overflow-hidden bg-[#050505]
                 px-4 pb-12 pt-32
                 sm:px-6 sm:pb-16 sm:pt-40
                 md:px-8 md:pb-20 md:pt-48
                 lg:min-h-screen lg:px-6 lg:pb-28 lg:pt-64"
    >
      {/* Halos et grain inchangés */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full opacity-70
                   -top-24 h-[400px] w-[520px] blur-[90px]
                   sm:-top-32 sm:h-[520px] sm:w-[680px] sm:blur-[110px]
                   lg:-top-40 lg:h-[700px] lg:w-[900px] lg:blur-[130px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full opacity-70
                   -bottom-24 h-[400px] w-[520px] blur-[90px]
                   sm:-bottom-32 sm:h-[520px] sm:w-[680px] sm:blur-[110px]
                   lg:-bottom-40 lg:h-[700px] lg:w-[900px] lg:blur-[130px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>")`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ProjectsHeroTitle />
        <ProjectsHeroDescription />
      </div>
    </section>
  );
};

export default ProjectsHero;