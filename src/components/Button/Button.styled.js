import styled from "styled-components";

export const ButtonWrapper = styled.button`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.color? props.color : props.theme.colors.secondary};
  padding: 20px 30px;
  min-width: 300px;
  font-size: 1rem; /* Corrected from 1.rem */
  margin: 20px;
  border: none;
  border-radius: 10px;
  font-weight: 400; /* Added missing semicolon */

  /* Optional: Add transition for smooth hover effect */
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.purple};
    cursor: pointer;
  }
`;