// Header.js
"use client";

import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import React, { useState } from "react";
import Link from "next/link";
import Social from "./Social";
import Nav from "./Nav";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex items-center justify-between py-8 p-32 w-full relative">
      {/* menu */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle lg:hidden dark:btn-primary hover:dark:bg-white hover:dark:btn-accent"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>

      <div className="w-full hidden lg:flex justify-between ">
        <Nav />
        <div className="flex items-start justify-center gap-8">
          <Social />
          <ThemeToggle />
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          className=" min-w-[70vw]  flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32 bg-dark dark:bg-bgdark rounded-lg z-50 backdrop-blur  gap-5 mt-10"
          id="mobile-menu"
          style={{
            opacity: 1,
            transform:
              "translateX(-50%) translateY(-50%) scale(1) translateZ(0px)",
          }}
        >
          <Nav />
          <div className="flex items-start justify-center gap-8">
            <Social />
            <ThemeToggle />
          </div>
        </div>
      )}

      <Logo />
    </header>
  );
};

export default Header;
