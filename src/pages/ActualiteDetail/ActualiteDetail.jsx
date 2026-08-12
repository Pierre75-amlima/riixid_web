import { useParams, Navigate } from "react-router-dom";
import actualitesData from "../../components/actualites/actualitesData";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ScrollTop from "../../components/ScrollTop";

import DetailHeader from "./DetailHeader";
import DetailIntro from "./DetailIntro";
import DetailContent from "./DetailContent";

import NewsletterHero from "../../components/newsletter/NewsletterHero";
import NewsletterList from "../../components/newsletter/NewsletterList";

export default function ActualiteDetail() {
  const { slug } = useParams();
  const article = actualitesData.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/actualites" replace />;

  return (
    <>
       <Navbar variant="light" />

      {/* Section avec dégradé gris → blanc comme la page mère */}
      <section
        className="w-full
                   bg-gradient-to-b from-gray-200 via-white to-white"
      >
        <article
          className="mx-auto max-w-5xl
                     px-3 pt-24 pb-10
                     sm:px-4 sm:pt-32
                     md:px-6 md:pt-40
                     lg:pt-56"
        >
          <DetailHeader article={article} />
          <DetailIntro paragraphs={article.intro} />
          <DetailContent blocks={article.content} />
        </article>
      </section>

      {/* Newsletter Hero */}
      <section className="px-3 py-12 sm:px-4 sm:py-14 md:py-16">
        <NewsletterHero />
      </section>

      {/* Liste des dernières newsletters */}
      <section className="px-3 pb-16 sm:px-4 md:pb-20">
        <NewsletterList />
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
}