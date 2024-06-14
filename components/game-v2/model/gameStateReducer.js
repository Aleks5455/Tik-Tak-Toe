import { moveOrder, symbols } from "../constants";
import { getNextMove } from "./getNextMove";

export const game_state_actions = {
  cell_click: "cell-click",
  tick: "tick",
  set_game_over: "set-game-over",
};

export const initGameState = ({
  playersCount,
  baseTimer,
  currentMoveStart,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: symbols.cross,
  currentMoveStart,
  playersCount,
  timers: moveOrder.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = baseTimer;
    }
    return timers;
  }, {}),
});

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case game_state_actions.cell_click: {
      const { index, now } = action;
      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        timers: updateTimer(state, now),
        currentMove: getNextMove(state),
        currentMoveStart: now,
        cells: updateCells(state, index),
      };
    }
    case game_state_actions.tick: {
      const { now } = action;
      if (!isTimeOver(state, now)) {
        return state;
      }
      return {
        ...state,
        timers: updateTimer(state, now),
        currentMove: getNextMove(state),
        currentMoveStart: now,
      };
    }
    case game_state_actions.set_game_over: { // добавить обработчик нового типа действия
      return {
        ...state,
        isGameOver: true,
      };
    }
    default: {
      return state;
    }
  }
};

function updateCells(gameState, index) {
  return gameState.cells.map((cell, i) =>
    i === index ? gameState.currentMove : cell
  );
}
function updateTimer(gameState, now) {
  if (gameState.isGameOver) {
    return gameState.timers;
  }
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];

  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff,
  };
}

function isTimeOver(gameState, now) {
  const timer = updateTimer(gameState, now)[gameState.currentMove];
  return timer <= 0;
}
