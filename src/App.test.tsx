import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders hello world", () => {
  render(<App />);
  const linkElement = screen.getByText("Hello World!");
  expect(linkElement).toBeInTheDocument();
});
