import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center 
                 bg-[#050505] px-6 py-50 overflow-hidden"
    >
      {/* Lumière projetée depuis le bas à gauche */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[750px] w-[800px] 
                   rounded-full bg-white/25 blur-[160px]"
      />

      {/* Lumière projetée depuis le haut à droite */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] 
                   rounded-full bg-white/25 blur-[120px]"
      />

      {/* Effet de grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <HeroTitle />
        <HeroSubtitle />
        <HeroButtons />
      </div>
    </section>
  );
}