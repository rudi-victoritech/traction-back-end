import { Request, Response, NextFunction } from "express";
import { TaskModel } from "../../../models/tasks/tasks.model";

const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
  recordId: number
) => {
  try {
    res.locals.task = await TaskModel.findById(recordId);
    if (!res.locals.task) {
      throw new Error("Record not found");
    }
    next();
  } catch (err) {
    // res.status(400).json({ message: err.message });
    next(err); // make use of global error handler
  }
};

const returnTask = (req: Request, res: Response, next: NextFunction) => {
  res.json(res.locals.task);
};

export { getTask, returnTask };
