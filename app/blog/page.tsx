import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

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
        <Link key={item.id} href="/blog/test">
          <div className="flex flex-col  md:gap-[60px] md:flex-row items-center">
            <div>
              <Image src="/animal5.jpg" width={200} height={300} alt="animal" />
            </div>
            <div className="">
              <h1 className="text-center text-3xl font-bold">{item.title}</h1>
              <p className="mx-4">{item.body.substring(0, 100)}...</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
