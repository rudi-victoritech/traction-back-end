import express from "express";
const app = express();

import loadRoutes from "./routes";
loadRoutes(app);

export default app;
