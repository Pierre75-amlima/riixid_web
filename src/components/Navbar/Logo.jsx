import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

export default function Logo() {
  return (
    <Link to="/" className="text-white font-bold text-2xl tracking-widest">
      <img src={logo} alt="RIIXID" className="h-8 brightness-0 invert" />
    </Link>
  );
}