import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/harsena-argretya/",
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      link: "https://github.com/Anezz12",
      label: "Github",
      Icon: FaGithub,
    },
    {
      link: "https://instagram.com/argretya",
      label: "Instagram",
      Icon: FaInstagram,
    },
  ];
  return (
    // <div className="flex flex-col items-center">
    <div className="flex  justify-center gap-5 text-white mt-5">
      {socials.map((social, index) => {
        const Icon = social.Icon;
        return (
          <Link href={social.link} key={index} aria-label={social.label}>
            <Icon className="w-7 h-10 hover:scale-125 transition-all" />
          </Link>
        );
      })}
    </div>
    // </div>
  );
}
