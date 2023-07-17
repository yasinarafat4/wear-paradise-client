const SectionTitle = ({ heading }) => {
  return (
    <div className="text-center space-y-4 mt-6 mb-3 md:mt-16 md:mb-5 w-9/12 md:w-7/12 lg:w-6/12 mx-auto">
      <h2 className="text-xl text-[#e84766] md:text-3xl lg:text-4xl font-semibold py-2 md:py-4">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
