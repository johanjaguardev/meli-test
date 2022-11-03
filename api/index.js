const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const storePath = "./data/store.json";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require("./routes/routes.js")(app, fs, storePath);

console.log(process.env.AUTHOR_NAME, process.env.AUTHOR_LASTNAME);

const server = app.listen(3000, () => {
  console.log("listening on port %s...", server.address().port);
});
