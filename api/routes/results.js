const { debug } = require("console");
const readFile = require("./../utils/readFile");
const mostAppearances = require("./../utils/mostAppearances");

const resultsRoutes = (app, fs, storePath) => {
  // Notice how we can make this 'read' operation much more simple now.
  app.get("/items", (req, res) => {
    readFile(
      (data) => {
        const items = data.items;
        let results = [];
        const itemID = req.params["id"];
        let categories = [...items.map((item) => item.categories)].flat(
          Infinity
        );
        let category = mostAppearances(categories);

        if (typeof req.query.q != "undefined") {
          results = items
            .filter((item) =>
              item.title
                .toLowerCase()
                .includes(req.query.q.toLowerCase().trim())
            )
            .map((item) => ({
              id: item.id,
              title: item.title,
              price: {
                currency: item.price.currency,
                amount: item.price.value.toString().split(".")[0],
                decimal: item.price.value.toString().split(".")[1],
              },
              picture: `${process.env.ASSETS_PATH}/${item.picture}`,
              condition: item.condition,
              free_shipping: item.free_shipping,
            }))
            .slice(0, 4);
        } else if (!/\?.+/.test(req.url)) {
          results = items
            .map((item) => ({
              id: item.id,
              title: item.title,
              price: {
                currency: item.price.currency,
                amount: item.price.value.toString().split(".")[0],
                decimal: item.price.value.toString().split(".")[1],
              },
              picture: `${process.env.ASSETS_PATH}/${item.picture}`,
              condition: item.condition,
              free_shipping: item.free_shipping,
            }))
            .slice(0, 4);
        }
        res.send({
          author: {
            name: process.env.AUTHOR_NAME,
            lastname: process.env.AUTHOR_LASTNAME,
          },
          category: category,
          items: results,
        });
      },
      true,
      storePath,
      "utf8",
      fs
    );
  });
};

module.exports = resultsRoutes;
