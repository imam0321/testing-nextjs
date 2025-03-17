import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import BlogPage from "./page";


test('Test the blog dynamic router', () => {
  render(<BlogPage params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading", { level: 1, name: "Slug: Test" })).toBeDefined();
})