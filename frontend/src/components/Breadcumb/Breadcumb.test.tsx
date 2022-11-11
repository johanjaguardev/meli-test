import { describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Breadcumb } from "./Breadcumb";

describe("Breadcumb", (): void => {
  it("Should Render", (): void => {
    render(<Breadcumb />);
  });
});
