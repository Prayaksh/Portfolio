import React from "react";
import { useState } from "react";
import { toolsData } from "../data/Database";
import { div } from "framer-motion/client";
import Heading from "./Heading";
import { Link, useNavigate } from "react-router-dom";

const ToolsTab = ({ data = toolsData }) => {
  if (!data || data.lenght === 0) {
    return <p>No tools available</p>;
  }
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  return (
    <div>
      <Heading str1={"Premium"} str2={"Tools"} />
      {data.map((tool, i) => {
        return (
          <button
            key={i}
            onMouseEnter={() => {
              setHoveredIndex(i);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
            }}
            className={`w-full text-left  text-[#b0b0b0a9] font-archivo flex flex-col justify-center p-4 relative lg:w-[620px] my-2 ${
              hoveredIndex === i ? "bg-[#232323] rounded-xl" : "bg-[#121212f2]"
            }`}
            onClick={() => {
              window.open(`${tool.url}`, "_blank");
            }}
          >
            <div
              className={`absolute hidden md:block  md:right-0 md:top-0 ${
                hoveredIndex === i
                  ? "md:ml-4 md:mb-4 md:mr-2 md:mt-2"
                  : "md:mr-4 md:mt-4"
              }`}
            >
              <img src="src\assets\icons\arrow-topright.svg" alt="Arrow" />
            </div>
            <div className="flex align-center">
              <img
                src={`${tool.photo}`}
                alt="Project Image"
                className="h-20 w-20 mr-4"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-[#ffffff] text-xl lg:text-2xl font-[700] leading-tight">
                  {tool.name}
                </h2>
                <p className="font-[300] text-lg leading-tight tracking-loose md:w-112">
                  {tool.about}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ToolsTab;
