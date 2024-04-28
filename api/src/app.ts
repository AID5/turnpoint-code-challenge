import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import pool from "../config";

dotenv.config();
import indexRouter from "./routes/index";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

export { app };
