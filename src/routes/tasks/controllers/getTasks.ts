import { Request, Response, NextFunction } from "express";
import { TaskModel } from "../../../models/tasks/tasks.model";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(
      await TaskModel.find().sort({
        completedDate: 1,
        dueDate: 1,
        createdDate: 1,
      })
    );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
