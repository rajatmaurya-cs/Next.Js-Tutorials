import dotenv from "dotenv";

import express from "express";

import cors from "cors";

import Upload from './model/Upload.js'



import connectDB from "./utils/db.js";

// Always load env vars from the server folder regardless of where node is started.
dotenv.config({ path: new URL(".env", import.meta.url).pathname });

const app = express();

app.use(express.json());

const corsOptions = {
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));



app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running 🚀",
  });
});

const ensureDb = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("MongoDB connection failed ❌:", error?.message || error);
    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
};


app.get("/api/images",ensureDb, async (req, res, next) => {
  try {
    console.log("Entered in getImage Extra Backend function");

    const images = await Upload.find().sort({ createdAt: -1 });

    console.log(images)

    return res.status(200).json({
      success: true,
      images,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});





app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

const port = process.env.PORT || 2000;

export default app;

const isRunDirectly =
  import.meta.url === new URL(process.argv[1], "file:").href;

if (isRunDirectly) {
  connectDB()
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is running on PORT: ${port}`);
      });
    })
    .catch((error) => {
      console.error("Failed to start server due to DB error:", error?.message || error);
      process.exit(1);
    });
}