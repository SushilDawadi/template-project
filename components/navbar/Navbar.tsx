"use client";
import { useState } from "react";
import Link from "next/link";
import { links } from "@/utils";
import Image from "next/image";
import DarkMode from "../DarkMode/DarkMode";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const session = useSession();
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="w-full m-auto fixed top-0 left-0  ">
      <div className="md:flex justify-between items-center bg-black py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white ">
          <Link href="/">Template</Link>
        </div>

        <div>
          <Image
            onClick={() => setisOpen(!isOpen)}
            className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
            src={isOpen ? "/x.png" : "/menu.png"}
            width={20}
            height={20}
            alt="menu"
          />
          {session.status === "authenticated" && (
            <Image
              className="absolute right-16 top-6 cursor-pointer lg:hidden"
              src="/logout.png"
              width={20}
              height={20}
              alt="login"
              onClick={() => signOut()}
            />
          )}
        </div>

        <div
          className={` bg-black flex flex-col lg:flex  lg:flex-row lg:items-center pb-8 lg:pb-0 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-16" : "top-[-490px]"
          } `}
        >
          <div className=" md:ml-[40px]">
            <DarkMode />
          </div>
          {links.map((link) => (
            <Link
              className="md:ml-10  text-xl my-2 md:my-2 text-white  lg:hover:border-b-2  transition-all duration-100 ease-in "
              key={link.id}
              href={link.url}
              onClick={() => setisOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button
              className="bg-white text-black ml-5 px-4 py-[6px] rounded-md hidden lg:block  text-xl my-2 md:my-0 "
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
