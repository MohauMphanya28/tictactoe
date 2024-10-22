import React, { useContext } from "react";
import { Title, Subitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";

const RoundOverModal = () => {
  const { resetBoard } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
      <ModalHeader>
        <Title primary>Jay won this round!</Title>
      </ModalHeader>
      <ModalBody>
        <Subitle primary>Choices will be switched now</Subitle>
        <Subitle primary>Jay with X: 1</Subitle>
        <Subitle primary>MJ with X: 1</Subitle>
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
