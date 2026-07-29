export default function ExpertiseCard({ icon: Icon, title, description, variant = "light" }) {
  const variants = {
    light: {
      card: "bg-white border border-gray-200",
      iconWrap: "bg-orange-50 group-hover:bg-gray-200",
      icon: "text-riix-orange group-hover:text-black",
      title: "text-riix-orange group-hover:text-black",
      description: "text-gray-500",
    },
    dark: {
      card: "bg-black border border-gray-200 hover:bg-white",
      iconWrap: "bg-gray-800 group-hover:bg-gray-200",
      icon: "text-white group-hover:text-black",
      title: "text-white group-hover:text-black",
      description: "text-gray-300 group-hover:text-gray-500",
    },
    orange: {
      card: "bg-riix-orange border border-gray-200 hover:bg-white",
      iconWrap: "bg-orange-400/40 group-hover:bg-gray-200",
      icon: "text-white group-hover:text-black",
      title: "text-white group-hover:text-black",
      description: "text-white/90 group-hover:text-gray-500",
    },
  };

  const s = variants[variant];

  return (
    <div
      className={`group cursor-pointer rounded-3xl p-7 min-h-[350px] transition-all duration-500 ease-out ${s.card}`}
    >
      {/* Icône dans cercle */}
      <div
        className={`mb-6 flex h-16 w-16  items-center justify-center rounded-full transition-colors duration-500 ${s.iconWrap}`}
      >
        <Icon className={`h-12 w-12 transition-colors duration-500 ${s.icon}`} />
      </div>

      {/* Titre */}
      <h1
        className={`mb-3 text-4xl font-bold leading-tight transition-colors duration-500 ${s.title}`}
      >
        {title}
      </h1>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed transition-colors duration-500 ${s.description}`}
      >
        {description}
      </p>
    </div>
  );
}