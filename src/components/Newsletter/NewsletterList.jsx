import newsletterData from "./newsletterData";
import NewsletterCard from "./NewsletterCard";

export default function NewsletterList() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
      <h2
        className="mb-5 text-center font-bold text-black
                   text-2xl sm:text-3xl md:text-4xl
                   sm:mb-6"
      >
        LISEZ LES DERNIÈRES <br />
        NEWSLETTERS CRÉATIVE
      </h2>

      <div className="mb-8 border-t border-gray-200 sm:mb-10 md:mb-12" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
        {newsletterData.map((item) => (
          <NewsletterCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}