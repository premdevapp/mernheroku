const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
require("./database");
app.use(bodyParser.json());
app.use(cors());
// API
const users = require("/api/users");
app.use("/api/users", users);
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
