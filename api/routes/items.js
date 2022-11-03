const readFile = require("./../utils/readFile");
const writeFile = require("./../utils/writeFile");

const itemRoutes = (app, fs, storePath) => {
  // Notice how we can make this 'read' operation much more simple now.
  app.get("/items", (req, res) => {
    readFile(
      (data) => {
        res.send(data);
      },
      true,
      storePath,
      "utf8",
      fs
    );
  });
};

module.exports = itemRoutes;
