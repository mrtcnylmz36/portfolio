import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

const social = [
  {
    name: "Linekdin",
    href: "https://www.linkedin.com/in/muratcan-yilmaz-811556270/",
    icon: (
      <ImLinkedin className="w-8 h-8 text-[#0A65C0] transition ease-in-out hover:-translate-y-2" />
    ),
  },
  {
    name: "Github",
    href: "www.example.com",
    icon: (
      <FaGithub className="w-8 h-8 transition ease-in-out hover:-translate-y-2 text-black dark:text-black lg:dark:text-white" />
    ),
  },
];

const Social = () => {
  return (
    <div className="flex items-center gap-8">
      {social.map((item) => (
        <a key={item.name} href={item.href}>
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
