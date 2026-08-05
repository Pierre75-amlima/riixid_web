import ProjectsHeroTitle from "./ProjectsHeroTitle";
import ProjectsHeroDescription from "./ProjectsHeroDescription";

const ProjectsHero = () => {
  return (
    <section
      id="projects-hero"
      className="relative w-full min-h-screen flex items-start justify-center px-6 pt-64 pb-32 overflow-hidden bg-[#050505]"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full blur-[130px] opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full blur-[130px] opacity-70"
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

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <ProjectsHeroTitle />
        <ProjectsHeroDescription />
      </div>
    </section>
  );
};

export default ProjectsHero;