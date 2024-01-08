"use client";
import React from "react";
import Image from "next/image";
import HeroHeading from "@/components/HeroHeading";
import Button from "@/components/Button";
import Link from "next/link";
import HireMe from "@/components/HireMe";

const Home = () => {
  return (
    <div className="flex items-center justify-between flex-col lg:flex-row">
      <Image
        src="/home.webp"
        alt="home"
        width={400}
        height={400}
        className="flex-1"
      />
      <div className="flex-1 ">
        <HeroHeading />
        <p className="my-4 font-normal text-[14px] md:text-[18px] text-center lg:text-left dark:text-bg">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>

        <div className="flex items-center gap-5 mb-[102px] justify-center lg:justify-normal ">
          <Button />
          <Link
            href={"/contact"}
            className="font-normal text-black text-[16px] md:text-xl border-b-2 border-black leading-[20px] dark:text-bg dark:border-bg"
          >
            Contact
          </Link>
        </div>
      </div>
      <HireMe />
    </div>
  );
};

export default Home;
