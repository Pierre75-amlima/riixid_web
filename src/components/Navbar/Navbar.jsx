import SocialIcons from "./SocialIcons";
import Logo from "./Logo";
import NewsletterBtn from "./NewsletterBtn";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between px-8 py-4">
        <SocialIcons />
        <Logo />
        <NewsletterBtn />
      </div>
      <NavMenu />
    </header>
  );
}