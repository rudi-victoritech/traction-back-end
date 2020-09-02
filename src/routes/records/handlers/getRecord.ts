import { Request, Response, NextFunction } from "express";
import { RecordModel } from "../../../models/records/records.model";

const getRecord = async (
  req: Request,
  res: Response,
  next: NextFunction,
  recordId: number
) => {
  try {
    res.locals.record = await RecordModel.findById(recordId);
    if (!res.locals.record) {
      throw new Error("Record not found");
    }
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const returnRecord = (req: Request, res: Response) => {
  res.json(res.locals.record);
};

export { getRecord, returnRecord };
