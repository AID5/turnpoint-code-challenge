import express from "express";
import clientsRouter from "./client";
import fundingSourceRouter from "./fundingSource";

const router = express.Router();

router.use("/client", clientsRouter);
router.use("/fundingSource", fundingSourceRouter);

export default router;
