"use client";
import React from "react";
import Link from "next/link";
import { links } from "@/utils";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex  justify-between items-center  mt-2 h-[100px] ">
      <Link className=" font-bold text-[22px]" href="/">
        Template
      </Link>
      <div className="flex items-center gap-[20px] max-sm:hidden">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
