import { useEffect, useState } from "react";
import NewsletterCard from "./NewsletterCard";
import { getNewsletterItems, normalizeStrapiImage } from "../../lib/api";

const defaultNewsletterData = [
  {
    id: 1,
    image: "/src/assets/monnaie.jfif",
    title: "La BCE ouvre la consultation sur le design des billets",
    description: "Dix versions de billets sont à découvrir et à sélectionner par les Européens.",
    date: "Le 24 juillet 2026",
    readTime: "5 min de lecture",
  },
  {
    id: 2,
    image: "/src/assets/monnaie.jfif",
    title: "Choisissez le nouveau visage des billets en euros",
    description: "La Banque centrale européenne vous invite à prendre part au vote public.",
    date: "Le 24 juillet 2026",
    readTime: "5 min de lecture",
  },
  {
    id: 3,
    image: "/src/assets/monnaie.jfif",
    title: "La Banque centrale européenne vous laisse voter pour le design des futurs billets",
    description: "La BCE dévoile dix maquettes pour ses futurs billets en euros et laisse les Européens voter jusqu'au 21 septembre.",
    date: "Le 24 juillet 2026",
    readTime: "5 min de lecture",
  },
];

export default function NewsletterList() {
  const [newsletterData, setNewsletterData] = useState(defaultNewsletterData);

  useEffect(() => {
    let active = true;

    async function loadNewsletters() {
      const data = await getNewsletterItems();
      if (!active || !Array.isArray(data)) return;

      const normalized = data.map((item) => ({
        id: item.id || item.slug || item.title,
        image: normalizeStrapiImage(item.image),
        title: item.title || "",
        description: item.description || "",
        date: item.date || "",
        readTime: item.readTime || "",
      }));

      if (normalized.length) setNewsletterData(normalized);
    }

    loadNewsletters();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
      <h2 className="mb-5 text-center font-bold text-black text-2xl sm:text-3xl md:text-4xl sm:mb-6">
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