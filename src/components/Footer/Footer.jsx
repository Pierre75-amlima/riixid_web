import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 xl:px-[40px]">
      <div
        className="relative overflow-hidden rounded-2xl bg-black
                   px-4 pt-14 sm:px-6 sm:pt-16
                   md:px-8 md:pt-20
                   lg:px-12 lg:pt-24
                   xl:px-[60px] xl:pt-[100px]
                   min-h-[300px] sm:min-h-[340px] md:min-h-[390px]"
      >
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;