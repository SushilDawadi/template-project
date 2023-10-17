import Button from "@/components/button/Button";
import React from "react";
import Image from "next/image";

interface CategoryProps {
  params: {
    category: string;
  };
}
const Category = ({ params }: CategoryProps) => {
  console.log(params);
  return (
    <div className="flex flex-col md:gap-[40px]">
      <h1 className="text-4xl font-bold flex md:justify-start md:ml-[90px] justify-center">
        {params.category}
      </h1>
      <div className="mt-[40px] md:ml-[90px] flex flex-col md:flex-row md:justify-between md:gap-[10px] m-7   ">
        <div className="flex flex-col items-start justify-center gap-[20px]">
          <h2 className="text-5xl font-bold">Creative Portfolio</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            molestias magni reprehenderit aperiam,
            <br /> qui officiis quo quos a doloremque ex quia quaerat debitis
            perferendis non!
          </p>
          <Button url="#" text="See More" />
        </div>
        <div>
          <Image
            src="/illustration1.jpg"
            width={900}
            height={700}
            className="object-contain shadow-2xl  relative z-[-2] "
            alt="illustration1"
          />
        </div>
      </div>
      <div className=" md:ml-[90px] flex flex-col md:flex-row-reverse md:justify-between md:gap-[20px] m-7   ">
        <div className="flex flex-col  items-start justify-center gap-[20px]">
          <h2 className="text-5xl font-bold">Minimal Single Product</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            molestias magni reprehenderit aperiam,
            <br /> qui officiis quo quos a doloremque ex quia quaerat debitis
            perferendis non!
          </p>
          <Button url="#" text="See More" />
        </div>
        <div>
          <Image
            src="/illustration 2.jpg"
            width={900}
            height={700}
            className="object-contain shadow-2xl  relative z-[-2] "
            alt="illustration2"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
