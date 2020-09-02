import { model } from "mongoose";
import { IRecordDocument } from "./records.types";
import RecordSchema from "./records.schema";

export const RecordModel = model<IRecordDocument>("record", RecordSchema);
