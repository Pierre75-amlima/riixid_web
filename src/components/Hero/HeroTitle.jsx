export default function HeroTitle({ title = "PROPULSER LES IDÉES QUI CHANGENT LES MARCHÉS" }) {
  const parts = title.split(" ");
  const firstWord = parts[0] || "PROPULSER";

  return (
    <h1
      className="animate-fade-up py-6 sm:py-8 text-center font-black uppercase tracking-tight text-white leading-[0.98] sm:leading-[0.96] lg:leading-[0.95] text-[2.35rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
    >
      {title.includes(" ") ? (
        <>
          <span className="text-riix-orange">{firstWord}</span>{" "}
          {parts.slice(1).join(" ")}
        </>
      ) : (
        <span className="text-riix-orange">{title}</span>
      )}
    </h1>
  );
}