import React from "react";
import { techStackData } from "../data/Database";
import { div } from "framer-motion/client";
const TechStack = ({ id }) => {
  const selectedID = techStackData.find((item) => item.id === id);
  return (
    <div>
      {selectedID ? (
        <div className="flex">
          <img src={`${selectedID.icon}`} alt="" className="h-4 w-4" />
          <h5 className="">{selectedID.name}</h5>
        </div>
      ) : (
        <p>No dataset found !!</p>
      )}
    </div>
  );
};

export default TechStack;
