import { Request, Response } from "express";
import { RecordModel } from "../../../models/records/records.model";

export default async (req: Request, res: Response) => {
  try {
    await RecordModel.deleteOne({ _id: res.locals.record._id });
    res.sendStatus(200);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
