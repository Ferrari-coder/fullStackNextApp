"use client";

import React from "react";
import Link from "next/link";
import { links } from "@/constants";

const Navbar = () => {
  return (
    <div className="h-[100px] flex justify-between items-center">
      <Link href="/" className="font-bold">
        Feranmii
      </Link>
      <div className="flex items-center gap-5">
        {links.map((data) => (
          <Link key={data.id} href={data.url}>
            {data.title}
          </Link>
        ))}
        <button
        className="p-[5px] border-none bg-[#53c28b] text-white cursor-pointer rounded-[3px]"
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
