import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center 
                 bg-gradient-to-b from-[#2F2F2F] via-[#181818] to-[#050505]
                 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <HeroTitle />
        <HeroSubtitle />
        <HeroButtons />
      </div>
    </section>
  );
}
