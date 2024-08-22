import express from "express";
import mongoose from "mongoose";
import connectDatabase from "./db.js";
import rootRouter from "./routes/root.js";

const app = express();

connectDatabase();

app.use(express.json());

app.use("",rootRouter)
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
