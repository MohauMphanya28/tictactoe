import React from "react";
import { Container } from "./Home.styled";
import { Subitle, Title } from "../../styles/General.styled";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button"

const Home = () => {
  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Subitle>Play with your friends and find out who's the <br />Tic Tac Toe master!</Subitle>
      <Button>Play Now</Button>
    </Container>
  );
};

export default Home;
