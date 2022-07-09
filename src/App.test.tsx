import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders hello world", () => {
  render(<App />);
  const linkElement = screen.getByText("Hellodddddd World!!!");
  expect(linkElement).toBeInTheDocument();
});
