const variantStyles = {
  orange: {
    card: "bg-riix-orange border-gray-400",
    iconWrap: "bg-white/20",
    iconFilter:
      "[filter:brightness(0)_invert(1)] group-hover:[filter:brightness(0)]",
    title: "text-white",
    subtitle: "text-white",
    description: "text-white/90",
  },
  white: {
    card: "bg-white border-gray-400",
    iconWrap: "bg-orange-100",
    iconFilter:
      "[filter:invert(48%)_sepia(89%)_saturate(1934%)_hue-rotate(346deg)_brightness(97%)_contrast(94%)] group-hover:[filter:brightness(0)]",
    title: "text-riix-orange",
    subtitle: "text-black",
    description: "text-gray-600",
  },
  black: {
    card: "bg-black border-gray-400",
    iconWrap: "bg-white/10",
    iconFilter:
      "[filter:brightness(0)_invert(1)] group-hover:[filter:brightness(0)]",
    title: "text-white",
    subtitle: "text-white",
    description: "text-white/80",
  },
};

const ValueCard = ({ icon, title, subtitle, description, variant }) => {
  const styles = variantStyles[variant];

  return (
    <div
      className={`
        group relative cursor-pointer rounded-3xl border
        p-5 sm:p-6 md:p-7
        transition-all duration-300
        ${styles.card}
        hover:bg-white hover:border-gray-400
      `}
    >
      {/* Icône SVG */}
      <div
        className={`
          mb-4 flex items-center justify-center rounded-full
          h-14 w-14 sm:h-16 sm:w-16 md:h-[4.75rem] md:w-[4.75rem]
          transition-all duration-300
          ${styles.iconWrap}
          group-hover:bg-orange-100
        `}
      >
        <img
          src={icon}
          alt={title}
          className={`object-contain transition-all duration-300
                      h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14
                      ${styles.iconFilter}`}
        />
      </div>

      {/* Titre */}
      <h3
        className={`
          mb-3 font-bold
          text-xl sm:text-2xl md:text-3xl
          transition-colors duration-300
          ${styles.title}
          group-hover:text-black
        `}
      >
        {title}
      </h3>

      {/* Sous-titre */}
      <p
        className={`
          mb-3 font-semibold leading-snug
          text-sm sm:text-base md:text-lg
          transition-colors duration-300
          ${styles.subtitle}
          group-hover:text-black
        `}
      >
        {subtitle}
      </p>

      {/* Description */}
      <p
        className={`
          whitespace-pre-line leading-relaxed
          text-xs sm:text-[13px] md:text-sm
          transition-colors duration-300
          ${styles.description}
          group-hover:text-gray-600
        `}
      >
        {description}
      </p>
    </div>
  );
};

export default ValueCard;