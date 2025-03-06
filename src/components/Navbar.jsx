import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Experience from "./Experience";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [navItem, setNavItem] = useState("");
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleClick = (e, navItemName) => {
    e.preventDefault();
    const rect = e.target.getBoundingClientRect();
    setPosition({
      top: rect.bottom + window.scrollY,
      left: (rect.left + rect.right) / 2 + window.scrollX,
    });
    setIsHovered(true);
    setNavItem(navItemName);
  };

  return (
    <div className="flex justify-center">
      <div className="inline-flex block bg-[#232323] min-w-70 p-2 justify-around rounded-xl m-4 md:m-8">
        {/* Navigation Links */}
        <Link to={"/"}>
          <div
            id="Home"
            className=""
            onMouseEnter={(e) => handleClick(e, "Home")}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="src/assets/icons/home.svg"
              alt="Home"
              className="h-6 w-6"
            />
          </div>
        </Link>
        <Link to={"/project"}>
          <div
            id="Project"
            className=""
            onMouseEnter={(e) => handleClick(e, "Project")}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="src/assets/icons/folder.svg"
              alt="Project"
              className="h-6 w-6"
            />
          </div>
        </Link>
        <Link to={"/experience"}>
          <div
            id="Experience"
            className=""
            onMouseEnter={(e) => handleClick(e, "Experience")}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="src/assets/icons/briefcase.svg"
              alt="Experience"
              className="h-6 w-6"
            />
          </div>
        </Link>
        <Link to={"/tools"}>
          <div
            id="Tools"
            className=""
            onMouseEnter={(e) => handleClick(e, "Tools")}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="src/assets/icons/wrench.svg"
              alt="Tools"
              className="h-6 w-6"
            />
          </div>
        </Link>
        <Link to={"/thoughts"}>
          <div
            id="Thoughts"
            className=""
            onMouseEnter={(e) => handleClick(e, "Thoughts")}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="src/assets/icons/notes.svg"
              alt="Thoughts"
              className="h-6 w-6"
            />
          </div>
        </Link>

        <motion.div
          className="absolute  bg-[#121212f2] text-[#ffffff] text-xs px-2 py-1 rounded-md w-[72px] text-center"
          style={{ top: position.top, left: position.left - 36 }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 10 : 0,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          {navItem}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
