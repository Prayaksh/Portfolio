import MainCard from "../components/MainCard";
import Navbar from "../components/Navbar";
/* import TestinObject from "../components/TestinObject"; */
import BlogTab from "../components/BlogTab";
import Experience from "../components/Experience";
import ProjectTab from "../components/ProjectTab";
import ToolsTab from "../components/ToolsTab";
import Heading from "../components/Heading";
import DetailsForm from "../components/DetailsForm";

import React from "react";

const Home = () => {
  return (
    <div className="flex-col overflow-hidden">
      <Navbar />
      <div className="lg:flex lg:justify-center">
        <MainCard />
        <div>
          <Heading str1={"Software"} str2={"Engineer"} />
          <BlogTab />
          <Experience />
          <ProjectTab />
          <ToolsTab />
          <DetailsForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
