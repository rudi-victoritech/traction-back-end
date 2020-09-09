import express from "express";
const apiRouter = express.Router();

import tasksRouter from "./tasks/tasks.routes";

// apiRouter.use("/records", record);

export default (app: express.Application) => {
  app.get("/status", (req, res) => {
    res.json({ message: "OK" });
  });
  app.use("/api", tasksRouter);
};
