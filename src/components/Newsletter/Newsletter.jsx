import NewsletterHero from "./NewsletterHero";
import NewsletterList from "./NewsletterList";

export default function Newsletter() {
  return (
    <section className="pt-56 pb-24 px-8">
      <NewsletterHero />
      <div className="mt-24">
        <NewsletterList />
      </div>
    </section>
  );
}