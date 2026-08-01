const ContactForm = () => {
  return (
    <div className="space-y-6">
      {/* 2 champs en ligne */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-black font-bold text-sm mb-2">
            Votre nom & prénom(s)
          </label>
          <input
            type="text"
            placeholder="Jhon Smith"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black text-sm focus:outline-none focus:border-riix-orange transition-colors"
          />
        </div>

        <div>
          <label className="block text-black font-bold text-sm mb-2">
            Votre mail
          </label>
          <input
            type="email"
            placeholder="email@gmail.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black text-sm focus:outline-none focus:border-riix-orange transition-colors"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-black font-bold text-sm mb-2">
          Description
        </label>
        <textarea
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black text-sm focus:outline-none focus:border-riix-orange transition-colors resize-none"
        />
      </div>
    </div>
  );
};

export default ContactForm;