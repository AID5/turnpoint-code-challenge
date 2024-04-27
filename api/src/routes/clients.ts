import express from "express";
import clientsController from "../controllers/clients-controller";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Define routes
router.get("/", async function (req, res, next) {
  try {
    res.json(await clientsController.getClients());
  } catch (err) {
    console.error(`Error while searching programming languages `, err);
    next(err);
  }
});

export default router;
