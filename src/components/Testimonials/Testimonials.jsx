import { useState, useEffect, useRef } from "react";
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
  const [visibleCount, setVisibleCount] = useState(3);
  const trackRef = useRef(null);

  // Duplication pour boucle infinie
  const extendedTestimonials = [...testimonialsData, ...testimonialsData];

  // Responsive : nombre de cards visibles
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll toutes les 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Boucle infinie SANS retour visible
  const handleTransitionEnd = () => {
    if (currentIndex >= testimonialsData.length) {
      // On désactive l'animation
      setIsTransitioning(false);
      // On revient à la position 0 (invisible car identique visuellement)
      setCurrentIndex(0);
    }
  };

  // Après reset, on réactive l'animation
  useEffect(() => {
    if (!isTransitioning) {
      // petit délai pour laisser le DOM appliquer le reset
      const id = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  const activeOffset = visibleCount === 1 ? 0 : visibleCount === 2 ? 0 : 1;
  const activeIndex = currentIndex + activeOffset;

  const clipInset =
    visibleCount === 1
      ? "0 0 0 0"
      : visibleCount === 2
      ? "0 4% 0 4%"
      : "0 6% 0 6%";

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <TestimonialsHeader />

        <div className="relative">
          <div className="overflow-hidden" style={{ clipPath: `inset(${clipInset})` }}>
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / visibleCount}%` }}
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
      </div>
    </section>
  );
}