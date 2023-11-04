import Image from "next/image";
import React from "react";

interface BlogPostProps {
  params: {
    id: string;
  };
}
async function getData(id: string) {
  const response = await fetch(`http://127.0.0.1:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}
const BlogPost = async ({ params }: BlogPostProps) => {
  const data = await getData(params.id);

  return (
    <>
      <div className="mt-[90px] lg:h-screen ">
        <div className="m-5 md:flex md:justify-evenly   ">
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-3xl font-bold ">{data.title}</h2>
            <p className="text-xl text-justify md:w-[650px]">{data.desc}</p>
            <div className="flex gap-2 items-center m-3">
              <Image
                src={data.image}
                className="rounded-full"
                width={60}
                height={100}
                alt="icon"
              />
              <p>{data.username}</p>
            </div>
          </div>
          <div>
            <Image src={data.image} width={1000} height={600} alt="mountain" />
          </div>
        </div>
        <div className="m-5">
          <p className="text-xl">{data.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
