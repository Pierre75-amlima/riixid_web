import PartnerBannerContent from "./PartnerBannerContent";
import PartnerBannerVisuals from "./PartnerBannerVisuals";

export default function PartnerBanner() {
  return (
    <section className="w-full bg-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 100% at 100% 50%, #ff6b3d 0%, transparent 50%),
              radial-gradient(ellipse 70% 90% at 90% 40%, #ff8555 0%, transparent 40%),
              radial-gradient(ellipse 100% 100% at 0% 50%, #3a0505 0%, transparent 60%),
              linear-gradient(120deg, #5a0808 0%, #a01515 40%, #d42020 70%, #ff5533 100%)
            `,
          }}
        >
          {/* Texture "grain" par-dessus - opacité augmentée */}
          <div
            className="pointer-events-none absolute inset-1 opacity-[1] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Halo lumineux subtil en haut-droite */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #f08644 0%, transparent 70%)" }}
          />

          <PartnerBannerVisuals />
          <PartnerBannerContent />
        </div>
      </div>
    </section>
  );
}