import { useState } from "react";
import React from "react";
import { projectData } from "../data/Database";
import Heading from "./Heading";

const ProjectTab = ({ data = projectData }) => {
  if (!data || data.length === 0) {
    return <p>working on projects...</p>;
  }
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      <Heading str1={"Recent"} str2={"Projects"} />
      {data.map((project, i) => {
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
              <img src="assets\icons\arrow-topright.svg" alt="Arrow" />
            </div>
            <div className="flex align-center">
              <img
                src={`${project.photo}`}
                alt="Project Image"
                className="h-20 w-20 mr-4"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-[#ffffff] text-xl lg:text-2xl font-[700] leading-tight">
                  {project.name}
                </h2>
                <p className="font-[300] text-lg leading-tight tracking-loose md:w-112">
                  {project.about}
                </p>
                <div>
                  {project.techStackData.map((tech) => {
                    return (
                      <div
                        className="inline-flex items-center gap-1 rounded-2xl border border-[#ff00ff] hover:bg-[#121212f2] p-1 md:px-2 m-1 "
                        key={tech.id}
                      >
                        <img
                          src={`${tech.icon}`}
                          alt={`${tech.name}`}
                          className="h-4 w-4"
                        />
                        <p className="hidden lg:block">{tech.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectTab;
