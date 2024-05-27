import { moveOrder, symbols } from "./constants";

export function findWinner(cells, lineSize = 5, fieldSize = 19) {
  const gap = Math.floor(lineSize / 2);

  function compareElements(indexes) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return result;
  }

  function getLineIndexes(i) {
    const res = [[], [], [], []];

    for (let j = 0; j < lineSize; j++) {
      res[0].push(j - gap + i);
      res[1].push(fieldSize * (j - gap) + (j - gap) + i);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      res[3].push(fieldSize * (j - gap) + i);
    }

    const temp = i % fieldSize;
    if (temp < gap || temp >= fieldSize - gap) {
      res.shift();
      res.shift();
      res.shift();
    }
    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getLineIndexes(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));

      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }
  return undefined;
}

export function getNextMove(currentMove, playersCount, playersTimeOver) {
  const slicedMoveOrder = moveOrder.slice(0, playersCount).filter(symbol => !playersTimeOver.includes(symbol));

  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
