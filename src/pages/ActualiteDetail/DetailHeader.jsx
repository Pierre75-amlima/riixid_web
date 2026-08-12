export default function DetailHeader({ article }) {
  return (
    <header className="text-center">
      <h1
        className="mx-auto max-w-4xl font-black leading-[0.9] text-black
                   text-[26px] sm:text-4xl md:text-5xl lg:text-[52px]"
      >
        {article.title}
      </h1>

      <div className="mt-5 sm:mt-7">
        <p className="text-sm font-bold text-black sm:text-[15px]">
          Par {article.author}
        </p>
        <p className="mt-1 text-xs text-gray-500 sm:text-[13px]">
          {article.date}
        </p>
      </div>
    </header>
  );
}