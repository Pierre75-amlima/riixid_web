import diamant from "../../assets/diamant.jpeg";
import capsule from "../../assets/capsule.jpeg";

export default function PartnerBannerVisuals() {
  return (
    <>
      {/* Diamant à gauche */}
      <img
        src={diamant}
        alt="Diamant décoratif"
        className="absolute -bottom-23 left-20 h-40 w-40 object-contain mix-blend-screen md:h-56 md:w-56"
      />

      {/* Capsule à droite */}
      <img
        src={capsule}
        alt="Capsule décorative"
        className="absolute -right-15 bottom-10 h-32 w-32 object-contain mix-blend-screen md:h-48 md:w-48"
      />
    </>
  );
}
