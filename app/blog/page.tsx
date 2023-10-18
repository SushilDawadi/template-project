import React from "react";
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
  return (
    <div className="mt-[80px] md:mt-[100px] md:ml-[80px] flex flex-col gap-[50px] md:h-screen   ">
      <Link href="/blog/test">
        <div className="flex flex-col  md:gap-[60px] md:flex-row items-center">
          <div>
            <Image src="/animal5.jpg" width={200} height={300} alt="animal" />
          </div>
          <div className="">
            <h1 className="text-center text-3xl font-bold">
              Lorem ipsum dolor sit, amet consectetur
            </h1>
            <p className="mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              animi fuga reprehenderit amet <br />
              cumque nemo voluptatem harum earum unde magni.
            </p>
          </div>
        </div>
      </Link>
      <Link href="/blog/test">
        <div className="flex flex-col  md:gap-[60px] md:flex-row items-center">
          <div>
            <Image
              src="/animal1.jpg"
              width={200}
              className="object-contain "
              height={200}
              alt="animal"
            />
          </div>
          <div className="">
            <h1 className="text-center text-3xl font-bold">
              Lorem ipsum dolor sit, amet consectetur
            </h1>
            <p className="mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              animi fuga reprehenderit amet <br />
              cumque nemo voluptatem harum earum unde magni.
            </p>
          </div>
        </div>
      </Link>
      <Link href="/blog/test">
        <div className="flex flex-col  md:gap-[60px] md:flex-row items-center">
          <div>
            <Image src="/animal2.jpg" width={200} height={300} alt="animal" />
          </div>
          <div className="">
            <h1 className="text-center text-3xl font-bold">
              Lorem ipsum dolor sit, amet consectetur
            </h1>
            <p className="mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              animi fuga reprehenderit amet <br />
              cumque nemo voluptatem harum earum unde magni.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
