import React from "react";

const DarkjMode = () => {
  const mode = "light";
  return (
    <div className="w-[50px] h-[24px] p-2 flex  items-center justify-between cursor-pointer border-[1.5px]  rounded-full relative  ">
      <div className="text-[15px]">🌙</div>
      <div className="text-[15px]">☀️</div>
      <div
        className="w-[17px] h-[17px] absolute bg-white rounded-full"
        style={mode === "light" ? { left: "9px" } : { right: "1px" }}
      />
    </div>
  );
};

export default DarkjMode;
