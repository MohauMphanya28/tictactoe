import React, { useContext } from "react";
import { Title, Subitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";

const RoundOverModal = () => {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
      <ModalHeader>
        <Title primary>
          {game.player1.choice === game.turn
            ? game.player1.name
            : game.player2.name}{" "}
          won this round!
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subitle primary>Choices will be switched now</Subitle>
        <Subitle primary>{game.player1.name} with X: {game.player1.score}</Subitle>
      <Subitle primary>{game.player2.name} with O: {game.player2.score}</Subitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </Button>
        <Button color="#8437f9">Restart</Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
