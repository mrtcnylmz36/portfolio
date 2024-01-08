import AboutMe from "@/components/AboutMe";
import TimeLine from "@/components/TimeLine";
import React from "react";

export const metadata = {
  title: "About",
  description: "About",
};

const About = () => {
  return (
    <div>
      <AboutMe />
      <TimeLine />
    </div>
  );
};

export default About;
