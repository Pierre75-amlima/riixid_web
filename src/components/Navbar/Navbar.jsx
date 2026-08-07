import SocialIcons from "./SocialIcons";
import Logo from "./Logo";
import NewsletterBtn from "./NewsletterBtn";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Navbar({ variant = "dark" }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const burgerButtonClass =
    variant === "light"
      ? "bg-transparent border border-riix-orange/60"
      : "bg-white/10 border border-white/30 backdrop-blur-sm";

  const burgerLineClass =
    variant === "light" ? "bg-riix-orange" : "bg-white";

  return (
    <header className="absolute top-4 md:top-6 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-25 py-3 md:py-4 gap-4">
        <div className="hidden md:flex shrink-0">
          <SocialIcons variant={variant} />
        </div>

        <div className="shrink-0">
          <Logo variant={variant} />
        </div>

        <div className="hidden md:flex shrink-0">
          <NewsletterBtn />
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex md:hidden flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-full transition-all duration-300 ${burgerButtonClass}`}
          aria-label="Menu"
        >
          <span
            className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 origin-center ${burgerLineClass}
              ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${burgerLineClass}
              ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 origin-center ${burgerLineClass}
              ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      <div className="hidden md:block">
        <NavMenu />
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}