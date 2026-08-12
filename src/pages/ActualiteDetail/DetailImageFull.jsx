export default function DetailImageFull({ src, alt }) {
  return (
    <div className="mx-auto my-7 w-full max-w-6xl overflow-hidden rounded-3xl sm:my-9 md:my-10">
      <img
        src={src}
        alt={alt}
        className="h-64 w-full object-cover sm:h-80 md:h-[440px] lg:h-[540px]"
      />
    </div>
  );
}