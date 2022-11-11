import { describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Detail } from "./Detail";

describe("Detail", (): void => {
  it("Should Render", (): void => {
    render(<Detail />);
  });
});
