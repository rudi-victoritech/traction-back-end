import express from "express";
const apiRouter = express.Router();

// apiRouter.use("/records", record);

export default (app: express.Application) => {
  app.get("/status", (req, res) => {
    res.json({ message: "OK" });
  });

  app
    .route("/api/records")
    .get(async (req, res) => {
      res.json(await getRecords());
    })
    .post(async (req, res) => {
      res.json(await createRecord(req.body));
    });
  app
    .route("/api/records/:recordId")
    .get((req, res) => {})
    .put((req, res) => {})
    .delete((req, res) => {});
  // app.route('/api')
  // .get
  // app.use("/api", apiRouter);
};

async function getRecords() {
  return [];
}
async function createRecord(record) {
  return [];
}
