import express from "express";
import bodyParser from "body-parser";

import { connect } from "./db";
import loadRoutes from "./routes/routes";

const app = express();
app.use(bodyParser.json());
loadRoutes(app);
connect();

export default app;
