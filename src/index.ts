import express, { json } from "express";

const app = express();
const port = 3030;

app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, Rudi" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
