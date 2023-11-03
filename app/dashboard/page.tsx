"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const { mode } = useContext(ThemeContext);
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "loading") {
    return <p>loading</p>;
  }

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      throw new Error("Something went wrong" + error);
    }
  };

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
      e.target.reset();
    } catch (err) {
      throw new Error("Something went wrong" + err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="md:h-screen mt-[80px] mg:flex md:items-center md:justify-center ">
        {isLoading ? (
          "loading..."
        ) : (
          <div className="md:h-screen md:ml-32 md:mr-32 md:flex md:justify-center md:gap-72 md:items-center ">
            <div className="">
              {data?.map((post: any) => (
                <div
                  className="flex flex-col md:flex-row  justify-center items-center gap-[50px]"
                  key={post._id}
                >
                  <Image
                    className=" m-5 object-cover "
                    src={post.image}
                    width={200}
                    alt="img"
                    height={100}
                  />
                  <h2 className="text-3xl">{post.title}</h2>
                  <span
                    onClick={() => handleDelete(post._id)}
                    className="text-red-700 font-bold cursor-pointer"
                  >
                    X
                  </span>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center  flex-col "
            >
              <h1 className="text-3xl font-bold m-3 ">Add New Post</h1>
              <input
                className={`m-3 p-2 w-60 outline-none rounded-md border-2 bg-transparent ${
                  mode === "light" ? "border-black" : " border-white"
                }`}
                type="text"
                placeholder="Title"
                required
              />
              <input
                className={`m-3 p-2 w-60 outline-none rounded-md border-2 bg-transparent ${
                  mode === "light" ? "border-black" : " border-white"
                }`}
                type="text"
                placeholder="Desc"
                required
              />
              <input
                className={`m-3 p-2 w-60 outline-none rounded-md border-2 bg-transparent ${
                  mode === "light" ? "border-black" : " border-white"
                }`}
                type="text"
                placeholder="Image"
                required
              />
              <textarea
                className={`m-3 p-2 w-60 outline-none rounded-md border-2 bg-transparent ${
                  mode === "light" ? "border-black" : " border-white"
                }`}
                placeholder="Content"
                rows={3}
                cols={3}
              />
              <button
                className={`w-60 m-3 p-2 rounded-lg ${
                  mode === "light"
                    ? "bg-black text-white"
                    : " bg-white text-black"
                }`}
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
};

export default Dashboard;
