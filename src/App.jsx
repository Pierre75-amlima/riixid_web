import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ActualitesPage from "./pages/ActualitesPage";
import ScrollToTop from "./components/ScrollToTop";
import NewsletterPage from "./pages/NewsletterPage";
import ContactModal from "./components/contact-modal/ContactModal";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        <Route path="/actualites" element={<ActualitesPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
      </Routes>

      <ContactModal />
    </>
  );
}

export default App;
