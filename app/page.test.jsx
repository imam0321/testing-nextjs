import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import HomePage from "./page";

test("home page renders correctly", () => {
  render(<HomePage />);
  expect(screen.getByText("Testing & Debugging - Home")).toBeDefined();
});
