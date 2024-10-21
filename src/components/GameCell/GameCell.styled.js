import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  border-radius: 10px;
  width: 10rem;
  height: 10rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.purple};
  cursor: pointer;
  padding: 2rem;
`;

// Style for the SVG icons based on the theme
export const StyledIcon = styled.div`
  svg {
    fill: ${(props) =>
      props.theme === "light"
        ? "#FFFFFF"
        : "#000000"}; // White for light theme, black for dark theme
    width: 100%;
    height: 100%;
  }
`;
