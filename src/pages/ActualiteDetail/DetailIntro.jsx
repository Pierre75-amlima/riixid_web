function formatText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const clean = part.slice(2, -2);
      return (
        <strong key={i} className="font-bold text-riix-orange underline">
          {clean}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function DetailIntro({ paragraphs = [] }) {
  return (
    <div className="mx-auto mt-8 max-w-4xl space-y-4 text-center sm:mt-10">
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[13px] leading-relaxed text-black sm:text-[14px] md:text-[15px]"
        >
          {formatText(p)}
        </p>
      ))}
    </div>
  );
}