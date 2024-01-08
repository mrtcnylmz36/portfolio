import React from "react";
import Link from "next/link";

const Categories = ({ category, href }) => {
  return (
    <Link
      href={href ? `/blog?category=${href}` : `/blog`}
      className="bg-black text-white font-bold tracking-widest p-3 rounded-md hover:bg-blue-700 "
    >
      {category}
    </Link>
  );
};

export default Categories;
