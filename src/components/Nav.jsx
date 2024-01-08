"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navlink from "./Navlink";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  console.log("path", pathname);
  return (
    <nav className="flex items-center justify-center flex-col lg:flex-row gap-5 lg:gap-8 text-white  lg:text-black text-lg tracking-widest lg:dark:text-white dark:text-black ">
      {navLinks.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Navlink
            key={item.name}
            name={item.name}
            href={item.href}
            isActive={isActive}
          />
        );
      })}
    </nav>
  );
};

export default Nav;
