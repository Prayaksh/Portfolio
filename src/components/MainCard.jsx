import { div } from "framer-motion/client";
import React from "react";

const MainCard = () => {
  return (
    <div className="flex justify-center lg:inline-block h-fit overflow-hidden m-2">
      <div className="bg-[#FF69B4] rounded-xl flex flex-col items-center justify-evenly m-4 text-center w-[95vw] md:h-[70vh]  lg:w-[350px] lg:h-[620px] xl:w-[380px] ">
        <img
          src="\assets\icons\radha krishna.jpg"
          alt="Profile Photo"
          className=" h-48 w-52 m-4 rounded-xl md:w-65 md:h-70 md:overflow-hidden"
          id="MainPhoto"
        />
        <h2
          id="MainName"
          className="text-4xl font-[900] font-archivo m-2 lg:text-5xl"
        >
          Prayaksh Upadhyay
        </h2>
        <h3
          id="MainTagLine"
          className="w-56 sm:w-60 md:w-72 text-lg font-archivo font-[400] leading-none tracking-tight whitespace-pre-wrap text-center max-w-prose my-2 text-[#000000] lg:text-xl"
        >
          I ship efficient code fast.
        </h3>
        <div className="flex justify-around w-52 my-4 xl:w-68">
          <a id="InstagramProfile" href="https://github.com/Prayaksh">
            <img
              src="\assets\icons\GitHub.svg"
              alt="Github"
              className="h-8 w-8 xl:h-10 xl:w-10"
            />
          </a>
          <a id="LinkedINProfile" href="https://www.linkedin.com/in/prayaksh/">
            <img
              src="\assets\icons\linkedIN.svg"
              alt="Dribble"
              className="h-8 w-8 xl:h-10 xl:w-10"
            />
          </a>
          <a href="https://x.com/Prayaksh_u">
            <img
              src="\assets\icons\twitter.svg"
              alt="Twitter"
              className="h-8 w-8 xl:h-10 xl:w-10"
            />
          </a>
          <a href="mailto:prayakshu@gmail.com">
            <img
              src="\assets\icons\mail.svg"
              alt="Mail"
              className="h-8 w-8 xl:h-10 xl:w-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
