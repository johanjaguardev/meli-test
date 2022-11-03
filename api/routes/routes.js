// load up our shiny new route for users
const itemRoutes = require("./items");

const appRouter = (app, fs, storePath) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });

  // run our user route module here to complete the wire up
  itemRoutes(app, fs, storePath);
};

// this line is unchanged
module.exports = appRouter;
