export default function TestimonialCard({
  quote,
  name,
  role,
  photo,
  isActive,
}) {
  return (
    <div
      className={`flex h-[260px] w-full flex-col justify-between rounded-xl p-6
                  transition-all duration-700
                  ${isActive ? "bg-riix-orange" : "bg-gray-100"}`}
    >
      {/* Guillemet + texte */}
      <div>
        <svg
          className={`mb-1 h-18 w-18 ${isActive ? "text-white" : "text-gray-400"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>

        <p
          className={`text-sm leading-relaxed ${
            isActive ? "text-white" : "text-gray-700"
          }`}
        >
          {quote}
        </p>
      </div>

      {/* Badge nom/rôle */}
      <div
        className={`flex items-center gap-3 rounded-2xl p-2.5 ${
          isActive
            ? "bg-white/20 backdrop-blur-sm"
            : "bg-gradient-to-r from-red-900 to-riix-orange"
        }`}
      >
        <img
          src={photo}
          alt={name}
          className="h-9 w-9 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-bold text-white">{name}</p>
          <p className="text-xs text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
}
