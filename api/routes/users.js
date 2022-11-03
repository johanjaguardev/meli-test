const userRoutes = (app, fs) => {
  // variables
  const dataPath = "./data/users.json";

  // READ
  // Notice how we can make this 'read' operation much more simple now.
  app.get("/users", (req, res) => {
    readFile((data) => {
      res.send(data);
    }, true);
  });

  // CREATE
  app.post("/users", (req, res) => {
    readFile((data) => {
      // Note: this needs to be more robust for production use.
      // e.g. use a UUID or some kind of GUID for a unique ID value.
      const newUserId = Date.now().toString();
      req.body.id = parseFloat(newUserId);
      // add the new user
      data[newUserId] = req.body;
      writeFile(JSON.stringify(data, null, 2), () => {
        res
          .status(200)
          .send(
            `New user ${req.body.name} has been added, data: ${JSON.stringify(
              data,
              null,
              2
            )}`
          );
      });
    }, true);
  });

  // UPDATE
  app.put("/users/:id", (req, res) => {
    readFile((data) => {
      // add the new user
      const userId = req.params["id"];
      data[userId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`users id:${userId} updated`);
      });
    }, true);
  });

  // DELETE
  app.delete("/users/:id", (req, res) => {
    readFile((data) => {
      // add the new user
      const userId = req.params["id"];
      delete data[userId];

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`users id:${userId} removed`);
      });
    }, true);
  });
};

module.exports = userRoutes;
