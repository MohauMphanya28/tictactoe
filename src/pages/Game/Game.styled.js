import styled from "styled-components";

export const GameBoardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const TurnIndicator = styled.div`
  height: 300px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: 5px 10px ${(props) => props.theme.colors.purple};
  border-radius: 10px;
  margin: 50px 0px 30px 0px;
  font-weight: 600;
`;


