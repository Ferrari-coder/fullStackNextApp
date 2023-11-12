import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-[50px]">
      <div>©2023 Feranmi. All rights reserved.</div>
      <div className="flex items-center gap-[10px]">
        <Image
          src="/1.png"
          width={15}
          height={15}
          className="cursor-pointer opacity-60"
          alt="Feranmi Dev Facebook Account"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className="cursor-pointer opacity-60"
          alt="Feranmi Dev"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className="cursor-pointer opacity-60"
          alt="Feranmi Dev"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className="cursor-pointer opacity-60"
          alt="Feranmi Dev"
        />
      </div>
    </div>
  );
};

export default Footer;
