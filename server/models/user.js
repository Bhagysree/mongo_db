import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  phone:    { type: String, required: true, unique: true },
  address:  { type: String, default: "Not Provided" },
  age:      { type: Number, default: 18 }
}, { timestamps: true });

const userModel = mongoose.model("User", userSchema);

export default userModel;