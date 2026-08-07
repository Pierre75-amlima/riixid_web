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
    <div className="flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-6 sm:pt-7 md:pt-8 lg:flex-row">
      {/* Logo */}
      <div className="shrink-0">
        <img
          src={logo}
          alt="RIIXID"
          className="h-6 sm:h-7 md:h-8 w-auto brightness-0 invert"
        />
      </div>

      {/* Liens légaux */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs sm:text-sm text-white/80 md:gap-x-6">
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
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {socialIcons.map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <Icon className="text-[12px] sm:text-[14px]" />
          </a>
        ))}
      </div>
    </div>
  );
}