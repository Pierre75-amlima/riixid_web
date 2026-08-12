import ProjectsRow from "./ProjectsRow";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import { projectsRow1, projectsRow2 } from "./projectsGalleryData";

const ProjectsGallery = () => {
  return (
    <section
      id="projects-gallery"
      className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10 md:space-y-12">
        <ProjectsRow projects={projectsRow1} />

        <FeaturedProject variant="default" slug="noracash" />

        <ProjectsRow projects={projectsRow2} />

        <FeaturedProject variant="default" slug="noracash" />
      </div>
    </section>
  );
};

export default ProjectsGallery;