import ValuesGrid from "./ValuesGrid";
import ValuesCTA from "./ValuesCTA";

const Values = () => {
  return (
    <section
      id="values"
      className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <ValuesGrid />
        <ValuesCTA />
      </div>
    </section>
  );
};

export default Values;