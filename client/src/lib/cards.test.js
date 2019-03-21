import { getAvailableCards, confirmSelection } from "./cards";
import { testPeople } from "./appData.js";

describe("Tests each of provided names are offered correct cards", function() {
  test("Elizabeth", () => {
    const result = getAvailableCards(testPeople.elizabeth);
    const resultCards = result.map(card => card.name);
    const expected = ["Student Life Card", "Anywhere card", "Liquid card"];
    expect(resultCards).toEqual(expected);
  });
  test("Ollie", () => {
    const result = getAvailableCards(testPeople.ollie);
    const resultCards = result.map(card => card.name);
    const expected = ["Anywhere card", "Liquid card"];
    expect(resultCards).toEqual(expected);
  });
  test("Trevor", () => {
    const result = getAvailableCards(testPeople.trevor);
    const resultCards = result.map(card => card.name);
    const expected = ["Anywhere card"];
    expect(resultCards).toEqual(expected);
  });
});

describe("Server side check that user fits criteria for card", function() {
  test("details do not qualify", () => {
    const selectedCard = {
      name: "Student Life Card",
      apr: 18.9,
      balanceTransferOfferMonths: 0,
      purchaseOfferMonths: 6,
      creditAvailable: 1200,
      criteria: [[Object]],
    };
    const userQualificationDetails = {
      employmentStatus: "employed",
      annualIncome: 10000,
    };
    const personalDetails = {};
    const result = confirmSelection(
      userQualificationDetails,
      selectedCard,
      personalDetails
    );
    const expected = {
      status: "Declined",
      card: {
        name: "Student Life Card",
        apr: 18.9,
        balanceTransferOfferMonths: 0,
        purchaseOfferMonths: 6,
        creditAvailable: 1200,
        criteria: [[Object]],
      },
      person: {},
    };
    expect(result).toEqual(expected);
  });
  test("details fit to qualify", () => {
    const selectedCard = {
      name: "Student Life Card",
      apr: 18.9,
      balanceTransferOfferMonths: 0,
      purchaseOfferMonths: 6,
      creditAvailable: 1200,
      criteria: [[Object]],
    };
    const userQualificationDetails = {
      employmentStatus: "student",
      annualIncome: 10000,
    };
    const personalDetails = {};
    const result = confirmSelection(
      userQualificationDetails,
      selectedCard,
      personalDetails
    );
    const expected = {
      status: "Verified",
      card: {
        name: "Student Life Card",
        apr: 18.9,
        balanceTransferOfferMonths: 0,
        purchaseOfferMonths: 6,
        creditAvailable: 1200,
        criteria: [[Object]],
      },
      person: {},
    };
    expect(result).toEqual(expected);
  });
});
