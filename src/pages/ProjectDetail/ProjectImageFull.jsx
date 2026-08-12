export default function ProjectImageFull({ src, alt }) {
  return (
    <div className="mx-auto my-5 w-full max-w-6xl overflow-hidden rounded-3xl sm:my-7">
      <img
        src={src}
        alt={alt || ""}
        className="w-full object-cover
                   h-56 sm:h-72 md:h-[400px] lg:h-[500px]"
      />
    </div>
  );
}