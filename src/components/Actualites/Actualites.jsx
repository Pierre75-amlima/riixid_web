import { useState, useMemo } from "react";
import actualitesData from "./actualitesData";
import ActualiteCard from "./ActualiteCard";
import ActualitePromoCard from "./ActualitePromoCard";
import ActualitesPagination from "./ActualitesPagination";

const ITEMS_PER_PAGE = 6;

export default function Actualites() {
  const [currentPage, setCurrentPage] = useState(1);

  const promoItem = actualitesData.find((i) => i.isPromo);
  const realItems = actualitesData.filter((i) => !i.isPromo);

  const totalPages = Math.ceil(realItems.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = realItems.slice(start, start + ITEMS_PER_PAGE);

    if (promoItem && pageItems.length >= 5) {
      const withPromo = [...pageItems];
      withPromo.splice(4, 0, promoItem);
      return withPromo.slice(0, 6);
    }

    return pageItems;
  }, [currentPage, realItems, promoItem]);

  return (
    <section
      className="px-4 pb-16 pt-32
                 sm:px-6 sm:pb-20 sm:pt-40
                 md:px-8 md:pb-24 md:pt-48
                 lg:pt-56"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {currentItems.map((item) =>
            item.isPromo ? (
              <ActualitePromoCard key={`promo-${currentPage}`} />
            ) : (
              <ActualiteCard key={item.id} item={item} />
            )
          )}
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