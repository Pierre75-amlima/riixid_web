import NewsletterHero from "./NewsletterHero";
import NewsletterList from "./NewsletterList";

export default function Newsletter() {
  return (
    <section
      className="px-4 pt-32 pb-16
                 sm:px-6 sm:pt-40 sm:pb-20
                 md:px-8 md:pt-48 md:pb-24
                 lg:pt-56"
    >
      <NewsletterHero />

      <div className="mt-14 sm:mt-16 md:mt-20 lg:mt-24">
        <NewsletterList />
      </div>
    </section>
  );
}