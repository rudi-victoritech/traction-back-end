import { Schema } from "mongoose";
import { createOrReturn } from "./records.statics";
import { updateNoUpsert } from "./records.methods";

const RecordSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: String,
  project: {
    type: Schema.Types.ObjectId,
    ref: "projects",
  },
});

RecordSchema.statics.createOrReturn = createOrReturn;
RecordSchema.methods.updateNoUpsert = updateNoUpsert;

export default RecordSchema;
