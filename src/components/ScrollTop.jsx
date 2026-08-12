import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Remonter en haut"
      className={`
        fixed z-[90]
        bottom-5 right-5
        sm:bottom-6 sm:right-6
        md:bottom-8 md:right-8
        h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14
        flex items-center justify-center
        rounded-full
        bg-riix-orange text-white
        border border-white/30
        shadow-lg shadow-orange-500/30
        backdrop-blur-md
        transition-all duration-500 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      <FiArrowUp className="text-lg sm:text-xl md:text-2xl" />
    </button>
  );
}