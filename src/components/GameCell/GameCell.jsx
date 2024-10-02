import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
const GameCell = ({ cellitem, index }) => {
  const { updateBoard, game } = useContext(GameContext);
  const cellClickHandler = () => {
    updateBoard(index)
    const result = checkForWinner(game.board)
    // if(result) {
      
    // }
  };

  return (
    <CellStyle
      onClick={() => {cellClickHandler()}}>
      {cellitem}
    </CellStyle>
  );
};

export default GameCell;
