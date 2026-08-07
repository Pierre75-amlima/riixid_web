import propulseur from "../../assets/propulseur.png";
import securite from "../../assets/securite.png";

export default function ActualitePromoCard() {
  return (
    <div
      className="relative rounded-3xl overflow-hidden p-8 flex flex-col min-h-[420px]"
      style={{
        background:
          "linear-gradient(135deg, #4a0806 0%, #4a0806 35%, #fa3e1d 70%, rgba(128,106,106,0.5) 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        }}
      />

      <h3 className="relative z-10 text-white text-[32px] font-bold leading-[1.15] tracking-tight">
        Découvrez <br />
        l'agence créative <br />
        de Creapills.
      </h3>

      <button className="relative z-10 mt-6 self-start bg-white text-[#e02818] pl-5 pr-4 py-2.5 rounded-full text-[15px] font-semibold flex items-center gap-1.5 hover:bg-gray-100 transition-all duration-300">
        Nos campagnes
        <span className="text-base leading-none">›</span>
      </button>

      <img
        src={propulseur}
        alt="Propulseur"
        className="absolute -bottom-1 -left-10 w-120 pointer-events-none select-none z-10"
      />

      <img
        src={securite}
        alt="Securité"
        className="absolute -bottom-2 -right-14 w-54 pointer-events-none select-none blur-[2px] opacity-90"
      />
    </div>
  );
}