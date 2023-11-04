import Post from "@/models/Post";
import connectDB from "@/utils/db";

import { NextResponse } from "next/server";

export const GET = async (
  request: any,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    await connectDB();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (e) {
    return new NextResponse("it doesn't Work" + e, { status: 500 });
  }
};

export const DELETE = async (
  request: any,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    await connectDB();
    await Post.findByIdAndDelete(id);
    return new NextResponse("Post deleted", { status: 200 });
  } catch (e) {}
  return new NextResponse("it doesn't Work", { status: 500 });
};
