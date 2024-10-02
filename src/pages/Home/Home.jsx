import React from "react";
import { Container, Subitle, Title } from "../../styles/General.styled";
// import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Subitle>
        Play with your friends and find out who's the <br />
        Tic Tac Toe master!
      </Subitle>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
    </Container>
  );
};

export default Home;
