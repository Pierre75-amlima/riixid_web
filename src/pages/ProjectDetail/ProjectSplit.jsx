export default function ProjectSplit({ left, right }) {
  return (
    <div className="mx-auto my-6 grid w-full max-w-6xl grid-cols-1 gap-3 rounded-3xl overflow-hidden sm:my-8 md:grid-cols-2 md:gap-4">
      <div
        className="flex items-center justify-center rounded-3xl p-6 sm:p-10"
        style={{ backgroundColor: left.bg }}
      >
        <img src={left.src} alt="" className="h-64 w-full object-cover sm:h-80" />
      </div>
      <div
        className="flex items-center justify-center rounded-3xl p-6 sm:p-10"
        style={{ backgroundColor: right.bg }}
      >
        <img src={right.src} alt="" className="h-64 w-full object-contain sm:h-80" />
      </div>
    </div>
  );
}