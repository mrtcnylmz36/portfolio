import React, { useState, useEffect } from "react";

const EditorCategories = ({ categories, setCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  //   const [categories, setCategories] = useState([]);

  function handleClick(e) {
    const categoryName = e.target.innerText;

    if (!categories.includes(categoryName)) {
      setCategories((prev) => [...prev, categoryName]);
      setSelectedCategory(categoryName);
    } else {
      setCategories((prev) => prev.filter((item) => item !== categoryName));
      setSelectedCategory("");
    }
  }

  function getButtonStyle(categoryName) {
    if (selectedCategory === categoryName) {
      return "bg-black text-white font-bold tracking-widest p-3 rounded-md hover:bg-blue-700 border-4 border-red-700";
    } else {
      return "bg-black text-white font-bold tracking-widest p-3 rounded-md hover:bg-blue-700";
    }
  }

  useEffect(() => {
    console.log("Updated categories:", categories);
  }, [categories]);

  return (
    <div className="flex gap-10 w-full justify-center">
      <button
        className={`bg-black text-white font-bold tracking-widest p-3 rounded-md hover:bg-blue-700 ${
          categories.includes("HTML") ? "border-4 border-red-700" : ""
        }`}
        onClick={handleClick}
      >
        HTML
      </button>
      <button
        className={`bg-black text-white font-bold tracking-widest p-3 rounded-md hover:bg-blue-700 ${
          categories.includes("CSS") ? "border-4 border-red-700" : ""
        }`}
        onClick={handleClick}
      >
        CSS
      </button>
      <button
        className={`bg-black text-white font-bold tracking-widest p-3 rounded-md hover:bg-blue-700 ${
          categories.includes("JAVASCRİPT") ? "border-4 border-red-700" : ""
        }`}
        onClick={handleClick}
      >
        JAVASCRİPT
      </button>
      <button
        className={`bg-black text-white font-bold tracking-widest p-3 rounded-md hover:bg-blue-700 ${
          categories.includes("REACT") ? "border-4 border-red-700" : ""
        }`}
        onClick={handleClick}
      >
        REACT
      </button>
      <button
        className={`bg-black text-white font-bold tracking-widest p-3 rounded-md hover:bg-blue-700 ${
          categories.includes("NEXTJS") ? "border-4 border-red-700" : ""
        }`}
        onClick={handleClick}
      >
        NEXTJS
      </button>
    </div>
  );
};

export default EditorCategories;
