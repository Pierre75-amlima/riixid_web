import { FiArrowRight } from "react-icons/fi";
import { useContactModal } from "../../context/ContactModalContext";

const propulseur = "/propulseur.png";
const securite = "/securite.png";

export default function ProjectCTA() {
  const { openModal } = useContactModal();

  return (
    <div
      className="relative mx-auto my-10 w-full max-w-6xl overflow-hidden rounded-3xl text-center
                 px-5 py-10 sm:px-8 sm:py-14 md:my-14 md:px-12 md:py-20"
      style={{
        background: `
          radial-gradient(ellipse 80% 100% at 100% 50%, #ff6b3d 0%, transparent 50%),
          radial-gradient(ellipse 70% 90% at 90% 40%, #ff8555 0%, transparent 40%),
          radial-gradient(ellipse 100% 100% at 0% 50%, #3a0505 0%, transparent 60%),
          linear-gradient(120deg, #5a0808 0%, #a01515 40%, #d42020 70%, #ff5533 100%)
        `,
      }}
    >
      {/* Texture grain */}
      <div
        className="pointer-events-none absolute inset-1 opacity-[1] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Halo lumineux */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, #f08644 0%, transparent 70%)",
        }}
      />

      {/* Visuel Propulseur (bas gauche) */}
      <img
        src={propulseur}
        alt="propulseur décoratif"
        className="pointer-events-none absolute z-10 object-contain
                   -bottom-6 left-2 h-40 w-40
                   sm:-bottom-7 sm:left-3 sm:h-52 sm:w-52
                   md:-bottom-9 md:left-4 md:h-[24.5rem] md:w-[24.5rem]"
      />

      {/* Visuel Securité (bas droite) */}
      <img
        src={securite}
        alt="securite décoratif"
        className="pointer-events-none absolute z-10 object-contain
                   -bottom-3 right-1 h-32 w-32
                   sm:-bottom-4 sm:h-40 sm:w-40
                   md:-bottom-5 md:h-80 md:w-80"
      />

      {/* Contenu CTA — au-dessus des visuels */}
      <div className="relative z-20">
        <h3
          className="mx-auto max-w-4xl font-black uppercase text-white
                     text-2xl sm:text-3xl md:text-5xl leading-tight"
        >
          Prêt à <span className="text-[#f6dcbf]">propulser</span> votre <br />
          prochaine idée ?
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-[13px] text-white/90 sm:text-sm md:text-[15px]">
          Chez Riixid, nous croyons que les meilleures idées méritent une
          exécution à la hauteur de leur ambition. Ensemble, transformons votre
          vision en une expérience qui marque les esprits et crée un impact
          durable.
        </p>

        <button
          onClick={openModal}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white
                     px-6 py-3 text-sm font-semibold text-riix-orange transition hover:bg-gray-100
                     sm:mt-8 sm:text-[15px]"
        >
          Parlons de votre projet
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
}