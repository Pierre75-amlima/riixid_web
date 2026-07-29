import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const links = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Projets", path: "/projets" },
  { label: "Contact", path: "/contact" },
];

export default function NavMenu() {
  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-11 py-2.5 rounded-full text-sm font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-riix-orange text-white"
                  : "bg-white text-black hover:bg-riix-orange hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}

        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black
                     hover:bg-riix-orange hover:text-white transition-all duration-300"
        >
          <FiSearch size={16} />
        </button>
      </nav>
    </div>
  );
}