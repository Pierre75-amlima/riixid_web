import newsletterData from "./newsletterData";
import NewsletterCard from "./NewsletterCard";

export default function NewsletterList() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="text-center text-black text-3xl md:text-4xl font-bold mb-6">
        LISEZ LES DERNIÈRES <br />
        NEWSLETTERS CRÉATIVE
      </h2>

      <div className="border-t border-gray-200 mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsletterData.map((item) => (
          <NewsletterCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}