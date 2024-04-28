import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", indexRouter);

export { app };
