import { readFile } from "fs/promises";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import UserSchema from "./models/UserSchema.js";
import JobSchema from "./models/JobSchema.js";
dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await UserSchema.findOne({ email: "johnsmith@yahoo.com" });
  const jsonJobs = JSON.parse(
    await readFile(new URL("./utils/mockData.json", import.meta.url))
  );
  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });
  await JobSchema.deleteMany({ createdBy: user._id });
  await JobSchema.create(jobs);
  console.log("success");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
