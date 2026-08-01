import ProjectsRow from "./ProjectsRow";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import { projectsRow1, projectsRow2 } from "./projectsGalleryData";

const ProjectsGallery = () => {
  return (
    <section id="projects-gallery" className="w-full bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Bloc 1 : 2 cartes */}
        <ProjectsRow projects={projectsRow1} />

        {/* Bloc 2 : 1 featured */}
        <FeaturedProject />

        {/* Bloc 3 : 2 cartes */}
        <ProjectsRow projects={projectsRow2} />

        {/* Bloc 4 : 1 featured */}
        <FeaturedProject />
      </div>
    </section>
  );
};

export default ProjectsGallery;