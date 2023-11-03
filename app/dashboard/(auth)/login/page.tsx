"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Login = () => {
  const { mode } = useContext(ThemeContext);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/dashboard");
    }
  }, [router, session.status]);
  if (session.status === "loading") {
    return <p>loading...</p>;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };
  return (
    <div className="mt-[80px] h-screen">
      <form
        onSubmit={handleSubmit}
        className=" h-[85vh] flex flex-col items-center justify-center"
      >
        <input
          type="text"
          placeholder="email"
          required
          className={`p-4 w-72 my-2 outline-none border-2 bg-transparent  rounded-md ${
            mode === "light" ? "border-black" : "border-white"
          } `}
        />
        <input
          type="password"
          placeholder="password"
          required
          className={`p-4 w-72 my-2 outline-none border-2 bg-transparent  rounded-md ${
            mode === "light" ? "border-black" : "border-white"
          } `}
        />
        <button
          className={`w-72 p-3 m-3 rounded-md text-lg font-sans font-semibold ${
            mode === "light" ? "bg-black text-white" : "bg-white text-black"
          } `}
        >
          Login
        </button>
        <button className="underline" onClick={() => signIn("google")}>
          Login with Google
        </button>
        <Link href="/dashboard/register" className="underline">
          Register?
        </Link>
      </form>
    </div>
  );
};

export default Login;
