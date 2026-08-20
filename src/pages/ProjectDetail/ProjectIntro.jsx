export default function ProjectIntro({ paragraphs = [] }) {
  
  // Sécurité absolue — même si normalisation rate
  const safeParagraphs = paragraphs
    .map((p) => {
      // ✅ String normale → ok
      if (typeof p === "string") return p.trim();

      // ✅ Objet Strapi non normalisé → on extrait
      if (p?.children && Array.isArray(p.children)) {
        return p.children.map((c) => c.text || "").join("").trim();
      }

      return "";
    })
    .filter((p) => p !== "");

  if (safeParagraphs.length === 0) return null;

  return (
    <div className="mx-auto mt-8 max-w-4xl sm:mt-10">
      {safeParagraphs.map((p, i) => (
        <p
          key={i}
          className="text-[13px] font-bold leading-normal text-black sm:text-[16px] md:text-[20px]"
        >
          {p}
        </p>
      ))}
    </div>
  );
}