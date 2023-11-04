import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { request } from "http";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const url = new URL(request.url || "");
  const username = url.searchParams.get("username");

  try {
    await connectDB();
    const posts = await Post.find(username ? { username } : {});

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (e) {
    return new NextResponse("it doesnt Works sss" + e, { status: 500 });
  }
};
export const POST = async (request: Request) => {
  const body = await request.json();

  const newPost = new Post(body);
  try {
    await connectDB();
    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (e) {
    return new NextResponse("it doesnt Works sss" + e, { status: 500 });
  }
};
