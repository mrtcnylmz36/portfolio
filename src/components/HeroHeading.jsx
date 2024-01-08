"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroHeading = () => {
  return (
    <h1 className="text-black mb-4 sm:mt-8 lg:text-7xl sm:text-5xl text-[28px] lg:leading-normal font-extrabold text-center lg:text-left dark:text-bg">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-gray-600 ">
        Hello, I&apos;m{" "}
      </span>
      <br></br>
      <TypeAnimation
        sequence={[
          "Murat",
          1000,
          "Web Developer",
          1000,
          "Nextjs Developer",
          1000,
          "React Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </h1>
  );
};

export default HeroHeading;
