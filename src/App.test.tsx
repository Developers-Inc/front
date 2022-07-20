import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";

import App from "./App";

jest.mock("axios");
const mockAxiosGet = axios.get as jest.MockedFunction<typeof axios.get>;

test("Renders hello world", async () => {
  mockAxiosGet.mockResolvedValue({
    data: "Hello World!!!",
  });

  render(<App />);

  expect(await screen.findByText("Hello World!!!")).toBeInTheDocument();
});
