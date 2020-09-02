import { Document, Model, Schema } from "mongoose";

export interface IRecord {
  startDate: Date;
  endDate: Date;
  description?: string;
  project?: Schema.Types.ObjectId; // TODO: IProject
}

export interface IRecordDocument extends IRecord, Document {
  updateNoUpsert: (this: IRecordDocument) => Promise<void>;
  createOrReturn: (this: IRecordDocument) => Promise<Document[]>;
}
export interface IRecordModel extends Model<IRecordDocument> {
  updateNoUpsert: (
    this: IRecordModel,
    {
      startDate,
      endDate,
      description,
    }: { startDate: Date; endDate: Date; description: string }
  ) => Promise<IRecordDocument>;
  createOrReturn: (
    this: IRecordModel,
    {
      _id,
      startDate,
      endDate,
      description,
    }: { _id: string; startDate: Date; endDate: Date; description: string }
  ) => Promise<IRecordDocument>;
}
