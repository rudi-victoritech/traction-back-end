import { Request, Response, NextFunction } from "express";
import { TaskModel } from "../../../models/tasks/tasks.model";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    delete req.body._id;
    delete req.body.__v;
    Object.assign(res.locals.task, req.body);
    await res.locals.task.save();
    res.sendStatus(200);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
