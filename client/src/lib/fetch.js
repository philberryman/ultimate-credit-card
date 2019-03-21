export const checkApplicationOnServer = (
  selectedCard,
  userQualificationDetails,
  userPersonalDetails
) =>
  fetch("/check-application", {
    method: "POST", // or 'PUT'
    body: JSON.stringify({
      selectedCard,
      userQualificationDetails,
      userPersonalDetails,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error));
