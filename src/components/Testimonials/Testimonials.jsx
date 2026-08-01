import { useState, useEffect } from "react";
import sino from "../../assets/sino.PNG"; 
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    quote:
      "Un vrai talent pour comprendre nos besoins. Il a transformé nos idées en une interface intuitive et agréable à utiliser.",
    name: "Aïcha K.",
    role: "CEO de CreativHub",
    photo: sino,
  },
  {
    quote:
      "Un travail soigné et efficace ! Grâce à Constantin, nos utilisateurs adorent l'expérience de navigation et reviennent régulièrement.",
    name: "Marie T",
    role: "Fondatrice de ZenApp",
    photo: sino,
  },
  {
    quote:
      "Collaboration fluide et résultats impressionnants. Son design a vraiment mis notre site en valeur et reflète parfaitement notre vision.",
    name: "Paul D",
    role: "Responsable Marketing chez WebNest",
    photo: sino,
  },
  {
    quote:
      "Constantin a su créer un design moderne et fonctionnel. Il a parfaitement aligné son travail avec notre identité visuelle.",
    name: "Thomas B",
    role: "Directeur de ProActive Solutions",
    photo: sino,
  },
  {
    quote:
      "Rapide, créatif et à l'écoute. Travailler avec lui a été un vrai plaisir, et nous avons hâte de collaborer à nouveau.",
    name: "Sarah M.",
    role: "Community Manager chez EkoWorld",
    photo: sino,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplique les données pour boucle infinie
  const extendedTestimonials = [...testimonialsData, ...testimonialsData];

  // Défilement auto toutes les 3.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Reset silencieux quand on atteint la 2e copie
  useEffect(() => {
    if (currentIndex >= testimonialsData.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex]);

  // Réactive la transition après le reset
  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  // La carte "active" est celle du milieu (index + 1)
  const activeIndex = currentIndex + 1;

  return (
    <section className="w-full overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <TestimonialsHeader />

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 px-3"
              >
                <TestimonialCard
                  {...testimonial}
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}