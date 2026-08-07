import ApproachHeader from "./ApproachHeader";
import ApproachCards from "./ApproachCards";

export default function Approach() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <ApproachHeader />
        <ApproachCards />
      </div>
    </section>
  );
}