import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (request: NextApiRequest) => {
  try {
    await connectDB();
    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (e) {
    return new NextResponse("it doesnt Works sss" + e, { status: 500 });
  }
};
