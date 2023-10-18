import Button from "@/components/button/Button";
import React from "react";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

interface Props {
  params: {
    category: string;
  };
}

const getData = (category: string) => {
  const data = items[category];
  if (!data) return notFound();

  return data;
};

const Category = ({ params }: Props) => {
  const data = getData(params.category);
  return (
    <div className="flex flex-col md:gap-[40px]">
      <h1 className="text-4xl font-bold flex md:justify-start md:ml-[90px] justify-center">
        {params.category}
      </h1>

      {data.map((item) => (
        <div
          key={item.id}
          className="mt-[40px] md:ml-[90px] flex flex-col lg:flex-row md:justify-between md:gap-[10px] m-7   "
        >
          <div className="flex flex-col items-start justify-center gap-[20px]">
            <h2 className="text-5xl font-bold">{item.title}</h2>
            <p className="text-xl">{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div>
            <Image
              src={item.image}
              width={900}
              height={700}
              className="object-contain shadow-2xl  relative z-[-2] "
              alt="illustration1"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
