import ApproachHeader from "./ApproachHeader";
import ApproachCards from "./ApproachCards";

export default function Approach() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ApproachHeader />
        <ApproachCards />
      </div>
    </section>
  );
}