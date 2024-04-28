import { Router, Request, Response } from "express";
import * as fundingSourceController from "../controllers/fundingSourceController";
import FundingSourceInput from "../models/fundingSource";

const router = Router();

router.get("/", async (req: Request, res: Response, next) => {
  try {
    res.json(await fundingSourceController.getAll());
  } catch (err) {
    console.error(`Error while fetching all`, err);
    next(err);
  }
});

router.get("/:id", async (req: Request, res: Response, next) => {
  try {
    const id = Number(req.params.id);
    res.json(await fundingSourceController.getById(id));
  } catch (err) {
    console.error(`Error while fetching`, err);
    next(err);
  }
});

router.put("/:id", async (req: Request, res: Response, next) => {
  try {
    const payload: FundingSourceInput = req.body;
    res.json(await fundingSourceController.create(payload));
  } catch (err) {
    console.error(`Error while creating`, err);
    next(err);
  }
});

router.put("/:id", async (req: Request, res: Response, next) => {
  try {
    const id = Number(req.params.id);
    const payload: FundingSourceInput = req.body;
    res.json(await fundingSourceController.update(id, payload));
  } catch (err) {
    console.error(`Error while updating `, err);
    next(err);
  }
});

router.delete("/:id", async (req: Request, res: Response, next) => {
  try {
    const id = Number(req.params.id);
    res.json(await fundingSourceController.deleteById(id));
  } catch (err) {
    console.error(`Error while deleting `, err);
    next(err);
  }
});

export default router;
