export default function NewsletterCard({ item }) {
  return (
    <div className="bg-white hover:bg-[#f2f2f3] border border-gray-100 rounded-2xl overflow-hidden flex flex-col transition-colors duration-300 cursor-pointer">
      <div className="p-2.5">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-52 object-cover rounded-xl"
        />
      </div>

      <div className="px-5 pb-4 flex flex-col flex-1">
        <h3 className="text-[17px] font-semibold text-black mb-2 leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="text-[13px] text-gray-500 mb-6 leading-relaxed line-clamp-2">
          {item.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 flex-nowrap">
          <span className="text-xs font-medium text-black whitespace-nowrap truncate">
            {item.date}
          </span>
          <span className="text-[11px] text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
            {item.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}