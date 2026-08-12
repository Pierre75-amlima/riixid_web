import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import ActualitesPage from "./pages/ActualitesPage";
import ActualiteDetail from "./pages/ActualiteDetail/ActualiteDetail";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTop from "./components/ScrollTop";
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
        <Route path="/projets/:slug" element={<ProjectDetail />} />
        <Route path="/actualites" element={<ActualitesPage />} />
        <Route path="/actualites/:slug" element={<ActualiteDetail />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
      </Routes>

      <ContactModal /> 
      <ScrollTop />
    </>
  );
}

export default App;
