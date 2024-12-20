import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  border-radius: 2rem;
  width: 10rem;
  height: 10rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.purple};
  cursor: pointer;
  padding: 2rem;

  svg.iconColor {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;
