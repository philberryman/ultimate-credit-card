import styled from "styled-components";
import posed from "react-pose";

export const Wrapper = styled.div`
  display: flex;
  max-width: 940px;
  width: 100%
  margin: 0;
  padding: 0;
  background: #3b89df;
`;

export const Content = styled.div`
  display: inline-block;
  max-width: 940px;
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

export const Header = styled.h1`
  font-family: "Anton", sans-serif;
  font-size: 2rem;
  letter-spacing: 0.1em
  color: white;
  text-align: center;
  padding:10px;
`;

export const FormGrid = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  flex-wrap: wrap;
  margin: 30px 0;
`;

export const FormContent = styled.div`
  margin: 0 30px;
  width: 250px;
  color: white;
  font-family: "Overpass", sans-serif;
`;

export const FormQuestions = styled.div`
  margin: 0 30px;
  width: 250px;
  color: #ffffff;
`;

export const StyledForm = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 0;
`;

export const StyledField = styled.input`
  background-color: ffffff;
  padding: 4px;
  margin: 0px;
  background: ${props => (props.error ? "#df513b" : "#ffffff")};
  color: ${props => (props.error ? "#ffffff" : "#000000")};
`;

export const Input = styled.div`
  grid-column: 2 / 3;
  margin-top: 2px;
  width: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const Select = styled.select`
  margin-top: 5px;
  background: ${props => (props.error ? "#df513b" : "#ffffff")};
`;

export const Label = styled.label`
  grid-column: 1 / 2;
  font-size: 0.7rem;
  padding: 3px
  height: 1fpx;
  margin: 0 20px 0 0;
`;

export const FormError = styled.div`
  font-family: "Overpass", sans-serif;
  color: #dfa33b;
  font-size: 0.7rem;
  font-weight: bold;
  height: 25px;
`;

export const Button = styled.button`
  width: 50px;
  grid-column: 2/3;
  margin: 10px 0;
  padding: 4px;
`;

export const BenefitsList = styled.ul`
  margin: 20px;
  list-style: square;
`;

export const PoseCardContainer = posed.div({
  enter: { staggerChildren: 150 },
});

export const PoseCard = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
});

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  padding: 0;
`;

export const Card = styled.li`
  list-style: none;
  height: 250px;
  width: 180px;
  border: 2px solid #ffffff;
  background: ${props => (props.results ? "#94ac5a" : "#6992cb")};
  padding: 25px;
  margin: 10px;
  padding: 10px;
`;

export const CardName = styled.div`
  font-size: 1rem;
  weight: 200;
  background: #ffffff;
  color: #6992cb;
  padding: 5px;
  margin-bottom: 15px;
`;

export const CardDetails = styled.div`
  text-align: center;
`;

export const CardFact = styled.div`
  display: flex;
  line-height: 1.4rem;
  font-size: 0.8rem;
  background: #ffffff;
  margin-bottom: 5px;
  padding: 3px;
  font-weight: 100;
  font-family: "Overpass", sans-serif;
`;

export const CardLabel = styled.div`
  width: 140px;
`;

export const CardData = styled.div`
  width: 50px;
`;

export const MarketingHeader = styled.h1`
  padding: 0;
  margin: 0 0 20px 0;
  text-align: center;
`;
