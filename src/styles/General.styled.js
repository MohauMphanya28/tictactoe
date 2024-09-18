import styled from "styled-components";

export const Title = styled.h1`
color: ${(props) => props.isDarkMode ? "white" : "black"};
font-size: 3rem;
font-family: 'Courier New', Courier, monospace;
background: transparent;
`