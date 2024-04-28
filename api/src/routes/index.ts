import express from "express";
import clientsRouter from "./clients";
import fundingSourceRouter from "./fundingSource";

const router = express.Router();

router.use("/clients", clientsRouter);
router.use("/fundingSource", fundingSourceRouter);

export default router;
