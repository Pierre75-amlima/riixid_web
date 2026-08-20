export default function HeroSubtitle({ text = "Nous accompagnons les entreprises, startups et organisations dans la conception de solutions digitales innovantes, d'expériences utilisateurs performantes et de produits numériques créateurs de valeur." }) {
  return (
    <p
      className="animate-fade-up-delay mx-auto max-w-xs text-sm leading-relaxed text-white sm:max-w-2xl sm:text-base md:max-w-3xl md:text-lg"
    >
      {text}
    </p>
  );
}