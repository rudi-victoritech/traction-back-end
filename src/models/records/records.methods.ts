import { Document } from "mongoose";
import { IRecordDocument } from "./records.types";

export async function updateNoUpsert(this: IRecordDocument): Promise<void> {
  await this.model("record").findOneAndUpdate(
    { _id: this._id },
    {
      $set: this,
    },
    {
      upsert: false,
    }
  );
}
