import { Link } from "react-router-dom";

export default function NewsletterBtn() {
  return (
    <Link
      to="/newsletter"
      className="bg-riix-orange text-white text-xs sm:text-sm px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-full
                 border border-black
                 hover:bg-[#FFE4E1] hover:text-black
                 transition-all duration-300 inline-block whitespace-nowrap"
    >
      Newsletter
    </Link>
  );
}