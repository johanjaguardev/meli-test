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
        const categories = [...items.map((item) => item.categories)].flat(
          Infinity
        );
        const category = mostAppearances(categories);

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
              location: item.location,
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
              location: item.location,
            }))
            .slice(0, 4);
        }
        res.send({
          author: {
            name: req.headers.authorname,
            lastname: req.headers.authorlastname,
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
