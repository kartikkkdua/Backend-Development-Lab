

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const itemsRouter = require("./routes/items.routes");

const app = express();


app.use(cors());
app.use(express.json());           


app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Items API is running" });
});
app.use("/api/items", itemsRouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});



  // 1) Error: Cannot find module 'express'
  //    beacause of : Dependencies not installed.
  //    Fixed by : npm install
  // 2) Cannot GET /
  //    Cause: No route defined for root.
  //    Fix: Add a health route as below.
  // 4) req.body is undefined
  //    Cause: Missing JSON body parser.
  //  Fix: app.use(express.json());
 