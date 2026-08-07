import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505]
                 px-4 py-28 sm:px-6 sm:py-32 md:px-8 md:py-40 lg:px-6 lg:py-[12.5rem]"
    >
      {/* Lumière projetée depuis le bas à gauche */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px]
                   rounded-full bg-white/25 blur-[90px]
                   sm:-bottom-28 sm:-left-28 sm:h-[520px] sm:w-[560px] sm:blur-[120px]
                   md:-bottom-32 md:-left-32 md:h-[620px] md:w-[680px] md:blur-[140px]
                   lg:-bottom-40 lg:-left-40 lg:h-[750px] lg:w-[800px] lg:blur-[160px]"
      />

      {/* Lumière projetée depuis le haut à droite */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-[320px] w-[320px]
                   rounded-full bg-white/25 blur-[80px]
                   sm:-top-24 sm:-right-24 sm:h-[420px] sm:w-[420px] sm:blur-[100px]
                   md:-top-28 md:-right-28 md:h-[500px] md:w-[500px] md:blur-[110px]
                   lg:-top-40 lg:-right-40 lg:h-[600px] lg:w-[600px] lg:blur-[120px]"
      />

      {/* Effet de grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <HeroTitle />
        <HeroSubtitle />
        <HeroButtons />
      </div>
    </section>
  );
}