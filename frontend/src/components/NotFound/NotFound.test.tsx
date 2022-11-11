import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { NotFound } from "./NotFound";
import { MemoryRouter } from "react-router-dom";

describe("NotFound", (): void => {
  it("Should Render", (): void => {
    render(<NotFound />, { wrapper: MemoryRouter });
  });
});
