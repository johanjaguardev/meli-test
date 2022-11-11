import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Results } from "./Results";
import { MemoryRouter } from "react-router-dom";

describe("Results", (): void => {
  it("Should Render", (): void => {
    render(<Results />, {
      wrapper: MemoryRouter,
    });
  });
});
