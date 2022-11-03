const readFile = require("./../utils/readFile");
const getItemById = () => {};
const itemRoutes = (app, fs, storePath) => {
  // Notice how we can make this 'read' operation much more simple now.
  app.get(["/items/:id", "/items/:id/description"], (req, res) => {
    readFile(
      (data) => {
        const items = data.items;
        const itemID = req.params["id"];

        res.send(
          items
            .filter((item) => item.id === itemID)
            .map((item) => ({
              author: {
                name: process.env.AUTHOR_NAME,
                lastname: process.env.AUTHOR_LASTNAME,
              },
              item: {
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
                sold_quantity: item.sold_quantity,
                description:
                  item.description !== ""
                    ? item.description
                    : "El vendedor no incluyó una descripción del producto",
              },
            }))
        );
      },
      true,
      storePath,
      "utf8",
      fs
    );
  });
};

module.exports = itemRoutes;
