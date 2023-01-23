import React from 'react';

const AboutSection = () => {
  return (
    <>
      <br></br>
      <div className="w-full px-5">
        <div className="h-[23px] w-[184px] border-l-[5px] border-l-secondary">
          <p className="px-7 text-base font-semibold text-secondary">About Us</p>
        </div>
        <br></br>
        <p className="font-semibold text-base leading-7 text-gray-500 max-w-[800px] text-xl lg:text-2xl">
          We take pride in our client's work. We always prefer Qualitative / Tested work submissions
          within deadline.
        </p>
      </div>
      <br></br>
    </>
  );
};

export default AboutSection;
