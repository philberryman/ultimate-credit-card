"use strict";

var _cards = require("./cards");

var _appData = require("./appData.js");

describe("Tests each of provided names are offered correct cards", function () {
  test("Elizabeth", function () {
    var result = (0, _cards.getAvailableCards)(_appData.testPeople.elizabeth);
    var resultCards = result.map(function (card) {
      return card.name;
    });
    var expected = ["Student Life Card", "Anywhere card", "Liquid card"];
    expect(resultCards).toEqual(expected);
  });
  test("Ollie", function () {
    var result = (0, _cards.getAvailableCards)(_appData.testPeople.ollie);
    var resultCards = result.map(function (card) {
      return card.name;
    });
    var expected = ["Anywhere card", "Liquid card"];
    expect(resultCards).toEqual(expected);
  });
  test("Trevor", function () {
    var result = (0, _cards.getAvailableCards)(_appData.testPeople.trevor);
    var resultCards = result.map(function (card) {
      return card.name;
    });
    var expected = ["Anywhere card"];
    expect(resultCards).toEqual(expected);
  });
});

describe("Server side check that user fits criteria for card", function () {
  test("details do not qualify", function () {
    var selectedCard = {
      name: "Student Life Card",
      apr: 18.9,
      balanceTransferOfferMonths: 0,
      purchaseOfferMonths: 6,
      creditAvailable: 1200,
      criteria: [[Object]]
    };
    var userQualificationDetails = {
      employmentStatus: "employed",
      annualIncome: 10000
    };
    var personalDetails = {};
    var result = (0, _cards.confirmSelection)(userQualificationDetails, selectedCard, personalDetails);
    var expected = {
      status: "Declined",
      card: {
        name: "Student Life Card",
        apr: 18.9,
        balanceTransferOfferMonths: 0,
        purchaseOfferMonths: 6,
        creditAvailable: 1200,
        criteria: [[Object]]
      },
      person: {}
    };
    expect(result).toEqual(expected);
  });
  test("details fit to qualify", function () {
    var selectedCard = {
      name: "Student Life Card",
      apr: 18.9,
      balanceTransferOfferMonths: 0,
      purchaseOfferMonths: 6,
      creditAvailable: 1200,
      criteria: [[Object]]
    };
    var userQualificationDetails = {
      employmentStatus: "student",
      annualIncome: 10000
    };
    var personalDetails = {};
    var result = (0, _cards.confirmSelection)(userQualificationDetails, selectedCard, personalDetails);
    var expected = {
      status: "Verified",
      card: {
        name: "Student Life Card",
        apr: 18.9,
        balanceTransferOfferMonths: 0,
        purchaseOfferMonths: 6,
        creditAvailable: 1200,
        criteria: [[Object]]
      },
      person: {}
    };
    expect(result).toEqual(expected);
  });
});