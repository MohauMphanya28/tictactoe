import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 95vw;
  background-color: ${(props) => props.theme.colors.primary};

  text-align: center;
`;
