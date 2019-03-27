import React from "react";

import { FormGrid } from "../styles/styles";

export const Decision = ({ decision }) => {
  if (decision) {
    return (
      <FormGrid>
        {decision.status === "Verified" && (
          <>
            Congratulations - your application for {decision.card.name} has been
            accepted.
            <br />
            <br />
            You will shortly receive your new cards in the post.
          </>
        )}

        {decision.status === "Declined" && (
          <>
            Unfortunately your application was not successful.
            <br />
            <br />
            Better luck next time.
          </>
        )}
      </FormGrid>
    );
  } else {
    return null;
  }
};
