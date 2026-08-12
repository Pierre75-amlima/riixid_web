import { FiCheck, FiChevronRight } from "react-icons/fi";

export default function NewsletterHero() {
  return (
    <div
      className="mx-auto max-w-5xl rounded-3xl bg-[#ececef]
                 px-5 py-10
                 sm:px-8 sm:py-12
                 md:px-14 md:py-16"
    >
      <h1
        className="mb-4 text-center font-bold text-black
             text-4xl sm:text-5xl md:text-6xl lg:text-7xl
             sm:mb-6"
      >
        Newsletter Créative
      </h1>

      <h2
        className="mb-8 text-center font-bold leading-snug text-black
                   text-lg sm:text-2xl md:text-3xl lg:text-4xl
                   sm:mb-12"
      >
        Chaque lundi, une étincelle pour <br className="hidden sm:block" />
        stimuler votre imagination.
      </h2>

      <div className="mx-auto mb-8 max-w-3xl space-y-3 sm:mb-10 sm:space-y-4">
        <div className="flex items-start gap-3 sm:items-center">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-riix-orange">
            <FiCheck className="text-white" size={14} strokeWidth={3} />
          </span>
          <p className="text-[13px] text-black sm:text-[15px]">
            <span className="font-bold">Un rendez-vous régulier :</span> chaque
            lundi à 8h30, gratuit et sans obligation.
          </p>
        </div>

        <div className="flex items-start gap-3 sm:items-center">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-riix-orange">
            <FiCheck className="text-white" size={14} strokeWidth={3} />
          </span>
          <p className="text-[13px] text-black sm:text-[15px]">
            <span className="font-bold">L'innovation au cœur :</span> campagnes,
            concepts et actualités
          </p>
        </div>

        <div className="flex items-start gap-3 sm:items-center">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-riix-orange">
            <FiCheck className="text-white" size={14} strokeWidth={3} />
          </span>
          <p className="text-[13px] text-black sm:text-[15px]">
            <span className="font-bold">Les nouveautés de l'agence :</span>{" "}
            partenariats récents et campagnes innovantes signées Riixid.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mb-5 max-w-2xl sm:mb-6">
        <input
          type="email"
          placeholder="Entrez votre adresse email"
          className="w-full rounded-full bg-white text-[14px] text-black placeholder-gray-400 shadow-sm outline-none
                     pl-5 pr-14 py-3
                     sm:pl-6 sm:pr-16 sm:py-4 sm:text-[15px]"
        />
        <button
          className="absolute right-1.5 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-riix-orange text-white transition hover:bg-orange-600
                     h-9 w-9 sm:right-2 sm:h-11 sm:w-11"
        >
          <FiChevronRight className="text-lg sm:text-[22px]" />
        </button>
      </div>

      <p className="mx-auto max-w-2xl text-center text-xs text-gray-500 sm:text-sm">
        Votre adresse e-mail est utilisée uniquement pour l'envoi de notre
        newsletter. Vous pouvez vous désabonner à tout moment.
      </p>
    </div>
  );
}
