import { useState } from "react";
import { moveOrder, symbols } from "./constants";

export function useGameState() {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: symbols.cross,
  }));
  const nextMove = getNextMove(currentMove);

  const CellClick = (index) => {
    setGameState((lastState) => {
      if (lastState.cells[index]) {
        return lastState;
      }

      return {
        ...lastState,
        currentMove: getNextMove(lastState.currentMove),
        cells: lastState.cells.map((cell, i) =>
          i === index ? lastState.currentMove : cell
        ),
      };
    });
  };

  return { cells, currentMove, nextMove, CellClick };
}

function getNextMove(currentMove) {
  const nextMoveIndex = moveOrder.indexOf(currentMove) + 1;
  return moveOrder[nextMoveIndex] ?? moveOrder[0];
}
