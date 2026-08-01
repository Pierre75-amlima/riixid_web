import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactModal from "./components/contact-modal/ContactModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/projets" element={<ProjectsPage />} />
      </Routes>

      {/* Modal Contact — disponible partout */}
      <ContactModal />
    </>
  );
}

export default App;