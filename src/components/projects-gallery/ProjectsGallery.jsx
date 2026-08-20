import { useEffect, useState } from "react";
import { getProjets, normalizeProjet } from "../../lib/api";
import ProjectsRow from "./ProjectsRow";
import FeaturedProject from "../FeaturedProject/FeaturedProject";

const ProjectsGallery = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let active = true;

    async function loadProjects() {
      const data = await getProjets();
      if (!active) return;

      const normalized = (Array.isArray(data) ? data : []).map(normalizeProjet);
      setProjects(normalized);
    }

    loadProjects();
    return () => {
      active = false;
    };
  }, []);

  if (!projects.length) {
    return (
      <section id="projects-gallery" className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">Chargement des projets…</div>
      </section>
    );
  }

  const row1 = projects.slice(0, 2);
  const row2 = projects.slice(2, 4);
  const featured = projects[0];

  return (
    <section
      id="projects-gallery"
      className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10 md:space-y-12">
        <ProjectsRow projects={row1} />

        <FeaturedProject
          variant="default"
          slug={featured.slug}
          title={featured.title}
          description={featured.description}
          image={featured.image}
        />

        {row2.length > 0 && <ProjectsRow projects={row2} />}
      </div>
    </section>
  );
};

export default ProjectsGallery;