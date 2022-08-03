import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import App from "./App";

jest.mock("axios");
const mockedAxiosGet = axios.get as jest.MockedFunction<typeof axios.get>;

test("renders hello world", async () => {
  mockedAxiosGet.mockResolvedValue({ data: "Hello world!" });

  render(<App />);
  const linkElement = await screen.findByText("Hello world!");
  expect(linkElement).toBeInTheDocument();
});
