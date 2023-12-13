const EducationalBackground = () => {
  return (
    <div className="max-w-[50vw] mx-auto mt-32">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani text-center">Educational Background</h2>
        <div role="tablist" className="tabs tabs-lifted mt-10">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Masters"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <h4 className="font-bold">NATIONAL UNIVERSITY</h4>
        <h5 className="">[Masters of Social Science (MSS) Economics] </h5>
        <p> [2013 - 2014]</p>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Honors"
        checked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
          <h4 className="font-bold">NATIONAL UNIVERSITY</h4>
        <h5>[Bachelor of Social Science (BSS) Economics]  </h5>
        <p>[2008 - 2012]</p>
      </div>
    </div>
    </div>
  );
};

export default EducationalBackground;
