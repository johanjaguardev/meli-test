import { describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", (): void => {
  it("Should Render", (): void => {
    render(<SearchBar />);
  });
});
