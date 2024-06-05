import { useReducer } from "react";
import BackLink from "./UI/BackLink";
import FieldCell from "./UI/FieldCell";
import GameInfo from "./UI/GameInfo";
import GameLayout from "./UI/GameLayout";
import GameOverModal from "./UI/GameOverModal";
import GameTitle from "./UI/GameTitle";
import MoveInfo from "./UI/MoveInfo";
import PlayerInfo from "./UI/PlayerInfo";
import { players } from "./constants";
import {
  gameStateReducer,
  game_state_actions,
  initGameState,
} from "./model/gameStateReducer";
import getWinnerSymbol from "./model/getWinnerSymbol";
import { findWinner } from "./model/findWinner";
import { getNextMove } from "./model/getNextMove";
import { computePlayerTimer } from "./model/computePlayerTimer";
import { useInterval } from "../lib/timer";

const players_count = 2;

const Game = () => {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: players_count,
      baseTimer: 10000,
      currentMoveStart: Date.now(),
    },
    initGameState
  );

  useInterval(1000, gameState.currentMoveStart, () => {
    dispatch({
      type: game_state_actions.tick,
      now: Date.now(),
    })
  })

  const winnerSequence = findWinner(gameState);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = getWinnerSymbol(gameState, { winnerSequence, nextMove });
  const winnerPlayer = players.find((p) => p.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            playersCount={4}
            timeAmount={"1 minute per turn"}
          />
        }
        playersList={players.slice(0, players_count).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol
          );
          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              symbol={player.symbol}
              timer={timer}
              timerStartAt={timerStartAt}
              isRight={index % 2 === 1}
            />
          );
        })}
        moveInfo={
          <MoveInfo currentMove={gameState.currentMove} nextMove={nextMove} />
        }
        fieldCells={gameState.cells.map((cell, index) => (
          <FieldCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() => {
              dispatch({
                type: game_state_actions.cell_click,
                index,
                now: Date.now(),
              });
            }}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={players.slice(0, players_count).map((player, index) => {
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            timer={gameState.timers[player.symbol]}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />;
        })}
      />
    </>
  );
};

export default Game;
