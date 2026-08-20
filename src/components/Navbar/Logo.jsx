import { Link } from "react-router-dom";

const logo = "/Logo.svg";

export default function Logo({ variant = "dark" }) {
  const filterClass =
    variant === "light" ? "logo-orange" : "brightness-0 invert";

  return (
    <Link to="/" className="font-bold text-2xl tracking-widest">
      <img src={logo} alt="RIIXID" className={`h-6 sm:h-7 md:h-8 w-auto ${filterClass}`} />
    </Link>
  );
}