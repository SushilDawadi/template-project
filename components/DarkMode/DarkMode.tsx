"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const DarkjMode = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      onClick={toggle}
      className="w-[50px] h-[24px] p-2 flex  items-center justify-between cursor-pointer border-[1.5px]  rounded-full relative  "
    >
      <div className="text-[15px]">🌙</div>
      <div className="text-[15px]">☀️</div>
      <div
        className="w-[17px] h-[17px] absolute bg-white rounded-full"
        style={mode === "dark" ? { left: "9px" } : { right: "1px" }}
      />
    </div>
  );
};

export default DarkjMode;
