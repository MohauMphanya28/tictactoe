import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svg/xicon.svg";
import { ReactComponent as IconO } from "../../assets/svg/oicon.svg";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    // Ensure the cell is not already taken before updating the board
    if (typeof game.board[index] === "number") {
      updateBoard(index);
      checkForWinner(game.board);
    }
  };

  // Render "x" or "o" based on the value in the board array
  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="iconColor" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="iconColor" />
      </CellStyle>
    );
  }

  // Render an empty cell that is clickable
  return (
    <CellStyle onClick={cellClickHandler}>
      {/* Show nothing in the cell if it’s still a number */}
      {""}
    </CellStyle>
  );
};

export default GameCell;
