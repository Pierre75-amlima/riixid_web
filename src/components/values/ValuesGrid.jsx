import ValueCard from "./ValueCard";
import { valuesCards } from "./valuesData";

const ValuesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
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