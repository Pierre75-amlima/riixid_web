export default function TestimonialCard({
  quote,
  name,
  role,
  photo,
  isActive,
}) {
  return (
    <div
      className={`flex h-[320px] w-full flex-col justify-between rounded-3xl p-8 transition-all duration-700 ${
        isActive ? "bg-riix-orange" : "bg-gray-100"
      }`}
    >
      {/* Guillemet + texte */}
      <div>
        <div
          className={`mb-4 font-serif text-6xl leading-none ${
            isActive ? "text-white/40" : "text-gray-300"
          }`}
        >
          "
        </div>
        <p
          className={`text-lg leading-relaxed ${
            isActive ? "text-white" : "text-gray-700"
          }`}
        >
          {quote}
        </p>
      </div>

      {/* Badge nom/rôle */}
      <div
        className={`flex items-center gap-3 rounded-2xl p-3 ${
          isActive
            ? "bg-white/20 backdrop-blur-sm"
            : "bg-gradient-to-r from-red-900 to-riix-orange"
        }`}
      >
        <img
          src={photo}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-bold text-white">{name}</p>
          <p className="text-xs text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
}