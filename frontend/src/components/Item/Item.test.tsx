import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Item } from "./Item";
import { IItem } from "../../interfaces/IItem";
import { MemoryRouter } from "react-router-dom";

const itemTest: IItem = {
  id: "1",
  title: "test title",
  picture: "mock.jpg",
  price: {
    currency: "USD",
    amount: 100,
    decimal: 10,
  },
  condition: "new",
  free_shipping: false,
  description: "not provided",
  sold_quantity: 10,
  categories: ["mockup"],
  location: "Bogota",
};
describe("Item", (): void => {
  it("Should Render", (): void => {
    render(<Item item={itemTest} presentation="grid" />, {
      wrapper: MemoryRouter,
    });
  });
});
