import express from "express";
const apiRouter = express.Router();

import recordsRouter from "./records/records.routes";

// apiRouter.use("/records", record);

export default (app: express.Application) => {
  app.get("/status", (req, res) => {
    res.json({ message: "OK" });
  });
  app.use("/api", recordsRouter);
};
