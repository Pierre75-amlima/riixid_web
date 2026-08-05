const variantStyles = {
  orange: {
    card: "bg-riix-orange border-gray-400",
    iconWrap: "bg-white/20",
    iconFilter: "[filter:brightness(0)_invert(1)] group-hover:[filter:brightness(0)]",
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
    iconFilter: "[filter:brightness(0)_invert(1)] group-hover:[filter:brightness(0)]",
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
        group relative rounded-3xl border p-6 md:p-7
        transition-all duration-300 cursor-pointer
        ${styles.card}
        hover:bg-white hover:border-gray-400
      `}
    >
      {/* Icône SVG */}
      <div
        className={`
          w-19 h-19 rounded-full flex items-center justify-center mb-4
          transition-all duration-300
          ${styles.iconWrap}
          group-hover:bg-orange-100
        `}
      >
        <img
          src={icon}
          alt={title}
          className={`h-14 w-14 object-contain transition-all duration-300 ${styles.iconFilter}`}
        />
      </div>

      {/* Titre */}
      <h3
        className={`
          text-2xl md:text-3xl font-bold mb-3
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
          text-base md:text-lg font-semibold mb-3 leading-snug
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
          text-xs md:text-sm leading-relaxed whitespace-pre-line
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