import ValueCard from "./ValueCard";
import { valuesCards } from "./valuesData";

const ValuesGrid = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
      {valuesCards.map((card) => (
        <ValueCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          variant={card.variant}
        />
      ))}
    </div>
  );
};

export default ValuesGrid;