import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();

  await connectDB();
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("User has been Created", { status: 201 });
  } catch (err) {
    return new NextResponse("Something Happens" + err, { status: 500 });
  }
};
