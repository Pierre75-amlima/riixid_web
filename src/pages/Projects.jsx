import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProjectsHero from "../components/projects-hero/ProjectsHero";
import Realisations from "../components/Realisations/Realisations";
import FeaturedProject from "../components/FeaturedProject/FeaturedProject";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <main>
        <ProjectsHero />
        <Realisations />
        <FeaturedProject />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;