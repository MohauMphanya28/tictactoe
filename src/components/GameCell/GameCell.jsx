import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svg/xicon.svg";
import { ReactComponent as IconO } from "../../assets/svg/oicon.svg";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index);
    checkForWinner(game.board);
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO />
      </CellStyle>
    );
  }

  return (
    <CellStyle
      onClick={() => {
        cellClickHandler();
      }}
    >
      {game.turn === "x" ? (<IconX />) : (<IconO />)}
    </CellStyle>
  );
};

export default GameCell;
