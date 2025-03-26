import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import messageRoutes from "./routes/messageRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// ✅ OR Allow Specific Frontend Origin
app.use(cors({
  origin: "http://localhost:5173"
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Middleware
app.use(express.json());

// Simple API Route
app.get("/", (req, res) => {
  res.send("Hello, Backend is Running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});



app.use("/api", messageRoutes);
