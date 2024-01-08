"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const isDashboard = pathname.toString().startsWith("/dashboard");
  const isLogin = pathname.toString().startsWith("/login");

  if (isDashboard) {
    return (
      <div className="min-h-screen bg-bg dark:bg-dark flex w-full h-full">
        {children}
      </div>
    );
  }
  if (isLogin) {
    return (
      <div className="min-h-screen flex  flex-col w-full h-full bg-bg dark:bg-dark ">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg dark:bg-dark flex flex-col w-full h-full">
      <Header />
      <main className="px-32 flex-grow ">{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
