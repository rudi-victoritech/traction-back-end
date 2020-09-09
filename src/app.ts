import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { dbConnect } from "./db";
import loadRoutes from "./routes/routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
loadRoutes(app);
dbConnect();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`GLOBAL ERROR HANDLER:`);
  console.error(err);
  res.status(500).json({ message: err.message });
});

export default app;
