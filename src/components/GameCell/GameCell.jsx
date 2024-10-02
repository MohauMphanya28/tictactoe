import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";

const GameCell = ({ cellitem, index }) => {
  const { updateBoard } = useContext(GameContext);
  return (
    <CellStyle
      onClick={() => {
        console.log(cellitem, index);
        updateBoard(index);
      }}
    >
      {cellitem}
    </CellStyle>
  );
};

export default GameCell;
