export default function ProjectImagesRow({ images = [], bg }) {
  return (
    <div
      className="mx-auto my-6 w-full max-w-6xl overflow-hidden rounded-3xl px-3 py-6 sm:my-8 sm:px-6 sm:py-10"
      style={{ backgroundColor: bg || "transparent" }}
    >
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-56 w-full rounded-2xl object-cover sm:h-72 md:h-[380px]"
          />
        ))}
      </div>
    </div>
  );
}