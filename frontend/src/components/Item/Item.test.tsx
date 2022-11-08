import { describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Item } from "./Item";
import { IItem } from "../../interfaces/IItem";

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
};
describe("Item", (): void => {
  it("Should Render", (): void => {
    render(<Item item={itemTest} presentation="grid" />);
  });
});
