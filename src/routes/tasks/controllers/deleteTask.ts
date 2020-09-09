import { Request, Response, NextFunction } from "express";
import { TaskModel } from "../../../models/tasks/tasks.model";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    await TaskModel.deleteOne({ _id: res.locals.task._id });
    res.sendStatus(200);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
