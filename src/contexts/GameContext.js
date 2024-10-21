import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "x",
      name: "Mohau",
    },
    player2: {
      choice: "o",
      name: "Jay",
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

  return (
    <GameContext.Provider value={{ game, updateBoard }}>
      {props.children}
    </GameContext.Provider>
  );
};
