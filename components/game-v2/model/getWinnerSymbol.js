
const getWinnerSymbol = (gameState, {winnerSequence, nextMove}) => {
  return nextMove === gameState.currentMove
    ? gameState.currentMove
    : gameState.cells[winnerSequence?.[0]];
};

export default getWinnerSymbol;