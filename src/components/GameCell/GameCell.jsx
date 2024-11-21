import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svg/xicon.svg";
import { ReactComponent as IconO } from "../../assets/svg/oicon.svg";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";
import {ModalContext} from "../../contexts/ModalContext";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const {handleModal} = useContext(ModalContext)

  const cellClickHandler = () => {
    // Ensure the cell is not already taken before updating the board
    if (typeof game.board[index] === "number") {
      const lastPlayer = game.turn; // Save the current player before updating
      console.log("Last player:", lastPlayer);
  
      updateBoard(index); // Update the board with the current player's move
  
      // Simulate the board after the move to check for a winner
      const updatedBoard = [...game.board];
      updatedBoard[index] = lastPlayer;
  
      if (checkForWinner(updatedBoard)) {
        console.log("Winner detected");
        roundComplete(lastPlayer); // Pass the last player to determine the winner
        handleModal(<RoundOverModal />);
      }
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


// const cellClickHandler = () => {
//   const result = checkForWinner(game.board)
//   // Ensure the cell is not already taken before updating the board
//   if (typeof game.board[index] === "number") {
//     updateBoard(index);
//     if (checkForWinner(game.board || result)) {
//       roundComplete()
//       handleModal(<RoundOverModal />)
//     }
//   }
// };

// const cellClickHandler = () => {
//   // Ensure the cell is not already taken before updating the board
//   if (typeof game.board[index] === "number") {
//     // Update the board first
//     updateBoard(index);

//     // After updating the board, check if there's a winner
//     const result = checkForWinner([...game.board]); // Pass the updated board

//     if (result) {
//       roundComplete();  // Handle end of round
//       handleModal(<RoundOverModal />);  // Show the modal to indicate round over
//     }
//   }
// };
