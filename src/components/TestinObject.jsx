import React, { useState } from "react";
import { motion } from "framer-motion";

const TestinObject = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", height: "200px" }}>
      {/* Hoverable Object */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)} // Trigger hover start
        onMouseLeave={() => setIsHovered(false)} // Trigger hover end
        style={{
          width: "100px",
          height: "100px",
          background: "lightblue",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Hover Me
      </motion.div>

      {/* Animated Object */}
      <motion.div
        className="absolute"
        style={{
          width: "50px",
          height: "50px",
          background: "tomato",
          borderRadius: "50%",
          top: "150px", // Initial vertical position
        }}
        animate={{
          x: isHovered ? 200 : 0, // Move horizontally (x-axis)
          y: isHovered ? 50 : 0, // Move vertically (y-axis)
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      />
    </div>
  );
};

export default TestinObject;
