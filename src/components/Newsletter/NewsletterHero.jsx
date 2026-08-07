import { FiCheck, FiChevronRight } from "react-icons/fi";

export default function NewsletterHero() {
  return (
    <div className="max-w-5xl mx-auto bg-[#ececef] rounded-3xl px-8 md:px-14 py-14 md:py-16">
      {/* Titre principal */}
      <h1 className="text-black text-6xl md:text-7xl font-bold text-center mb-6">
        Newsletter Créative
      </h1>

      {/* Sous-titre */}
      <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-12 leading-snug">
        Chaque lundi, une étincelle pour <br />
        stimuler votre imagination.
      </h2>

      {/* Liste avantages */}
      <div className="max-w-3xl mx-auto space-y-4 mb-10">
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full bg-riix-orange flex items-center justify-center shrink-0">
            <FiCheck className="text-white" size={14} strokeWidth={3} />
          </span>
          <p className="text-black text-[15px]">
            <span className="font-bold">Un rendez-vous régulier :</span> chaque lundi à 8h30, gratuit et sans obligation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full bg-riix-orange flex items-center justify-center shrink-0">
            <FiCheck className="text-white" size={14} strokeWidth={3} />
          </span>
          <p className="text-black text-[15px]">
            <span className="font-bold">L'innovation au cœur :</span> campagnes, concepts et actualités
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full bg-riix-orange flex items-center justify-center shrink-0">
            <FiCheck className="text-white" size={14} strokeWidth={3} />
          </span>
          <p className="text-black text-[15px]">
            <span className="font-bold">Les nouveautés de l'agence :</span> partenariats récents et campagnes innovantes signées Riixid.
          </p>
        </div>
      </div>

      {/* Formulaire email */}
      <div className="max-w-2xl mx-auto relative mb-6">
        <input
          type="email"
          placeholder="Entrez votre adresse email"
          className="w-full bg-white rounded-full pl-6 pr-16 py-4 text-[15px] text-black placeholder-gray-400 outline-none shadow-sm"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-riix-orange flex items-center justify-center text-white hover:bg-orange-600 transition">
          <FiChevronRight size={22} />
        </button>
      </div>

      {/* Mention légale */}
      <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto">
        Votre adresse e-mail est utilisée uniquement pour l'envoi de notre newsletter. Vous pouvez vous désabonner à tout moment.
      </p>
    </div>
  );
}