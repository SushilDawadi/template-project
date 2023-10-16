"use client";
import { useState } from "react";
import Link from "next/link";
import { links } from "@/utils";
import Image from "next/image";


const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="w-full m-auto fixed top-0 left-0  ">
      <div className="md:flex justify-between items-center bg-black py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white ">
          Template
        </div>
        <div>
          <Image
            onClick={() => setisOpen(!isOpen)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            src={isOpen ? "/cross.svg" : "/menu.svg"}
            width={20}
            height={20}
            alt="menu"
          />
          <Image
            className="absolute right-16 top-6 cursor-pointer md:hidden"
            src="/login.svg"
            width={20}
            height={20}
            alt="login"
          />
        </div>
        <div
          className={`flex flex-col md:flex bg-black md:flex-row md:items-center pb-8 md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-16" : "top-[-490px]"
          } `}
        >
          {links.map((link) => (
            <Link
              className="md:ml-8 text-xl my-2 md:my-0 text-white  md:hover:border-b-2  transition-all duration-100 ease-in "
              key={link.id}
              href={link.url}
              onClick={() => setisOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          <button className="bg-white text-black ml-5 px-4 py-2 rounded-md hidden md:block text-xl my-2 md:my-0 ">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
