import { Document, Model, Schema } from "mongoose";

export interface ITask {
  title: string;
  dueDate: Date;
  completedDate: Date;
  createdDate: Date;
}

export interface ITaskDocument extends ITask, Document {}
export interface ITaskModel extends Model<ITaskDocument> {}
