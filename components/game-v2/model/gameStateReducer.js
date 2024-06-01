import { symbols } from "../constants";
import { getNextMove } from "./getNextMove";

export const game_state_actions = {
  cell_click: "cell-click",
};


export const initGameState = ({ playersCount }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: symbols.cross,
  playersCount,
});

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case game_state_actions.cell_click: {
      const { index } = action;
      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        currentMove: getNextMove(state),
        cells: state.cells.map((cell, i) =>
          i === index ? state.currentMove : cell
        ),
      };
    }
    default: {
      return state;
    }
  }
};
