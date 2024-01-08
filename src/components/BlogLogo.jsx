import React from "react";
import Link from "next/link";

const BlogLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <Link
        className="flex items-center justify-center rounded-full w-16 h-16  bg-black text-white dark:border-2 dark:border-solid dark:border-light text-2xl font-bold hover:bg-yellow-500 transition-all delay-100"
        href="/"
      >
        MY
      </Link>
    </div>
  );
};

export default BlogLogo;
