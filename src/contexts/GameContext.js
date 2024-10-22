import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "X",
      name: "Mohau",
      score: 0,
    },
    player2: {
      choice: "O",
      name: "Jay",
      score: 0,
    },
    turn: "x",
  });

  const updateBoard = (index) => {
    let updatedBoard = [...game.board]; // Create a copy of the board
    updatedBoard[index] = game.turn; // Set the cell to the current player's symbol
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "x" ? "o" : "x", // Switch turns
    });
  };

  const resetBoard = () => {
    setGame({
      ...game,
      board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
  };

  return (
    <GameContext.Provider value={{ game, updateBoard, resetBoard }}>
      {props.children}
    </GameContext.Provider>
  );
};
