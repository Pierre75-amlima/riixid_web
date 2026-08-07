import { NavLink, useLocation } from "react-router-dom";
import { useContactModal } from "../../context/ContactModalContext";
import { useEffect, useState } from "react";

const links = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Projets", path: "/projets" },
  { label: "Actualités", path: "/actualites" },
];

export default function NavMenu() {
  const { openModal } = useContactModal();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTopPosition = () => {
    if (scrolled) return "40px";
    return isHome ? "116px" : "116px";
  };

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
                 w-auto max-w-[calc(100%-2rem)]"
      style={{ top: getTopPosition() }}
    >
      <nav
        className="relative flex items-center justify-center gap-1.5
                   rounded-full
                   px-2 py-2
                   md:px-2.5 md:py-2
                   lg:px-4 lg:py-2.5
                   xl:px-5 xl:py-3
                   bg-white/[0.06] backdrop-blur-[4px] backdrop-saturate-200 backdrop-brightness-110
                   border border-white/25 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/100 to-transparent" />

        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `relative z-10 rounded-full font-medium whitespace-nowrap transition-all duration-300
              text-[12px] md:text-[13px] lg:text-sm
              px-3 py-1.5
              md:px-4 md:py-2
              lg:px-6 lg:py-2.5
              xl:px-12
              ${
                isActive
                  ? "bg-riix-orange text-white shadow-lg shadow-orange-500/30"
                  : "bg-white/90 text-black hover:bg-orange-200 hover:text-black"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}

        <button
          type="button"
          onClick={openModal}
          className="relative z-10 rounded-full font-medium whitespace-nowrap transition-all duration-300
                     text-[12px] md:text-[13px] lg:text-sm
                     px-3 py-1.5
                     md:px-4 md:py-2
                     lg:px-6 lg:py-2.5
                     xl:px-8
                     bg-white/90 text-black
                     hover:bg-orange-200 hover:text-black"
        >
          Contact
        </button>
      </nav>
    </div>
  );
}