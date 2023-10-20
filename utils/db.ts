import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB || "");
  } catch (error) {
    throw new Error("Error connecting to database" + error);
  }
};
export default connectDB;
