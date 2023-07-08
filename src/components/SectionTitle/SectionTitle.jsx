const SectionTitle = ({ heading }) => {
  return (
    <div className="text-center space-y-4 my-6 md:my-16 w-9/12 md:w-7/12 lg:w-5/12 mx-auto">
      <h2 className="text-xl text-[#e84766] md:text-3xl font-semibold py-2 md:py-4">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
