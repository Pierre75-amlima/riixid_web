const AboutTitle = ({ title }) => {
  return (
    <h1 className="text-center font-sans font-bold uppercase text-[#fce7d4] lg:text-6xl leading-tight">
      {title.line1}
      <br />
      {title.line2}
    </h1>
  );
};

export default AboutTitle;