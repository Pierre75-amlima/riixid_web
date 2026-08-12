import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ActualitesPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  // Génère la liste des pages avec "..."
  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("...");
      }
    }
    // Supprime les doublons "..."
    return pages.filter(
      (p, i, arr) => !(p === "..." && arr[i - 1] === "...")
    );
  };

  const pages = getPages();

  const handleChange = (page) => {
    if (page === "..." || page === currentPage) return;
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-12 flex items-center justify-center gap-2 sm:mt-14 sm:gap-3 md:mt-16">
      {/* Précédent */}
      <button
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f0f1] text-black transition
                   hover:text-riix-orange disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:text-gray-300
                   sm:h-10 sm:w-10"
        aria-label="Page précédente"
      >
        <FiChevronLeft className="text-base sm:text-lg" />
      </button>

      {/* Pages */}
      <div className="flex items-center gap-0 rounded-full bg-[#f0f0f1] p-1 sm:p-1.5">
        {pages.map((page, i) =>
          page === "..." ? (
            <span
              key={`dots-${i}`}
              className="px-1.5 text-sm text-gray-500"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handleChange(page)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition
                ${
                  page === currentPage
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:bg-white/60"
                }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Suivant */}
      <button
        onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f0f1] text-black transition
                   hover:text-riix-orange disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:text-gray-300
                   sm:h-10 sm:w-10"
        aria-label="Page suivante"
      >
        <FiChevronRight className="text-base sm:text-lg" />
      </button>
    </div>
  );
}