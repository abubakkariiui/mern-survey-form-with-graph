import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

import surveyRoutes from "./routes/surveyRoutes.js";

dotenv.config();
const app = express(); // main thing
connectDB();

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(express.json()); // to accept json data

app.use("/api/survey", surveyRoutes);

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
