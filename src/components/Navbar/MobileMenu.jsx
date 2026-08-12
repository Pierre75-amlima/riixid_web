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
    <div
      className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-2xl
                  flex flex-col justify-between
                  transition-all duration-500 ease-out
                  ${
                    isOpen
                      ? "opacity-100 translate-x-0 pointer-events-auto"
                      : "opacity-0 translate-x-full pointer-events-none"
                  }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <span className="text-white/50 text-xs tracking-widest uppercase">Menu</span>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Fermer"
        >
          ✕
        </button>
      </div>

      <div className="h-px mx-6 bg-white/10" />

      <nav className="flex flex-col gap-2 px-6 py-8 flex-1 justify-center max-w-md w-full mx-auto">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300
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
          className="mt-1 px-6 py-4 rounded-2xl text-lg font-medium text-left
                     text-white/80 hover:bg-white/10 hover:text-white
                     transition-all duration-300"
        >
          Contact
        </button>
      </nav>

      <div className="px-6 pb-12 max-w-md w-full mx-auto">
        <div className="h-px mb-6 bg-white/10" />
        <Link
          to="/newsletter"
          onClick={onClose}
          className="block w-full text-center bg-riix-orange text-white text-base font-medium px-6 py-4 rounded-full
                     border border-black hover:bg-[#FFE4E1] hover:text-black
                     transition-all duration-300 shadow-lg"
        >
          Newsletter
        </Link>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}