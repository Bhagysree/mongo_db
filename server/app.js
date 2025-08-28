import express from "express";
import userRouter from "./controllers/user/index.js"; // Make sure path matches

// Database connection
import "./utils/dbConnect.js";

const app = express();
const PORT = 5002;

// Middleware
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello from status code" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

// Users Route
app.use("/api/users", userRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT ${PORT}`);
});