export default function ExpertiseCard({ icon, title, description, variant = "light" }) {
  const variants = {
    light: {
      card: "bg-white border border-gray-400",
      iconWrap: "bg-orange-50 group-hover:bg-gray-100",
      iconFilter:
        "brightness-0 saturate-100 [filter:invert(48%)_sepia(89%)_saturate(1934%)_hue-rotate(346deg)_brightness(97%)_contrast(94%)] group-hover:[filter:brightness(0)]",
      title: "text-riix-orange group-hover:text-black",
      description: "text-gray-500",
    },
    dark: {
      card: "bg-black border border-gray-200 hover:border-gray-400 hover:bg-white",
      iconWrap: "bg-gray-800 group-hover:bg-gray-100",
      iconFilter:
        "[filter:brightness(0)_invert(1)] group-hover:[filter:brightness(0)]",
      title: "text-white group-hover:text-black",
      description: "text-gray-300 group-hover:text-gray-500",
    },
    orange: {
      card: "bg-riix-orange border border-gray-200 hover:border-gray-400 hover:bg-white",
      iconWrap: "bg-orange-400/40 group-hover:bg-gray-100",
      iconFilter:
        "[filter:brightness(0)_invert(1)] group-hover:[filter:brightness(0)]",
      title: "text-white group-hover:text-black",
      description: "text-white/90 group-hover:text-gray-500",
    },
  };

  const s = variants[variant];

  return (
    <div
      className={`group cursor-pointer rounded-3xl transition-all duration-500 ease-out
                  p-5 sm:p-6 md:p-7
                  min-h-[280px] sm:min-h-[310px] md:min-h-[340px] lg:min-h-[350px]
                  ${s.card}`}
    >
      {/* Icône SVG dans cercle */}
      <div
        className={`mb-5 flex items-center justify-center rounded-full transition-colors duration-500
                    h-14 w-14 sm:h-16 sm:w-16
                    ${s.iconWrap}`}
      >
        <img
          src={icon}
          alt={title}
          className={`object-contain transition-all duration-500
                      h-8 w-8 sm:h-10 sm:w-10
                      ${s.iconFilter}`}
        />
      </div>

      {/* Titre */}
      <h1
        className={`mb-3 font-bold leading-tight transition-colors duration-500
                    text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl
                    ${s.title}`}
      >
        {title}
      </h1>

      {/* Description */}
      <p
        className={`leading-relaxed transition-colors duration-500
                    text-sm
                    ${s.description}`}
      >
        {description}
      </p>
    </div>
  );
}