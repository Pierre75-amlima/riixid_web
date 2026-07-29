import PartnerBannerContent from "./PartnerBannerContent";
import PartnerBannerVisuals from "./PartnerBannerVisuals";

export default function PartnerBanner() {
  return (
    <section className="w-full bg-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Bannière avec dégradé rouge complexe */}
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-20"
          style={{
            background: `
              radial-gradient(ellipse 60% 70% at 0% 100%, #2a0505 0%, transparent 60%),
              radial-gradient(ellipse 80% 60% at 50% 0%, #4a0a0a 0%, transparent 70%),
              radial-gradient(ellipse 60% 80% at 100% 100%, #ffb8b8 0%, transparent 50%),
              linear-gradient(135deg, #8b0f0f 0%, #c41818 50%, #e02020 100%)
            `,
          }}
        >
          {/* Texture "grain" par-dessus */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[2] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Visuels (diamants) */}
          <PartnerBannerVisuals />

          {/* Contenu texte + boutons */}
          <PartnerBannerContent />
        </div>
      </div>
    </section>
  );
}