import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter";
import { describe, expect, test } from "vitest";


describe('counter', () => {
  render(<Counter />);
  test('Initializing the counter with 0', () => {
    expect(screen.getAllByRole('heading', { level: 2, name: "0" })).toBeDefined();
  })
  test("Increment count by 1", () => {
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole('heading', { level: 2, name: "1" })).toBeDefined();
  })
})