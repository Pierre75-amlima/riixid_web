const AboutTitle = ({ title }) => {
  return (
    <h1 className="text-center font-sans font-bold uppercase lg:text-6xl leading-tight">
      <span className="text-[#fce7d4]">{title.line1}</span>
      <br />
      <span className="text-white">{title.line2}</span>
    </h1>
  );
};

export default AboutTitle;