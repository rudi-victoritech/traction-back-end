import Mongoose from "mongoose";
// import { RecordModel } from "./records/record.model";

let database: Mongoose.Connection;

export const connect = () => {
  const uri = `mongodb://localhost/time-block`;

  if (database) {
    return;
  }

  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;

  database.once("open", () => {
    console.log("Connected to database");
  });
  database.once("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
