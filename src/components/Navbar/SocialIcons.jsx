import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const icons = [
  { Icon: FaFacebookF, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaLinkedinIn, href: "#" },
  { Icon: FaWhatsapp, href: "#" },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {icons.map(({ Icon, href }, i) => (
        <a
          key={i}
          href={href}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-white/60 text-white 
                     hover:bg-riix-cendre hover:text-black hover:border-riix-cendre 
                     transition-all duration-300"
        >
          <Icon size={14} />
        </a>
      ))}
    </div>
  );
}