export default function FooterBottom() {
  return (
    <div className="relative -mx-[60px] mt-16 overflow-hidden">
      <h1
        className="m-0 block select-none whitespace-nowrap p-0 text-center font-black uppercase"
        style={{
          fontSize: "clamp(7rem, 18vw, 22rem)",
          letterSpacing: "-0.06em",
          lineHeight: "0.75",
          width: "120%",
          marginLeft: "-10%",
          marginBottom: "-0.09em", // ⬅️ Supprime l'espace sous le texte
          background:
            "linear-gradient(to bottom, #ffffff 20%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.1) 90%, transparent 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        PROPULSEUR
      </h1>

      <p className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-sm text-white/70">
        © 2026 RIIXID Group. Tous droits réservés.
      </p>
    </div>
  );
}