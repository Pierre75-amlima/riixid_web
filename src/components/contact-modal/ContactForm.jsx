const ContactForm = () => {
  return (
    <div className="space-y-5 sm:space-y-6">
      {/* 2 champs en ligne */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <div>
          <label className="mb-2 block text-sm font-bold text-black">
            Votre nom & prénom(s)
          </label>
          <input
            type="text"
            placeholder="Jhon Smith"
            className="w-full rounded-lg border border-gray-300 bg-white text-sm text-black transition-colors
                       px-3.5 py-2.5 focus:border-riix-orange focus:outline-none
                       sm:px-4 sm:py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-black">
            Votre mail
          </label>
          <input
            type="email"
            placeholder="email@gmail.com"
            className="w-full rounded-lg border border-gray-300 bg-white text-sm text-black transition-colors
                       px-3.5 py-2.5 focus:border-riix-orange focus:outline-none
                       sm:px-4 sm:py-3"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-bold text-black">
          Description
        </label>
        <textarea
          rows={5}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white text-sm text-black transition-colors
                     px-3.5 py-2.5 focus:border-riix-orange focus:outline-none
                     sm:px-4 sm:py-3"
        />
      </div>
    </div>
  );
};

export default ContactForm;