import { NavLink, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useContactModal } from "../../context/ContactModalContext";
import { useEffect, useState } from "react";

const links = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Projets", path: "/projets" },
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

  // Position dynamique selon scroll et page
  const getTopPosition = () => {
    if (scrolled) return "40px"; 
    return isHome ? "116px" : "116px"; 
  };

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out"
      style={{ top: getTopPosition() }}
    >
      <nav
        className="flex items-center gap-2 rounded-full px-2 py-3
                   bg-white/[0.06] backdrop-blur-[4px] backdrop-saturate-200 backdrop-brightness-110
                   border border-white/25
                   relative overflow-hidden"
      >
        {/* Reflet lumineux subtil en haut (effet verre) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/100 to-transparent" />

        {/* Liens NavLink */}
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `relative z-10 px-11 py-2.5 rounded-full text-sm font-medium transition-all duration-300
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
          className="relative z-10 px-11 py-2.5 rounded-full text-sm font-medium 
                     bg-white/90 text-black 
                     hover:bg-orange-200 hover:text-black 
                     transition-all duration-300"
        >
          Contact
        </button>

        <button
          className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full 
                     bg-white/90 text-black
                     hover:bg-orange-200 hover:text-black 
                     transition-all duration-300"
        >
          <FiSearch size={16} />
        </button>
      </nav>
    </div>
  );
}