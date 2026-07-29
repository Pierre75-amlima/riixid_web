import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/Logo.svg";

const socialIcons = [
  { Icon: FaFacebookF, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaLinkedinIn, href: "#" },
  { Icon: FaWhatsapp, href: "#" },
];

export default function FooterTop() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-8 md:flex-row">
      {/* Logo (blanc) */}
      <div>
        <img
          src={logo}
          alt="RIIXID"
          className="h-8 brightness-0 invert"
        />
      </div>

      {/* Liens légaux */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
        <a
          href="#"
          className="underline underline-offset-4 transition-colors hover:text-white"
        >
          Politique de confidentialité
        </a>
        <a
          href="#"
          className="underline underline-offset-4 transition-colors hover:text-white"
        >
          Conditions d'utilisation
        </a>
        <a
          href="#"
          className="underline underline-offset-4 transition-colors hover:text-white"
        >
          Cookies
        </a>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex items-center gap-3">
        {socialIcons.map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}