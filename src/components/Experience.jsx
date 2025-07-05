import React from "react";
import { useState } from "react";
import { experienceData } from "../data/Database";
import Heading from "./Heading";
const Experience = ({ data = experienceData }) => {
  if (!data || data.length === 0) {
    return <p>exploring..</p>;
  }
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      <Heading str1={"2 Months of"} str2={"Experience"} />
      {data.map((exp, i) => {
        return (
          <button
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-full text-left text-[#b0b0b0a9] font-archivo flex flex-col justify-center p-4 relative lg:w-[620px] my-2 ${
              hoveredIndex === i ? "bg-[#232323] rounded-xl" : "bg-[#121212f2]"
            }`}
          >
            <div
              className={`absolute hidden md:block  md:right-0 md:top-0 ${
                hoveredIndex === i
                  ? "md:ml-4 md:mb-4 md:mr-2 md:mt-2"
                  : "md:mr-4 md:mt-4"
              }`}
            >
              <img src="public\assets\icons\arrow-topright.svg" alt="Arrow" />
            </div>
            <h2 className="text-[#ffffff] text-2xl font-[700] leading-tight">
              {exp.company}
            </h2>
            <h3 className="text-[#ffffff] text-lg font-[800] leading-tight">
              {exp.role}
            </h3>
            <p className="font-[300] text-lg leading-tight tracking-loose mt-2 mb-4 md:w-128">
              {exp.about}
            </p>
            <p className="text-lg font-[500]">
              {exp.startDate} - {exp.endDate}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default Experience;
