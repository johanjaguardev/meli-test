const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Saludos desde Express");
});

app.get("/hola", function (req, res) {
  res.send("Hola desde Express");
});

app.post("/hola", function (req, res) {
  res.send("Post Saludos desde Express");
});

app.listen(3000, () => {
  console.log("El servidor esta inicializado en el puerto 3000");
});
