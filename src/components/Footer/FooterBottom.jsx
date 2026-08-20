export default function FooterBottom({ title = "PROPULSEUR", copyright = "© 2026 RIIXID Group. Tous droits réservés." }) {
  return (
    <div className="relative mt-12 sm:mt-14 md:mt-16 overflow-hidden -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-[60px]">
      <h1
        className="m-0 block select-none whitespace-nowrap p-0 text-center font-black uppercase w-[110%] ml-[-5%] sm:w-[115%] sm:ml-[-7.5%] lg:w-[120%] lg:ml-[-10%] tracking-[-0.06em] leading-[0.75]"
        style={{
          fontSize: "clamp(4.25rem, 18vw, 22rem)",
          background:
            "linear-gradient(to bottom, #ffffff 20%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.1) 90%, transparent 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          marginBottom: "-0.09em",
        }}
      >
        {title}
      </h1>

      <p className="absolute bottom-2 left-1/2 z-10 w-full -translate-x-1/2 px-4 text-center text-[10px] text-white/70 sm:bottom-3 sm:text-xs md:bottom-4 md:text-sm">
        {copyright}
      </p>
    </div>
  );
}