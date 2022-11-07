import { describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", (): void => {
  it("Should Render", (): void => {
    render(<Home />);
  });
});
