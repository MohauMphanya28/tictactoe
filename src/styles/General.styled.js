import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.columnBased ? "column" : "row"};
  height: 80vh;
  width: 95vw;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.text};
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  background: transparent;
`;
export const Subitle = styled.h1`
color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.text};
font-size: 24px;
font-weight: 200
background: transparent;
text-align: center;
`;
