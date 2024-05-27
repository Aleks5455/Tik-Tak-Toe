import { useState } from "react";
import { symbols } from "./constants";
import { findWinner, getNextMove } from "./gameLogic";

export function useGameState(playersCount) {
  const [{ cells, currentMove , playersTimeOver}, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: symbols.cross,
      playersTimeOver: [],
    })
  );

  const winnerSequence = findWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

  const winnerSymbol = nextMove === currentMove ? currentMove : winnerSequence?.[0];


  const CellClick = (index) => {
    setGameState((lastState) => {
      if (lastState.cells[index]) {
        return lastState;
      }

      return {
        ...lastState,
        currentMove: getNextMove(lastState.currentMove, playersCount, lastState.playersTimeOver),
        cells: lastState.cells.map((cell, i) =>
          i === index ? lastState.currentMove : cell
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastState) => {
      return {
        ...lastState,
        playersTimeOver: [...lastState.playersTimeOver, symbol],
        currentMove: getNextMove(lastState.currentMove, playersCount, lastState.playersTimeOver)
      };
    });
  };

  return { cells, currentMove, nextMove, CellClick, handlePlayerTimeOver, winnerSequence, winnerSymbol };
}
