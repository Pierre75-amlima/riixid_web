const AboutDescription = ({ text }) => {
  return (
    <p className="mx-auto mt-6 max-w-3xl text-center text-white/80 leading-relaxed
                  text-base sm:text-lg md:text-xl
                  px-2">
      {text}
    </p>
  );
};

export default AboutDescription;