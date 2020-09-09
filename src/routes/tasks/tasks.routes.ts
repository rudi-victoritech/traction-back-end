import express from "express";
const tasksRouter = express.Router();

import createTask from "./controllers/createTask";
import getTasks from "./controllers/getTasks";
import { returnTask, getTask } from "./controllers/getTask";
import deleteTask from "./controllers/deleteTask";
import updateTask from "./controllers/updateTask";

tasksRouter.route("/tasks").get(getTasks).post(createTask);

tasksRouter
  .route("/tasks/:recordId")
  .get(returnTask)
  .put(updateTask)
  .delete(deleteTask);

tasksRouter.param("recordId", getTask);

export default tasksRouter;
