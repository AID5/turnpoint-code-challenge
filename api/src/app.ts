import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import pool from "../config";

dotenv.config();
import indexRouter from "./routes/index";

const app = express();

app.use("/", indexRouter);

export { app };
