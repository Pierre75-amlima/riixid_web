const variantStyles = {
  orange: {
    card: "bg-riix-orange border-gray-400",
    iconWrap: "bg-white/20",
    icon: "text-white",
    title: "text-white",
    subtitle: "text-white",
    description: "text-white/90",
  },
  white: {
    card: "bg-white border-gray-400",
    iconWrap: "bg-orange-100",
    icon: "text-riix-orange",
    title: "text-riix-orange",
    subtitle: "text-black",
    description: "text-gray-600",
  },
  black: {
    card: "bg-black border-gray-400",
    iconWrap: "bg-white/10",
    icon: "text-white",
    title: "text-white",
    subtitle: "text-white",
    description: "text-white/80",
  },
};

const ValueCard = ({ icon: Icon, title, subtitle, description, variant }) => {
  const styles = variantStyles[variant];

  return (
    <div
      className={`
        group relative rounded-3xl border p-8 md:p-10
        transition-all duration-300 cursor-pointer
        ${styles.card}
        hover:bg-white hover:border-gray-400
      `}
    >
      {/* Icône */}
      <div
        className={`
          w-20 h-20 rounded-full flex items-center justify-center mb-6
          transition-all duration-300
          ${styles.iconWrap}
          group-hover:bg-orange-100
        `}
      >
        <Icon
          size={36}
          className={`transition-colors duration-300 ${styles.icon} group-hover:text-black`}
        />
      </div>

      {/* Titre */}
      <h3
        className={`
          text-3xl md:text-4xl font-bold mb-4
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
          text-lg md:text-xl font-semibold mb-4 leading-snug
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
          text-sm md:text-base leading-relaxed whitespace-pre-line
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