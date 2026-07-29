import ValuesGrid from "./ValuesGrid";
import ValuesCTA from "./ValuesCTA";

const Values = () => {
  return (
    <section id="values" className="w-full bg-white py-20 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <ValuesGrid />
        <ValuesCTA />
      </div>
    </section>
  );
};

export default Values;