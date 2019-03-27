import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import { Decision } from "./Decision";

const decision = {
  status: "Verified",
  card: { name: "Liquid Card" },
};

test("Renders decision component", () => {
  const { getByText } = render(<Decision decision={decision} />);
  const pageContent = getByText(/Congratulation/i);
  expect(pageContent).toHaveTextContent(
    "Congratulations - your application for Liquid Card has been accepted.You will shortly receive your new cards in the post."
  );
});
