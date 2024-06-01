import { moveOrder } from "../constants";

export function getNextMove({ currentMove, playersCount }) {
  const slicedMoveOrder = moveOrder.slice(0, playersCount);
  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
