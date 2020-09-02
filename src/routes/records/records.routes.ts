import express from "express";
const recordsRouter = express.Router();

import createRecord from "./handlers/createRecord";
import getRecords from "./handlers/getRecords";
import { returnRecord, getRecord } from "./handlers/getRecord";
import deleteRecord from "./handlers/deleteRecord";
import updateRecord from "./handlers/updateRecord";

recordsRouter.route("/records").get(getRecords).post(createRecord);

recordsRouter
  .route("/records/:recordId")
  .get(returnRecord)
  .put(updateRecord)
  .delete(deleteRecord);

recordsRouter.param("recordId", getRecord);

export default recordsRouter;
