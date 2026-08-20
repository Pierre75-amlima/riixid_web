import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getActualite, normalizeActualite } from "../../lib/api";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../components/ScrollTop";

import DetailHeader from "./DetailHeader";
import DetailIntro from "./DetailIntro";
import DetailCTA from "./DetailCTA";
import DetailContent from "./DetailContent";

import NewsletterHero from "../../components/Newsletter/NewsletterHero";
import NewsletterList from "../../components/Newsletter/NewsletterList";

export default function ActualiteDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadArticle() {
      setLoading(true);
      const data = await getActualite(slug);
      if (!active) return;

      const item = Array.isArray(data) ? data[0] : data;
      setArticle(item ? normalizeActualite(item) : null);
      setLoading(false);
    }

    loadArticle();
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar variant="light" />
        <section className="w-full bg-gradient-to-b from-gray-200 via-white to-white px-4 py-24 text-center text-sm text-gray-500">
          Chargement de l’article…
        </section>
        <Footer />
      </>
    );
  }

  if (!article) return <Navigate to="/actualites" replace />;

  return (
    <>
      <Navbar variant="light" />

      <section className="w-full bg-gradient-to-b from-gray-200 via-white to-white">
        <article className="mx-auto max-w-5xl px-3 pb-10 pt-24 sm:px-4 sm:pt-32 md:px-6 md:pt-40 lg:pt-56">
          <DetailHeader article={article} />
          <DetailIntro paragraphs={article.intro} />
          <DetailCTA article={article} />
          <DetailContent blocks={article.content} />
        </article>
      </section>

      <section className="px-3 py-12 sm:px-4 sm:py-14 md:py-16">
        <NewsletterHero />
      </section>

      <section className="px-3 pb-16 sm:px-4 md:pb-20">
        <NewsletterList />
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
}
