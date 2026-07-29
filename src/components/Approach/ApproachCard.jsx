export default function ApproachCard({ image, badge, title, description }) {
  return (
    <article className="group">
      <div
        className="mb-4 overflow-hidden rounded-2xl transition-transform duration-500 ease-out
                   group-hover:-rotate-[3deg]"
      >
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover"
        />
      </div>

      <div
        className="transition-transform duration-500 ease-out
                   group-hover:translate-y-3"
      >
        <span
          className="mb-3 inline-block rounded-full border border-riix-orange
                     px-3 py-1 text-xs font-medium text-riix-orange"
        >
          {badge}
        </span>

        <h4 className="mb-2 text-xl font-bold leading-tight text-black">
          {title}
        </h4>

        <p className="text-sm leading-relaxed text-gray-500">
          {description}
        </p>
      </div>
    </article>
  );
}