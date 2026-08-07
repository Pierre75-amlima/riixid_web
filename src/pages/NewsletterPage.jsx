import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";

const NewsletterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-black overflow-hidden">
      <Navbar variant="light" />
      <main>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default NewsletterPage;