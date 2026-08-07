import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const icons = [
  { Icon: FaFacebookF, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaLinkedinIn, href: "#" },
  { Icon: FaWhatsapp, href: "#" },
];

export default function SocialIcons({ variant = "dark" }) {
  const styleClass =
    variant === "light"
      ? "bg-transparent border border-riix-orange text-riix-orange hover:bg-riix-orange hover:text-white"
      : "bg-white/10 border border-white/60 text-white hover:bg-white/25 hover:border-white/80";

  return (
    <div className="flex items-center gap-2 lg:gap-3">
      {icons.map(({ Icon, href }, i) => (
        <a
          key={i}
          href={href}
          className={`w-8 h-5 lg:w-9 lg:h-6 flex items-center justify-center rounded-full transition-all duration-300 shrink-0 ${styleClass}`}
        >
          <Icon className="text-[12px] lg:text-[14px]" />
        </a>
      ))}
    </div>
  );
}