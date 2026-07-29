export default function FooterBottom() {
  return (
    <div className="relative -mx-[60px] mt-8">
     
      <h1
        className="m-0 block w-full select-none p-0 text-center text-[15vw] font-extrabold uppercase leading-[0.8] tracking-tight"
        style={{
          background: "linear-gradient(to bottom, #ffffff 40%, transparent 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        PROPULSEUR
      </h1>

      {/* Copyright par-dessus */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
        © 2026 RIIXID Group. Tous droits réservés.
      </p>
    </div>
  );
}
