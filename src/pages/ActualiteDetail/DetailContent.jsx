import DetailImageFull from "./DetailImageFull";
import DetailCTA from "./DetailCTA";

export default function DetailContent({ blocks = [] }) {
  return (
    <div className="mt-8 sm:mt-10">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "section":
            return (
              <section
                key={i}
                className="mx-auto max-w-4xl py-5 text-center sm:py-6"
              >
                {block.title && (
                  <h2 className="mb-3 text-lg font-bold text-black sm:text-xl md:text-[22px]">
                    {block.title}
                  </h2>
                )}
                <p className="text-[13px] leading-relaxed text-black sm:text-[14px] md:text-[15px]">
                  {block.text}
                </p>
              </section>
            );

          case "image":
            return <DetailImageFull key={i} src={block.src} alt={block.alt} />;

          case "cta":
            return <DetailCTA key={i} />;

          default:
            return null;
        }
      })}
    </div>
  );
}