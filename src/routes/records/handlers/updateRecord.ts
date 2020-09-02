import { Request, Response } from "express";
import { RecordModel } from "../../../models/records/records.model";

export default async (req: Request, res: Response) => {
  try {
    delete req.body._id;
    delete req.body.__v;
    Object.assign(res.locals.record, req.body);
    await res.locals.record.save();
    res.sendStatus(200);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
