import { useParams, Navigate } from "react-router-dom";
import projectsData from "./projectsData";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

import ProjectIntro from "./ProjectIntro";
import ProjectContent from "./ProjectContent";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projets" replace />;

  return (
    <>
      <section className="relative w-full bg-black">
        <Navbar />

        <div
          className="mx-auto max-w-6xl text-center
                     px-4 pt-40 pb-24
                     sm:px-6 sm:pt-48 sm:pb-32
                     md:px-8 md:pt-56 md:pb-40
                     lg:pt-60 lg:pb-48"
        >
          <p className="text-sm font-medium text-white sm:text-[15px]">
            {project.categories.join(" · ")}
          </p>
          <h1
            className="mt-2 font-black uppercase tracking-tight text-[#f6dcbf]
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {project.title}
          </h1>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-gray-100 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16 md:px-8">
          {project.heroImage && (
            <img
              src={project.heroImage}
              alt={project.title}
              className="relative w-full object-cover
                         rounded-t-3xl rounded-b-none
                         -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44
                         h-64 sm:h-80 md:h-[440px] lg:h-[560px]"
            />
          )}

          <div className="mt-10 sm:mt-12">
            <ProjectIntro paragraphs={project.intro} />
            <ProjectContent blocks={project.content} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}