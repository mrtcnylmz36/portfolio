import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10  rounded border-t-2 border-black py-5 px-32">
      <nav>
        <Social />
      </nav>
      <aside>
        <p className="text-black dark:text-bg">
          Copyright © 2023 - All right reserved by MRTCODE
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
