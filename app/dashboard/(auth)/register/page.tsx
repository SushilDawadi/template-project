"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const { mode } = useContext(ThemeContext);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    // e means event and target is the form and 0 is the first input
    //first target of the form is the first input
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account created successfully");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="h-[85vh] mt-[80px] flex items-center justify-center flex-col">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center"
      >
        <input
          type="text"
          placeholder="username"
          required
          className={`p-4 w-72 my-2 outline-none border-2 bg-transparent rounded-md ${
            mode === "light" ? "border-black" : "border-white"
          } `}
        />
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
          Register
        </button>
      </form>
      {error && "Something went wrong!!"}
      <Link
        className="flex items-center justify-center underline text-base"
        href="/dashboard/login"
      >
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
