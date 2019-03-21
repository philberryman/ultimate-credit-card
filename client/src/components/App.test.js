import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent, wait } from "react-testing-library";
import { App } from "./App";

describe("Tests form ", function() {
  test("renders form with Select and Input", async () => {
    const { getByLabelText, getByText } = render(<App />);
    const select = getByLabelText(/Employment/i);
    const input = getByLabelText(/Annual Income/i);
  });
  test("Employment (student) and income can be entered and Student Life Card is in results", async () => {
    const { getByLabelText, getByText } = render(<App />);
    const select = getByLabelText(/Employment/i);
    fireEvent.change(select, { target: { value: "student" } });
    expect(select.value).toBe("student");

    const input = getByLabelText(/Annual Income/i);
    fireEvent.change(input, { target: { value: "10000" } });
    const submit = getByText(/Submit/i);
    await wait(() => {
      fireEvent.click(submit);
      const error = getByText(/Student Life Card/i);
    });
  });
});
