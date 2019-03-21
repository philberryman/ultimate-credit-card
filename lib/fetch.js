"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkApplicationOnServer = exports.checkApplicationOnServer = function checkApplicationOnServer(selectedCard, userQualificationDetails, userPersonalDetails) {
  return fetch("/check-application", {
    method: "POST", // or 'PUT'
    body: JSON.stringify({
      selectedCard: selectedCard,
      userQualificationDetails: userQualificationDetails,
      userPersonalDetails: userPersonalDetails
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (res) {
    return res.json();
  }).catch(function (error) {
    return console.error("Error:", error);
  });
};