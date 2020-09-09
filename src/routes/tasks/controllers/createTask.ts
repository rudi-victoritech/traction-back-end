import { Request, Response, NextFunction } from "express";
import { TaskModel } from "../../../models/tasks/tasks.model";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await TaskModel.create(req.body));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
