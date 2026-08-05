import propulseur from "../../assets/propulseur.png";
import securite from "../../assets/securite.png";

export default function PartnerBannerVisuals() {
  return (
    <>
      <img
        src={propulseur}
        alt="propulseur décorative"
        className="absolute -bottom-9 left-4 h-62 w-62 object-contain md:h-98 md:w-98 z-10"
      />

      <img
        src={securite}
        alt="securite décoratif"
        className="absolute right-1 -bottom-5 h-44 w-44 object-contain md:h-80 md:w-80 z-10"
      />
    </>
  );
}