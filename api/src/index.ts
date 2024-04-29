import express, { Application, Request, Response } from "express";
import { app } from "./app";
import dbInit from "./db/init";

const port = 8080;
dbInit();

// Body parsing Middleware
app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: `Welcome to the turnpoint API!` });
});

try {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
} catch (error) {
  console.log(`Error occurred: ${error}`);
}
