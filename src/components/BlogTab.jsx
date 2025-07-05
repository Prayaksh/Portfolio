import React from "react";
import { useState } from "react";
import { blogData } from "../data/Database";
import Heading from "./Heading";

const BlogTab = ({ data = blogData }) => {
  if (!data || data.length === 0) {
    return <p>No Blogs.</p>;
  }
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const maxLength = 200;
  return (
    <div>
      <Heading str1={"Design"} str2={"Thoughts"} />
      {data.map((blog, i) => {
        return (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-full text-left text-[#b0b0b0a9] font-archivo-300 flex flex-col justify-center p-4 relative lg:w-[620px] my-2  ${
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
              <img src="\assets\icons\arrow-topright.svg" alt="Arrow" />
            </div>
            <h2 className="text-[#ffffff] text-2xl font-[700] leading-tight md:w-128">
              {blog.title}
            </h2>
            <p className="font-[300] text-lg leading-tight tracking-loose mt-2 mb-4 md:w-128">
              {blog.paragraph.length > maxLength
                ? blog.paragraph.slice(0, maxLength) + "..."
                : blog.paragraph}
            </p>
            <div className="flex justify-between text-lg font-[500]">
              <p>{blog.date}</p>
              <p>{blog.readTime}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogTab;
