"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
export default function Header() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > 5) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 max-w-[1100px]  mx-auto z-50 transition-opacity duration-300 ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center py-2 mt-5 md:ml-52 text-center border rounded-full border-zinc-400 border-opacity-40  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  "
      >
        <Image
          width={50}
          height={50}
          alt="Gambar"
          src="/avatar.jpeg"
          className="rounded-full"
        />
        <div className="md:ml-56 md:mr-36 ml-16 mr-12">
          <span className="font-bold mr-2">@Harsena Argretya</span>
        </div>
        <Image
          width={50}
          height={50}
          alt="Gambar"
          src="/avatar.jpeg"
          className="rounded-full"
        />
      </a>
    </div>
  );
}
