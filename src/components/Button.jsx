import React from "react";
import Link from "next/link";
import { RxExit } from "react-icons/rx";

const Button = () => {
  return (
    <Link
      target="_blank"
      className="flex items-center gap-1 bg-black w-max px-2 md:px-6 py-1  md:py-2.5 text-[14px] lg:text-[20px] text-bg rounded-lg font-medium border-2 border-black hover:bg-transparent hover:text-black transition-all delay-75 dark:bg-bg dark:border-black dark:text-black dark:border-4 hover:dark:bg-black hover:dark:text-bg hover:dark:border-2 hover:dark:border-bg"
      download
      href="/cv.docx"
    >
      Resume
      <RxExit />
    </Link>
  );
};

export default Button;
