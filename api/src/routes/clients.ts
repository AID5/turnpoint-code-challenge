import express from "express";
import clientsController from "../controllers/clients-controller";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Define routes
router.get("/", async (req, res, next) => {
  try {
    res.json(await clientsController.getClients());
  } catch (err) {
    console.error(`Error while searching programming languages `, err);
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    res.json(await clientsController.getClient(id));
  } catch (err) {
    console.error(`Error while searching programming languages `, err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const [
      firstName,
      lastName,
      DOB,
      primaryLanguage,
      secondaryLanguage,
      primaryFundingSourceId,
    ] = req.body;
    res.json(
      await clientsController.createClient(
        firstName,
        lastName,
        DOB,
        primaryLanguage,
        secondaryLanguage,
        primaryFundingSourceId
      )
    );
  } catch (err) {
    console.error(`Error while searching programming languages `, err);
    next(err);
  }
});

export default router;
