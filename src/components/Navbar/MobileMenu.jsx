import { NavLink } from "react-router-dom";
import { useContactModal } from "../../context/ContactModalContext";
import { Link } from "react-router-dom";

const links = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Projets", path: "/projets" },
  { label: "Actualités", path: "/actualites" },
];

export default function MobileMenu({ isOpen, onClose }) {
  const { openModal } = useContactModal();

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 sm:w-80
                    bg-black/80 backdrop-blur-xl border-l border-white/10
                    flex flex-col justify-between
                    transition-transform duration-500 ease-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <span className="text-white/50 text-xs tracking-widest uppercase">Menu</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        <div className="h-px mx-6 bg-white/10" />

        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-riix-orange text-white shadow-lg shadow-orange-500/20"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={() => {
              openModal();
              onClose();
            }}
            className="mt-1 px-5 py-3.5 rounded-2xl text-sm font-medium text-left
                       text-white/80 hover:bg-white/10 hover:text-white
                       transition-all duration-300"
          >
            Contact
          </button>
        </nav>

        <div className="px-6 pb-8">
          <div className="h-px mb-6 bg-white/10" />
          <Link
            to="/newsletter"
            onClick={onClose}
            className="block w-full text-center bg-riix-orange text-white text-sm px-6 py-3 rounded-full
                       border border-black hover:bg-[#FFE4E1] hover:text-black
                       transition-all duration-300"
          >
            Newsletter
          </Link>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </>
  );
}