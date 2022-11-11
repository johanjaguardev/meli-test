import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import App from "./App";
import { render } from "./utils/test-utils";

describe("SearchBar", (): void => {
  it("Should Render", (): void => {
    render(<App />, {
      wrapper: MemoryRouter,
    });
  });
});
