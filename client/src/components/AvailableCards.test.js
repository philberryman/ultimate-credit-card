import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent, wait, within } from "react-testing-library";
import { App } from "./App";

describe("Tests form ", function() {
  test("Employment (student) and income can be entered and Student Life Card is in results", async () => {
    let { getByLabelText, getByText } = render(<App />);
    const select = getByLabelText(/Employment/i);
    fireEvent.change(select, { target: { value: "student" } });
    expect(select.value).toBe("student");
    const input = getByLabelText(/Annual Income/i);
    fireEvent.change(input, { target: { value: "10000" } });
    const submit = getByText(/Submit/i);
    await wait(async () => {
      fireEvent.click(submit);
      const card = getByText(/Student Life Card/i).parentElement;
      const selectCard = within(card).getByText("Select This Card");
      await wait(async () => {
        fireEvent.click(selectCard);
        const header = getByText(
          /Just a few more details away from all that credit/i
        );
        const selectedCard = getByText(/Student Life Card/i);
        const formName = getByLabelText(/Name/i);
        const formEmail = getByLabelText(/Email/i);
        const formDoB = getByLabelText(/Date of Birth/i);
        const formPostCode = getByLabelText(/Post Code/i);
        const formHouseNumber = getByLabelText(/House Number/i);
        fireEvent.change(formName, { target: { value: "Phil B" } });
        fireEvent.change(formEmail, { target: { value: "phil@gmail.com" } });
        fireEvent.change(formDoB, { target: { value: "20/05/1980" } });
        fireEvent.change(formPostCode, { target: { value: "NW6 4LY" } });
        fireEvent.change(formHouseNumber, { target: { value: "5" } });
        fireEvent.click(formPostCode);
        fireEvent.click(formEmail);
        const formSubmit = getByText(/Submit/i);

        await wait(async () => {
          fireEvent.click(formSubmit);
        });
      });
    });
  });
});
