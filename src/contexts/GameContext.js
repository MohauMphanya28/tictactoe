import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "x",
      name: "Mohau",
      score: 0, // Ensure score starts at 0
    },
    player2: {
      choice: "o",
      name: "Jay",
      score: 0, // Ensure score starts at 0
    },
    turn: "x",
  });
  ;

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

 // const toggleChoice = (choice) => choice === "x" ? "o" : "x";

  // const switchTurn = () => {
  //   setGame({
  //     ...game,
  //     player1: {
  //       ...game.player1,
  //       choice: toggleChoice(game.player1.choice)
  //     },
  //     player2: {
  //       ...game.player2,
  //       choice: toggleChoice(game.player2.choice)
  //     }
  //   });
  // }

  const roundComplete = (lastPlayer) => {
    console.log("Round complete. Checking scores for player:", lastPlayer);
  
    if (lastPlayer === game.player1.choice) {
      console.log("Player 1 wins");
      setGame((prevGame) => ({
        ...prevGame,
        player1: {
          ...prevGame.player1,
          score: (prevGame.player1.score || 0) + 1, // Increment Player 1's score
        },
      }));
    } else if (lastPlayer === game.player2.choice) {
      console.log("Player 2 wins");
      setGame((prevGame) => ({
        ...prevGame,
        player2: {
          ...prevGame.player2,
          score: (prevGame.player2.score || 0) + 1, // Increment Player 2's score
        },
      }));
    } else {
      console.log("It's a draw or no winner detected.");
    }
  };
  
  

  return (
    <GameContext.Provider value={{ game, updateBoard, resetBoard, roundComplete }}>
      {props.children}
    </GameContext.Provider>
  );
};
