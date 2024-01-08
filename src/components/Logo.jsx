import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="absolute right-14 lg:left-[50%] top-4 lg:top-2 translate-x-[-50%] w-max ">
      <div className="flex flex-col items-center justify-center mt-2">
        <Link
          className="flex items-center justify-center rounded-full w-16 h-16  bg-black text-white dark:border-2 dark:border-solid dark:border-light text-2xl font-bold hover:bg-yellow-500 transition-all delay-100"
          href="/"
        >
          MY
        </Link>
      </div>
    </div>
  );
};

export default Logo;
