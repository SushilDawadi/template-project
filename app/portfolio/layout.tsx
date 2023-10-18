import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="mt-[90px]   flex justify-center items-center  flex-col">
        <h1 className="md:text-[100px] text-[70px] text-center font-bold ">
          Our Works
        </h1>
      </div>
      {children}
    </div>
  );
};

export default layout;
