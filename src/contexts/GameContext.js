import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });

  const updateBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = "x";
    setGame({
        ...game,
        board: updatedBoard
    })
  }

  return (
    <GameContext.Provider value={{ game, updateBoard }}>
      {props.children}
    </GameContext.Provider>
  );
};
