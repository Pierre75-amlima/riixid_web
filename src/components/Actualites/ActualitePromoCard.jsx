const propulseur = "/propulseur.png";
const securite = "/securite.png";

export default function ActualitePromoCard() {
  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-3xl
                 p-6 sm:p-7 md:p-8
                 min-h-[360px] sm:min-h-[400px] md:min-h-[420px]"
      style={{
        background:
          "linear-gradient(135deg, #4a0806 0%, #4a0806 35%, #fa3e1d 70%, rgba(128,106,106,0.5) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        }}
      />

      <h3
        className="relative z-10 font-bold tracking-tight text-white
                   text-2xl leading-[1.15]
                   sm:text-[28px]
                   md:text-[39px] pt-10"
      >
        Découvrez <br />
        l'agence créative <br />
        de Creapills.
      </h3>

      <button
        className="relative z-10 mt-8 flex items-center gap-1.5 self-start rounded-full bg-white pl-5 pr-4 py-2.5
                   text-sm font-semibold text-[#e02818] transition-all duration-300 hover:bg-gray-100
                   sm:mt-6 sm:text-[15px]"
      >
        Nos campagnes
        <span className="text-base leading-none">›</span>
      </button>

      <img
        src={propulseur}
        alt="Propulseur"
        className="pointer-events-none absolute -bottom-1 -left-8 z-10 select-none
                   w-64 sm:-left-10 sm:w-80 md:w-[30rem]"
      />

      <img
        src={securite}
        alt="Securité"
        className="pointer-events-none absolute -bottom-2 -right-10 select-none opacity-90 blur-[2px]
                   w-32 sm:-right-14 sm:w-40 md:w-56"
      />
    </div>
  );
}