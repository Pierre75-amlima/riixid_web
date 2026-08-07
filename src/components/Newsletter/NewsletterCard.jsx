export default function NewsletterCard({ item }) {
  return (
    <div className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-colors duration-300 hover:bg-[#f2f2f3]">
      <div className="p-2 sm:p-2.5">
        <img
          src={item.image}
          alt={item.title}
          className="w-full rounded-xl object-cover
                     h-44 sm:h-48 md:h-52"
        />
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 sm:px-5">
        <h3 className="mb-2 line-clamp-2 text-[15px] font-semibold leading-snug text-black sm:text-[17px]">
          {item.title}
        </h3>
        <p className="mb-5 line-clamp-2 text-[12px] leading-relaxed text-gray-500 sm:mb-6 sm:text-[13px]">
          {item.description}
        </p>

        <div className="mt-auto flex flex-nowrap items-center justify-between gap-2">
          <span className="truncate whitespace-nowrap text-[11px] font-medium text-black sm:text-xs">
            {item.date}
          </span>
          <span className="shrink-0 whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-1 text-[10px] text-gray-600 sm:text-[11px]">
            {item.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}