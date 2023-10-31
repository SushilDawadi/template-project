import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className="mt-[80px] md:mt-[100px] md:ml-[80px] flex flex-col gap-[50px]    ">
      {data.map((item: any) => (
        <Link key={item._id} href={`/blog/${item._id}`}>
          <div className="flex flex-col  md:gap-[60px] md:flex-row items-center">
            <div>
              <Image src={item.image} width={300} height={300} alt="image" />
            </div>
            <div>
              <h1 className="text-center text-3xl font-bold">{item.title}</h1>
              <p className="mx-4">{item.desc.substring(0, 220)}...</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
