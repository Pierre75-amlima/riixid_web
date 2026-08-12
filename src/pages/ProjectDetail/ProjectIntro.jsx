export default function ProjectIntro({ paragraphs = [] }) {
  return (
    <div className="mx-auto mt-8 max-w-4xl text-left sm:mt-10">
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[13px] font-bold leading-relaxed text-black sm:text-[14px] md:text-[15px]"
        >
          {p}
        </p>
      ))}
    </div>
  );
}