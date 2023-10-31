"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [router, session.status]);

  if (session.status === "loading") {
    return <p>loading</p>;
  }

  if (session.status === "authenticated") {
    return <div className="h-[100vh] mt-[80px] ">Dashboard</div>;
  }
};

export default Dashboard;
