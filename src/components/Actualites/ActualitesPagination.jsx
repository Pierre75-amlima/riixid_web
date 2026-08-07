import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ActualitesPagination() {
  return (
    <div className="flex items-center justify-center gap-3 mt-16">
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0f0f1] text-gray-300">
        <FiChevronLeft size={18} />
      </button>

      <div className="flex items-center gap-0 bg-[#f0f0f1] rounded-full p-1.5">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-sm font-medium shadow-sm">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 text-sm hover:bg-white/60 transition">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 text-sm hover:bg-white/60 transition">
          3
        </button>
        <span className="px-1.5 text-gray-500 text-sm">...</span>
        <button className="px-3 h-8 flex items-center justify-center rounded-full text-gray-500 text-sm hover:bg-white/60 transition">
          668
        </button>
      </div>

      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0f0f1] text-black">
        <FiChevronRight size={18} />
      </button>
    </div>
  );
}