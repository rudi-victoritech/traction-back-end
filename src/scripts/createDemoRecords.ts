import { RecordModel } from "../models/records/records.model";
import { connect, disconnect } from "../db";

(async () => {
  connect();

  const records = [
    {
      startDate: new Date(),
      endDate: new Date(),
      description: "Aaaa",
    },
    {
      startDate: new Date(),
      endDate: new Date(),
      description: "Bbbb",
    },
    {
      startDate: new Date(),
      endDate: new Date(),
      description: "Cccc",
    },
  ];

  try {
    for (const record of records) {
      await RecordModel.create(record);
      console.log(`Created record with description ${record.description}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();
