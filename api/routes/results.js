const { debug } = require("console");
const readFile = require("./../utils/readFile");

const resultsRoutes = (app, fs, storePath) => {
  // Notice how we can make this 'read' operation much more simple now.
  app.get("/items", (req, res) => {
    readFile(
      (data) => {
        const items = data.items;
        let categories = [];
        let results = [];
        const itemID = req.params["id"];
        if (typeof req.query.q != "undefined") {
          categories = [
            ...categories,
            ...items
              .filter((item) =>
                item.title
                  .toLowerCase()
                  .includes(req.query.q.toLowerCase().trim())
              )
              .map((item) => item.categories),
          ].flat(Infinity);
          categories = [...new Set(categories)];

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
            }));
        } else if (!/\?.+/.test(req.url)) {
          results = items.map((item) => ({
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
          }));
        }
        res.send({
          author: {
            name: process.env.AUTHOR_NAME,
            lastname: process.env.AUTHOR_LASTNAME,
          },
          categories: categories,
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
