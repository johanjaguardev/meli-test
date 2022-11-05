import { describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Results } from "./Results";

describe("Results", (): void => {
  it("Should Render", (): void => {
    render(<Results />);
  });
});
