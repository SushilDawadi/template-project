"use client";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
interface ButtonProps {
  text: string;
  url: string;
}
const Button = ({ url, text }: ButtonProps) => {
  const { mode } = useContext(ThemeContext);
  return (
    <Link href={url}>
      <button
        className={` ${
          mode === "dark" ? "bg-white text-black" : "bg-black text-white"
        } ml-4 px-2 md:px-4 py-2 rounded-md md:w-44 w-32  text-base md:text-xl my-2 md:my-0 `}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
