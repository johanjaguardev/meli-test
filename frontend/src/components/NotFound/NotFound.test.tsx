import { describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe("NotFound", (): void => {
  it("Should Render", (): void => {
    render(<NotFound />);
  });
});
