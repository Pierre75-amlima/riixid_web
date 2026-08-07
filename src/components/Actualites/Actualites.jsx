import actualitesData from "./actualitesData";
import ActualiteCard from "./ActualiteCard";
import ActualitePromoCard from "./ActualitePromoCard";
import ActualitesPagination from "./ActualitesPagination";

export default function Actualites() {
  return (
    <section className="pt-56 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualitesData.map((item) =>
            item.isPromo ? (
              <ActualitePromoCard key={item.id} />
            ) : (
              <ActualiteCard key={item.id} item={item} />
            )
          )}
        </div>

        <ActualitesPagination />
      </div>
    </section>
  );
}