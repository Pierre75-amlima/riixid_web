import ProjectImageFull from "./ProjectImageFull";
import ProjectCTA from "./ProjectCTA";
import ProjectNext from "./ProjectNext";

export default function ProjectContent({ blocks = [] }) {
  return (
    <div className="mt-6 sm:mt-8">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "section":
            return (
              <section key={i} className="mx-auto max-w-4xl py-2.5 text-left">
                <p className="text-[12px] leading-relaxed text-gray-500 sm:text-[13px] md:text-[14px]">
                  {block.text}
                </p>
              </section>
            );

          case "image":
            return <ProjectImageFull key={i} src={block.src} alt={block.alt} />;

          case "cta":
            return <ProjectCTA key={i} />;

          case "next":
            return <ProjectNext key={i} {...block} />;

          default:
            return null;
        }
      })}
    </div>
  );
}