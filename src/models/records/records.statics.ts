import { IRecordDocument, IRecordModel, IRecord } from "./records.types";
export async function createOrReturn(
  this: IRecordModel,
  record: IRecordDocument
): Promise<IRecordDocument> {
  const dbRecord = await this.findOne({ _id: record._id });
  if (dbRecord) {
    return dbRecord;
  } else {
    return this.create(record);
  }
}
