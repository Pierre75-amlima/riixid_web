import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Actualites from "../components/Actualites/Actualites";

const ActualitesPage = () => {
  return (
    <div 
      className="min-h-screen text-black overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #ececef 0%, #ececef 780px, #ffffff 950px, #ffffff 100%)" }}
    >
      <Navbar variant="light" />
      <main>
        <Actualites />
      </main>
      <Footer />
    </div>
  );
};

export default ActualitesPage;