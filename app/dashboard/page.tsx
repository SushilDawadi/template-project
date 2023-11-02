"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import Button from "@/components/button/Button";
const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );
  console.log(data);
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "loading") {
    return <p>loading</p>;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session?.data?.user?.name,
        }),
      });
      mutate();
    } catch (err) {
      throw new Error("Something went wrong" + err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className=" mt-[80px] flex items-center justify-center ">
        <div className="h-[85vh]  flex justify-between gap-72 items-center ">
          <div>
            {isLoading
              ? "...loading"
              : data?.map((post: any) => (
                  <div
                    className="flex flex-row justify-center items-center gap-[50px]"
                    key={post._id}
                  >
                    <Image
                      src={post.image}
                      width={250}
                      alt="img"
                      height={150}
                    />
                    <h2 className="text-3xl">{post.title}</h2>
                    <span className="text-red-700 font-bold">X</span>
                  </div>
                ))}
          </div>

          <form onSubmit={handleSubmit} className="flex  flex-col ">
            <h1 className="text-3xl font-bold m-3 ">Add New Post</h1>
            <input
              className="m-3 p-2 w-60 outline-none rounded-md border-2 border-black  "
              type="text"
              placeholder="Title"
              required
            />
            <input
              className="m-3 p-2 w-60 outline-none rounded-md border-2 border-black  "
              type="text"
              placeholder="Desc"
              required
            />
            <input
              className="m-3 p-2 w-60 outline-none rounded-md border-2 border-black  "
              type="text"
              placeholder="Image"
              required
            />
            <textarea
              className="m-3 p-2 w-60 outline-none rounded-md border-2 border-black  "
              placeholder="Content"
              rows={3}
              cols={3}
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;
