import React from "react";
import Link from "next/link";

const Navlink = ({ href, name, isActive }) => {
  return (
    <Link className="relative group  font-medium" href={href}>
      {name}
      <span
        className={
          isActive
            ? " inline-block h-[1px]  bg-white lg:bg-black absolute left-0 -bottom-0.5 dark:bg-black lg:dark:bg-white w-full"
            : "inline-block h-[1px]  bg-white lg:bg-black dark:bg-black lg:dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0 "
        }
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default Navlink;
