import { Router, Request, Response } from "express";
import * as clientController from "../controllers/clientController";
import ClientInput from "../models/client";

const router = Router();

router.get("/", async (req: Request, res: Response, next) => {
  try {
    res.json(await clientController.getAll());
  } catch (err) {
    console.error(`Error while fetching all`, err);
    next(err);
  }
});

router.get("/:id", async (req: Request, res: Response, next) => {
  try {
    const id = Number(req.params.id);
    res.json(await clientController.getById(id));
  } catch (err) {
    console.error(`Error while fetching`, err);
    next(err);
  }
});

router.post("/", async (req: Request, res: Response, next) => {
  try {
    const payload: ClientInput = req.body;
    res.json(await clientController.create(payload));
  } catch (err) {
    console.error(`Error while creating`, err);
    next(err);
  }
});

router.put("/:id", async (req: Request, res: Response, next) => {
  try {
    const id = Number(req.params.id);
    const payload: ClientInput = req.body;
    res.json(await clientController.update(id, payload));
  } catch (err) {
    console.error(`Error while updating `, err);
    next(err);
  }
});

router.delete("/:id", async (req: Request, res: Response, next) => {
  try {
    const id = Number(req.params.id);
    res.json(await clientController.deleteById(id));
  } catch (err) {
    console.error(`Error while deleting `, err);
    next(err);
  }
});

export default router;
