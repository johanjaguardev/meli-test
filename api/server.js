//https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require("fs");

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require("./routes/routes.js")(app, fs);

// finally, launch our server on port 3001.
const server = app.listen(3001, () => {
  console.log("listening on port %s...", server.address().port);
});
