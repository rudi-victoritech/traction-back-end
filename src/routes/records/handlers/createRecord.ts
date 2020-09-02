import { Request, Response } from "express";
import { RecordModel } from "../../../models/records/records.model";

export default async (req: Request, res: Response) => {
  try {
    res.json(await RecordModel.create(req.body));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
