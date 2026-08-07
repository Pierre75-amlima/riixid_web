const AboutTitle = ({ title }) => {
  return (
    <h1
      className="text-center font-sans font-bold uppercase leading-[0.95] tracking-[-0.02em]
                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
    >
      <span className="text-[#fce7d4]">{title.line1}</span>
      <br />
      <span className="text-white">{title.line2}</span>
    </h1>
  );
};

export default AboutTitle;