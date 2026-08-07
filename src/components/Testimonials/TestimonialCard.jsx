export default function TestimonialCard({
  quote,
  name,
  role,
  photo,
  isActive,
}) {
  return (
    <div
      className={`flex w-full flex-col justify-between rounded-xl p-5 sm:p-6
                  transition-all duration-700
                  h-[240px] sm:h-[250px] md:h-[260px]
                  ${isActive ? "bg-riix-orange" : "bg-gray-100"}`}
    >
      {/* Guillemet + texte */}
      <div>
        <svg
          className={`mb-1 h-14 w-14 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem]
                     ${isActive ? "text-white" : "text-gray-400"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>

        <p
          className={`text-[13px] leading-relaxed sm:text-sm ${
            isActive ? "text-white" : "text-gray-700"
          }`}
        >
          {quote}
        </p>
      </div>

      {/* Badge nom/rôle */}
      <div
        className={`flex items-center gap-3 rounded-2xl p-2 sm:p-2.5 ${
          isActive
            ? "bg-white/20 backdrop-blur-sm"
            : "bg-gradient-to-r from-red-900 to-riix-orange"
        }`}
      >
        <img
          src={photo}
          alt={name}
          className="h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9"
        />

        <div>
          <p className="text-xs font-bold text-white sm:text-sm">{name}</p>
          <p className="text-[10px] text-white/80 sm:text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}