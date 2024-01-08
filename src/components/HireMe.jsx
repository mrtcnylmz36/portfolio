import React from "react";

const HireMe = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0  overflow-hidden  md:left-auto md:bottom-0 md:absolute z-20">
      <div className="w-32 lg:w-48 h-auto flex items-center justify-center relative ">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto fill-dark dark:fill-white dark:fill-light animate-spin-slow
        duration-200"
        >
          <path
            d="
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0"
            id="path-circle"
            fill="none"
          />
           {" "}
          <text>
               {" "}
            <textPath
              href="#path-circle"
              className="text-[24px] text-black dark:text-bg"
            >
              Front-End Devloper. Nextjs Developer. Web Developer. NextJs
              Developer.    {" "}
            </textPath>
             {" "}
          </text>
        </svg>
        <a
          className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md border border-solid bg-black rounded-full text-white text-[12px] w-16 h-16 lg:w-24 lg:h-24 lg:text-[16px] font-semibold hover:bg-white hover:text-black hover:cursor-pointer  "
          href="mailto:someone@example.com"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default HireMe;
