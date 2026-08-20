import { useState, useMemo, useEffect } from "react";
import { getActualites, normalizeActualite } from "../../lib/api";
import ActualiteCard from "./ActualiteCard";
import ActualitesPagination from "./ActualitesPagination";

const ITEMS_PER_PAGE = 6;

export default function Actualites() {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadArticles() {
      setLoading(true);
      const data = await getActualites();
      if (!active) return;

      const normalized = (Array.isArray(data) ? data : []).map(normalizeActualite);
      setItems(normalized);
      setLoading(false);
    }

    loadArticles();
    return () => {
      active = false;
    };
  }, []);

  const realItems = useMemo(() => items.filter((item) => !item.isPromo), [items]);
  const totalPages = Math.max(1, Math.ceil(realItems.length / ITEMS_PER_PAGE));

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return realItems.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, realItems]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage, totalPages]);

  if (loading) {
    return (
      <section className="px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40 md:px-8 md:pb-24 md:pt-48 lg:pt-56">
        <div className="mx-auto max-w-7xl text-center text-sm text-gray-500">Chargement des actualités…</div>
      </section>
    );
  }

  return (
    <section
      className="px-4 pb-16 pt-32
                 sm:px-6 sm:pb-20 sm:pt-40
                 md:px-8 md:pb-24 md:pt-48
                 lg:pt-56"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {currentItems.map((item) => (
            <ActualiteCard key={item.id} item={item} />
          ))}
        </div>

        <ActualitesPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}