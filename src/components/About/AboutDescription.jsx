const AboutDescription = ({ text }) => {
  return (
    <p className="text-center text-lg md:text-xl text-white/80 max-w-3xl mx-auto mt-8 leading-relaxed font-sans">
      {text}
    </p>
  );
};

export default AboutDescription;