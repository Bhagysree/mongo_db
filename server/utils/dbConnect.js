import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    let URL = process.env.MONGO_URL;
    await mongoose.connect(URL);
    console.log(`✅ Mongo DB Connected`);
  } catch (error) {
    console.error(error);
  }
}

connectDB();