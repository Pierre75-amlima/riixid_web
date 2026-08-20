export default function ProjectImageFull({ src, alt }) {
  // ← si src est null, on n'affiche rien
  if (!src) {
    console.warn("⚠️ ProjectImageFull: src manquant", { alt });
    return null;
  }

  return (
    <div className="mx-auto my-5 w-full max-w-6xl overflow-hidden rounded-3xl sm:my-7">
      <img
        src={src}
        alt={alt || ""}
        className="w-full object-cover h-56 sm:h-72 md:h-[400px] lg:h-[500px]"
        onError={(e) => {
          console.error("❌ Image cassée:", src);
          e.target.style.display = "none";
        }}
      />
    </div>
  );
}