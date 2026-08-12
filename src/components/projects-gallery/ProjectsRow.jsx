import RealisationCard from "../Realisations/RealisationCard";

const ProjectsRow = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">
      {projects.map((project, i) => (
        <RealisationCard key={i} {...project} />
      ))}
    </div>
  );
};

export default ProjectsRow;