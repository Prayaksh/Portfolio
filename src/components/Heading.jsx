import React from "react";

const Heading = ({ str1, str2 }) => {
  return (
    <div className="flex flex-col justify-center text-center items-center bg-[#121212f2] font-archivo font-[600] lg:w-[620px] mt-12 mb-4">
      <h1 className="text-[#ff00ff] text-center items-center text-[52px] leading-none lg:text-[96px]">
        {str1} <br className="hidden lg:block" />
        <span className="text-[#b0b0b0a9]">{str2}</span>
      </h1>
    </div>
  );
};

export default Heading;
