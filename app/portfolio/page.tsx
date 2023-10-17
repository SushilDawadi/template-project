import React from "react";
import Image from "next/image";
import illustration from "../../public/illustration.jpg";
import website from "../../public/website.png";
import application from "../../public/application.jpg";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className=" mt-[30px] w-full m-auto flex flex-col gap-8 ">
      <div className="flex md:ml-[90px] justify-center items-center  md:justify-start">
        <h2 className="text-3xl font-semibold ">Choose a gallery</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <Link
          href="/portfolio/illustrations"
          className="hover:scale-105  transition-all ease-in-out duration-500"
        >
          <div className=" relative z-[-2] ">
            <Image
              src={illustration}
              className=" w-[350px] h-[450px] object-cover border-x-[8px]  border-y-[8px] border-black   "
              alt="illustration"
            />
            <h2 className="ml-2 font-semibold text-3xl absolute bottom-[10px] left-[10px] text-white  ">
              Illustration
            </h2>
          </div>
        </Link>
        <Link
          href="/portfolio/websites"
          className="hover:scale-105 transition-all ease-in-out duration-500"
        >
          <div className="relative z-[-2]   ">
            <Image
              src={website}
              className=" w-[350px] h-[450px] object-cover border-x-[8px]  border-y-[8px] border-black     "
              alt="website"
            />
            <h2 className="ml-2 font-semibold text-3xl absolute bottom-[10px] left-[10px]  text-white  ">
              Websites
            </h2>
          </div>
        </Link>
        <Link
          href="/portfolio/application"
          className="hover:scale-105 transition-all ease-in-out duration-500"
        >
          <div className="relative z-[-2] ">
            <Image
              src={application}
              className="w-[350px] h-[450px] object-cover border-x-[8px]  border-y-[8px] border-black   "
              alt="application"
            />
            <h2 className="ml-2 font-semibold text-3xl absolute bottom-[12px] left-[10px]  text-white  ">
              Application
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
