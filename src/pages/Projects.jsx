import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProjectsHero from "../components/projects-hero/ProjectsHero";
import ProjectsGallery from "../components/projects-gallery/ProjectsGallery";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <main>
        <ProjectsHero />
        <ProjectsGallery />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;