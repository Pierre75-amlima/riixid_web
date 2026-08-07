import propulseur from "../../assets/propulseur.png";
import securite from "../../assets/securite.png";

export default function PartnerBannerVisuals() {
  return (
    <>
      <img
        src={propulseur}
        alt="propulseur décorative"
        className="absolute z-10 object-contain
                   -bottom-6 left-2 h-40 w-40
                   sm:-bottom-7 sm:left-3 sm:h-52 sm:w-52
                   md:-bottom-9 md:left-4 md:h-[24.5rem] md:w-[24.5rem]"
      />

      <img
        src={securite}
        alt="securite décoratif"
        className="absolute z-10 object-contain
                   -bottom-3 right-1 h-32 w-32
                   sm:-bottom-4 sm:h-40 sm:w-40
                   md:-bottom-5 md:h-80 md:w-80"
      />
    </>
  );
}