"1use client";
import React from "react";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

const BlogCard = ({ slug, title, description, file, category, createdAt }) => {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="relative block overflow-hidden rounded-lg border border-gray-600 p-4 sm:p-6 lg:p-8 m-6 w-2/5"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-gray-600 bg-gray-800 "></span>

      <div className="hidden sm:block sm:shrink-0 overflow-hidden ">
        <img
          alt="Paul Clapton"
          src={`https://omhuahwcnzfjnfvzvdxz.supabase.co/storage/v1/object/public/blogimages/public/images/${file}`}
          className="w-full h-auto rounded-lg object-cover shadow-sm hover:scale-125 hover:translate transition-all delay-75"
        />
      </div>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {title}
          </h3>

          <div className="flex gap-1">
            {category.map((item, i) => (
              <p key={i} className="mt-1 text-xs font-medium text-gray-600">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="max-w-[40ch] text-sm text-gray-500">
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            suppressHydrationWarning
          />
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Published</dt>
          <dd className="text-xs text-gray-500" suppressHydrationWarning>
            {formatter.format(Date.parse(createdAt))}
          </dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Reading time</dt>
          <dd className="text-xs text-gray-500">3 minute</dd>
        </div>
      </dl>
    </Link>
  );
};

export default BlogCard;
