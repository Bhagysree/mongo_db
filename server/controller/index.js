import express from "express";
import userModel from "../../models/User.js";

const router = express.Router();

// Get all users
router.get("/getall", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;